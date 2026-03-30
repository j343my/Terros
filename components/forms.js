'use client';
import { useState } from 'react';
import { Modal } from './ui';
import { STATUS_LABELS } from '../lib/utils';

export function BacForm({ initial, onSave, onClose }) {
  const [nom, setNom] = useState(initial?.nom || '');
  const [dim, setDim] = useState(initial?.dimensions || '');
  const [vol, setVol] = useState(initial?.volume || '');
  const [expo, setExpo] = useState(initial?.exposition || 'Sud-Est');
  const [notes, setNotes] = useState(initial?.notes || '');

  return (
    <Modal title={initial ? 'Modifier le bac' : 'Nouveau bac'} onClose={onClose}>
      <div className="field"><label>Nom du bac</label><input value={nom} onChange={e => setNom(e.target.value)} placeholder="Ex : Bac long terrasse" /></div>
      <div className="field"><label>Dimensions (L×l cm)</label><input value={dim} onChange={e => setDim(e.target.value)} placeholder="Ex : 60×30" /></div>
      <div className="field"><label>Volume (litres)</label><input type="number" value={vol} onChange={e => setVol(e.target.value)} placeholder="Ex : 40" /></div>
      <div className="field">
        <label>Exposition</label>
        <select value={expo} onChange={e => setExpo(e.target.value)}>
          {['Sud', 'Sud-Est', 'Sud-Ouest', 'Est', 'Ouest', 'Nord-Est', 'Nord'].map(x => <option key={x}>{x}</option>)}
        </select>
      </div>
      <div className="field"><label>Notes</label><textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Emplacement, particularités…" /></div>
      <div className="modal-actions">
        <button className="btn" onClick={onClose}>Annuler</button>
        <button className="btn btn-primary" onClick={() => { if (nom) onSave({ nom, dimensions: dim, volume: vol, exposition: expo, notes }); }}>Enregistrer</button>
      </div>
    </Modal>
  );
}

export function PlantForm({ initial, bacs, defaultBacId, onSave, onClose }) {
  const [nom, setNom] = useState(initial?.nom || '');
  const [varietal, setVarietal] = useState(initial?.varietal || '');
  const [bacId, setBacId] = useState(initial?.bac_id || defaultBacId || bacs[0]?.id || '');
  const [origine, setOrigine] = useState(initial?.origine || 'semence_propre');
  const [dateSemis, setDateSemis] = useState(initial?.date_semis || '');
  const [datePlantation, setDatePlantation] = useState(initial?.date_plantation || '');
  const [dateRecolte, setDateRecolte] = useState(initial?.date_recolte || '');
  const [dateFin, setDateFin] = useState(initial?.date_fin || '');
  const [statut, setStatut] = useState(initial?.statut || 'semis');

  const needsSemis = origine !== 'plant_acheté';

  return (
    <Modal title={initial ? 'Modifier la plante' : 'Nouvelle plante'} onClose={onClose}>
      <div className="field"><label>Plante</label><input value={nom} onChange={e => setNom(e.target.value)} placeholder="Ex : Tomate" /></div>
      <div className="field"><label>Variété (optionnel)</label><input value={varietal} onChange={e => setVarietal(e.target.value)} placeholder="Ex : Andine Cornue" /></div>
      {bacs.length > 0 && (
        <div className="field">
          <label>Bac</label>
          <select value={bacId} onChange={e => setBacId(e.target.value)}>
            {bacs.map(b => <option key={b.id} value={b.id}>{b.nom}</option>)}
          </select>
        </div>
      )}
      <div className="field">
        <label>Origine</label>
        <div className="toggle-group">
          {[['semence_propre', 'Semence propre'], ['graines_achetees', 'Graines achetées'], ['plant_acheté', 'Plant acheté']].map(([v, l]) => (
            <div key={v} className={`toggle-opt${origine === v ? ' active' : ''}`} onClick={() => { setOrigine(v); if (v === 'plant_acheté') setDateSemis(''); }}>{l}</div>
          ))}
        </div>
      </div>
      {needsSemis && <div className="field"><label>Date de semis (intérieur)</label><input type="date" value={dateSemis} onChange={e => setDateSemis(e.target.value)} /></div>}
      <div className="field"><label>{needsSemis ? 'Date de plantation (dehors)' : 'Date de plantation'}</label><input type="date" value={datePlantation} onChange={e => setDatePlantation(e.target.value)} /></div>
      <div className="field"><label>Début de récolte</label><input type="date" value={dateRecolte} onChange={e => setDateRecolte(e.target.value)} /></div>
      <div className="field"><label>Date de fin / arrachage</label><input type="date" value={dateFin} onChange={e => setDateFin(e.target.value)} /></div>
      <div className="field">
        <label>Statut actuel</label>
        <select value={statut} onChange={e => setStatut(e.target.value)}>
          {Object.entries(STATUS_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
        </select>
      </div>
      <div className="modal-actions">
        <button className="btn" onClick={onClose}>Annuler</button>
        <button className="btn btn-primary" onClick={() => {
          if (nom && (bacId || bacs.length === 0))
            onSave({ nom, varietal, bac_id: bacId, origine, date_semis: dateSemis, date_plantation: datePlantation, date_recolte: dateRecolte, date_fin: dateFin, statut });
        }}>Enregistrer</button>
      </div>
    </Modal>
  );
}
