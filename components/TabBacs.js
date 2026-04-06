'use client';
import { useState } from 'react';
import { BadgeOrigine, BadgeStatus } from './ui';
import { BacForm, PlantForm } from './forms';
import PlantDetail from './PlantDetail';
import { STATUS_COLORS, uid } from '../lib/utils';
import { findPlante } from '../lib/plantingCalendar';

export default function TabBacs({ bacs, plants, journal, setBacs, setPlants, setJournal }) {
  const [showBacForm, setShowBacForm] = useState(false);
  const [editBac, setEditBac] = useState(null);
  const [showPlantForm, setShowPlantForm] = useState(false);
  const [editPlant, setEditPlant] = useState(null);
  const [plantBacId, setPlantBacId] = useState(null);
  const [detailPlant, setDetailPlant] = useState(null);

  const saveBac = data => {
    if (editBac) setBacs(b => b.map(x => x.id === editBac.id ? { ...x, ...data } : x));
    else setBacs(b => [...b, { id: uid(), ...data }]);
    setShowBacForm(false); setEditBac(null);
  };

  const delBac = id => {
    if (confirm('Supprimer ce bac et toutes ses plantes ?')) {
      setBacs(b => b.filter(x => x.id !== id));
      setPlants(p => p.filter(x => x.bac_id !== id));
    }
  };

  const savePlant = data => {
    if (editPlant) {
      setPlants(p => p.map(x => x.id === editPlant.id ? { ...x, ...data } : x));
      setDetailPlant(prev => prev ? { ...prev, ...data } : null);
    } else {
      setPlants(p => [...p, { id: uid(), ...data }]);
    }
    setShowPlantForm(false); setEditPlant(null);
  };

  const delPlant = id => {
    if (confirm('Supprimer cette plante ?')) {
      setPlants(p => p.filter(x => x.id !== id));
      setDetailPlant(null);
    }
  };

  if (detailPlant) {
    const currentPlant = plants.find(p => p.id === detailPlant.id) || detailPlant;
    const bac = bacs.find(b => b.id === currentPlant.bac_id);
    return (
      <>
        <PlantDetail
          plant={currentPlant}
          bac={bac}
          journal={journal}
          onAddJournal={j => setJournal(jj => [...jj, j])}
          onEditPlant={() => { setEditPlant(currentPlant); setShowPlantForm(true); }}
          onDeletePlant={() => delPlant(currentPlant.id)}
          onBack={() => setDetailPlant(null)}
        />
        {showPlantForm && (
          <PlantForm initial={editPlant} bacs={bacs} plants={plants} defaultBacId={editPlant?.bac_id} onSave={savePlant} onClose={() => { setShowPlantForm(false); setEditPlant(null); }} />
        )}
      </>
    );
  }

  return (
    <div>
      {bacs.length === 0 ? (
        <div className="empty">
          <div className="empty-icon">🪴</div>
          <div className="empty-text">Aucun bac pour l'instant.<br />Commence par créer ton premier bac !</div>
        </div>
      ) : (
        <div className="bacs-grid">
        {bacs.map(bac => {
          const bp = plants.filter(p => p.bac_id === bac.id);
          return (
            <div key={bac.id} className="card">
              <div className="card-header">
                <div className="bac-avatar">{bac.nom.slice(0, 2).toUpperCase()}</div>
                <div style={{ flex: 1 }}>
                  <div className="card-title">{bac.nom}</div>
                  <div className="card-sub">
                    {[bac.dimensions && bac.dimensions + ' cm', bac.volume && bac.volume + ' L', bac.exposition, bac.emplacement === 'interieur' ? 'Intérieur' : 'Extérieur'].filter(Boolean).join(' · ')}
                  </div>
                </div>
                <div className="card-actions">
                  <button className="btn-ghost" onClick={() => { setEditBac(bac); setShowBacForm(true); }}>✎</button>
                  <button className="btn-ghost" style={{ color: 'var(--terra-300)' }} onClick={() => delBac(bac.id)}>✕</button>
                </div>
              </div>
              {bp.length === 0 ? (
                <div style={{ fontSize: 12, color: 'var(--text-3)', padding: '4px 0' }}>Aucune plante</div>
              ) : (
                bp.map(p => (
                  <div key={p.id} className="plant-row" onClick={() => setDetailPlant(p)}>
                    <span className="plant-row-emoji">{findPlante(p.nom)?.emoji || '🌱'}</span>
                    <div style={{ flex: 1 }}>
                      <div className="plant-name">
                        {p.nom}
                        {p.varietal && <span className="plant-varietal"> · {p.varietal}</span>}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                      <BadgeOrigine val={p.origine} />
                      <BadgeStatus val={p.statut} />
                      <span style={{ fontSize: 13, color: 'var(--text-3)' }}>›</span>
                    </div>
                  </div>
                ))
              )}
              <button className="btn-add" onClick={() => { setPlantBacId(bac.id); setShowPlantForm(true); }}>+ Plante</button>
            </div>
          );
        })}
        </div>
      )}
      <button className="btn-add" onClick={() => { setEditBac(null); setShowBacForm(true); }}>+ Ajouter un bac</button>

      {showBacForm && <BacForm initial={editBac} onSave={saveBac} onClose={() => { setShowBacForm(false); setEditBac(null); }} />}
      {showPlantForm && !detailPlant && (
        <PlantForm initial={editPlant} bacs={bacs} plants={plants} defaultBacId={plantBacId} onSave={savePlant} onClose={() => { setShowPlantForm(false); setEditPlant(null); setPlantBacId(null); }} />
      )}
    </div>
  );
}
