'use client';
import { useState } from 'react';
import { BadgeOrigine, BadgeStatus } from './ui';
import { MOIS, getPlantPhases, fmtDate, uid, today } from '../lib/utils';
import { findPlante } from '../lib/plantingCalendar';

const PHASE_COLORS = { semis: '#B5D4F4', croissance: '#C0DD97', recolte: '#EF9F27', none: '#F1EFE8' };

export default function PlantDetail({ plant, bac, journal, onAddJournal, onEditPlant, onDeletePlant, onBack }) {
  const [noteText, setNoteText] = useState('');
  const phases = getPlantPhases(plant);
  const pJournal = journal.filter(j => j.plant_id === plant.id).sort((a, b) => b.date.localeCompare(a.date));

  const refPlante = findPlante(plant.nom);
  const plantEmoji = refPlante?.emoji || '🌱';
  const avatarBg = plant.origine === 'semence_propre' ? 'var(--green-100)' : plant.origine === 'graines_achetees' ? 'var(--blue-100)' : 'var(--amber-100)';

  return (
    <div>
      <div className="back-row">
        <button className="btn-ghost" onClick={onBack}>← Retour</button>
      </div>

      <div className="card">
        {/* Image banner */}
        <div className="plant-image-banner" style={{ background: avatarBg }}>
          <span className="plant-image-emoji">{plantEmoji}</span>
        </div>

        <div className="plant-detail-header">
          <div className="plant-detail-info">
            <div className="card-title">
              {plant.nom}
              {plant.varietal && <span style={{ fontWeight: 400, color: 'var(--text-3)' }}> · {plant.varietal}</span>}
            </div>
            <div className="card-sub">{bac?.nom}</div>
          </div>
          <div className="plant-detail-actions">
            <button className="btn" style={{ padding: '5px 10px', fontSize: 12 }} onClick={onEditPlant}>Éditer</button>
            <button className="btn btn-danger" onClick={onDeletePlant}>Supprimer</button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6, marginBottom: 14 }}>
          <BadgeOrigine val={plant.origine} />
          <BadgeStatus val={plant.statut} />
        </div>

        {refPlante?.notes && (
          <div className="plant-ref-notes">
            <span style={{ marginRight: 6 }}>💡</span>{refPlante.notes}
          </div>
        )}

        <div className="section-title">Calendrier annuel</div>
        <div style={{ overflowX: 'auto', marginBottom: 4 }}>
          <div style={{ minWidth: 300 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 2, marginBottom: 3 }}>
              {MOIS.map(m => <div key={m} style={{ textAlign: 'center', fontSize: 9, color: 'var(--text-3)' }}>{m}</div>)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 2 }}>
              {phases.map((ph, i) => <div key={i} style={{ height: 14, borderRadius: 2, background: PHASE_COLORS[ph] || PHASE_COLORS.none }} />)}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6, marginBottom: 4 }}>
          {[['#B5D4F4', 'Semis int.'], ['#C0DD97', 'Croissance'], ['#EF9F27', 'Récolte']].map(([c, l]) => (
            <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: 'var(--text-3)' }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: c, display: 'inline-block' }} />
              {l}
            </span>
          ))}
        </div>

        <div className="section-title" style={{ marginTop: 14 }}>Dates clés</div>
        <div className="dates-grid">
          {plant.origine !== 'plant_acheté' && plant.date_semis && (
            <div className="date-chip" style={{ background: 'var(--blue-100)' }}>
              <div style={{ fontSize: 10, color: 'var(--blue-700)', marginBottom: 2 }}>Semis intérieur</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue-700)' }}>{fmtDate(plant.date_semis)}</div>
            </div>
          )}
          {plant.date_plantation && (
            <div className="date-chip" style={{ background: 'var(--green-100)' }}>
              <div style={{ fontSize: 10, color: 'var(--green-700)', marginBottom: 2 }}>Plantation dehors</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--green-700)' }}>{fmtDate(plant.date_plantation)}</div>
            </div>
          )}
          {plant.date_recolte && (
            <div className="date-chip" style={{ background: 'var(--amber-100)' }}>
              <div style={{ fontSize: 10, color: 'var(--amber-600)', marginBottom: 2 }}>1ère récolte</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--amber-600)' }}>{fmtDate(plant.date_recolte)}</div>
            </div>
          )}
          {plant.date_fin && (
            <div className="date-chip" style={{ background: 'var(--gray-100)' }}>
              <div style={{ fontSize: 10, color: 'var(--gray-500)', marginBottom: 2 }}>Fin / arrachage</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--gray-500)' }}>{fmtDate(plant.date_fin)}</div>
            </div>
          )}
        </div>
      </div>

      <div className="section-title">Journal</div>
      <div className="card">
        <textarea
          style={{ width: '100%', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '9px 12px', fontSize: 13, fontFamily: 'inherit', marginBottom: 8, resize: 'vertical', minHeight: 64 }}
          placeholder="Ajouter une observation, une action…"
          value={noteText}
          onChange={e => setNoteText(e.target.value)}
        />
        <button
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => {
            if (noteText.trim()) {
              onAddJournal({ id: uid(), plant_id: plant.id, date: today(), texte: noteText.trim() });
              setNoteText('');
            }
          }}
        >
          Ajouter au journal
        </button>
        {pJournal.length > 0 && (
          <>
            <div className="section-title" style={{ marginTop: 14 }}>Historique</div>
            {pJournal.map(j => (
              <div key={j.id} className="journal-entry">
                <div className="journal-date">{fmtDate(j.date)}</div>
                <div className="journal-text">{j.texte}</div>
              </div>
            ))}
          </>
        )}
        {pJournal.length === 0 && (
          <div style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', padding: '12px 0', marginTop: 8 }}>
            Aucune note pour l'instant
          </div>
        )}
      </div>
    </div>
  );
}
