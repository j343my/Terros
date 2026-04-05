'use client';
import { useState, useMemo } from 'react';
import { Modal } from './ui';
import { STATUS_LABELS } from '../lib/utils';
import { CALENDRIER_IDF, findPlante, getConseil, suggestDates } from '../lib/plantingCalendar';

const MOIS_COURT = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];

const STATUS_ICONS = {
  ok:       { icon: '✓', color: 'var(--green-700)', bg: 'var(--green-100)' },
  soon:     { icon: '→', color: 'var(--amber-600)', bg: 'var(--amber-100)' },
  upcoming: { icon: '→', color: 'var(--amber-600)', bg: 'var(--amber-50)' },
  later:    { icon: '·', color: 'var(--text-3)',    bg: 'var(--gray-100)' },
  late:     { icon: '✗', color: 'var(--gray-500)',  bg: 'var(--gray-100)' },
};

function ConseilPanel({ plante, onPrefill }) {
  const currentMonth = new Date().getMonth();
  const conseil = useMemo(() => getConseil(plante, currentMonth), [plante, currentMonth]);

  const rows = [
    conseil.semis_int  && { label: 'Semis intérieur', ...conseil.semis_int },
    conseil.semis_ext  && { label: 'Semis extérieur', ...conseil.semis_ext },
    conseil.plantation && { label: 'Plantation dehors',
      status: conseil.plantation.status,
      label2: conseil.plantation.label + (plante.plantation_note ? ` — ${plante.plantation_note}` : ''),
    },
    conseil.recolte    && { label: 'Récolte', ...conseil.recolte },
  ].filter(Boolean).map(r => ({ ...r, label2: r.label2 || r.label, ...STATUS_ICONS[r.status] }));

  const hasGoodNow = rows.some(r => r.status === 'ok');

  return (
    <div style={{
      background: hasGoodNow ? 'var(--green-50)' : 'var(--gray-50)',
      border: `1px solid ${hasGoodNow ? 'var(--green-200)' : 'var(--border)'}`,
      borderRadius: 'var(--radius)',
      padding: '12px 14px',
      marginBottom: 14,
    }}>
      {/* En-tête */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ fontWeight: 700, fontSize: 13, color: hasGoodNow ? 'var(--green-700)' : 'var(--text-2)' }}>
          {plante.emoji} {plante.nom} · Île-de-France · {MOIS_COURT[currentMonth]}
        </div>
        <button
          type="button"
          onClick={onPrefill}
          style={{
            fontSize: 11, padding: '3px 9px', borderRadius: 99,
            border: '1px solid var(--border-strong)', background: 'var(--surface)',
            color: 'var(--text-2)', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
          }}
        >
          Pré-remplir dates
        </button>
      </div>

      {/* Mini calendrier 12 mois */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 2, marginBottom: 10 }}>
        {Array.from({ length: 12 }, (_, m) => {
          const isRecolte    = plante.recolte?.includes(m);
          const isPlantation = plante.plantation?.includes(m);
          const isSemisExt   = plante.semis_ext?.includes(m);
          const isSemisInt   = plante.semis_int?.includes(m);
          const isCurrent    = m === currentMonth;
          const bg = isRecolte ? '#EF9F27'
                   : isPlantation ? '#97c459'
                   : (isSemisExt || isSemisInt) ? '#B5D4F4'
                   : '#E8E6DF';
          return (
            <div key={m} style={{
              height: 18,
              background: bg,
              borderRadius: 3,
              outline: isCurrent ? '2px solid var(--text)' : 'none',
              outlineOffset: 1,
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 7, fontWeight: isCurrent ? 800 : 500,
                color: (isRecolte || isPlantation) ? '#fff' : isCurrent ? 'var(--text)' : 'var(--text-3)',
                userSelect: 'none',
              }}>
                {MOIS_COURT[m].slice(0, 1)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Légende mini */}
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
        {[['#B5D4F4', 'Semis'], ['#97c459', 'Plantation'], ['#EF9F27', 'Récolte']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: 'var(--text-3)' }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: c, flexShrink: 0 }} />
            {l}
          </div>
        ))}
      </div>

      {/* Statuts par action */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 18, height: 18, borderRadius: 4,
              background: r.bg, color: r.color, fontSize: 11, fontWeight: 700, flexShrink: 0,
            }}>
              {r.icon}
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-2)' }}>
              <span style={{ fontWeight: 600 }}>{r.label}</span>
              {' — '}
              <span style={{ color: r.color, fontWeight: r.status === 'ok' ? 700 : 500 }}>
                {r.label2 || r.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      {plante.notes && (
        <div style={{
          marginTop: 10, paddingTop: 9,
          borderTop: '1px solid var(--border)',
          fontSize: 11, color: 'var(--text-3)', fontStyle: 'italic', lineHeight: 1.4,
        }}>
          {plante.notes}
        </div>
      )}
    </div>
  );
}

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

  // Correspondance dans le référentiel IDF
  const refPlante = useMemo(() => findPlante(nom), [nom]);

  const handlePrefill = () => {
    if (!refPlante) return;
    const dates = suggestDates(refPlante, new Date());
    if (dates.semis && needsSemis) setDateSemis(dates.semis);
    if (dates.plantation) setDatePlantation(dates.plantation);
    if (dates.recolte) setDateRecolte(dates.recolte);
    if (dates.fin) setDateFin(dates.fin);
  };

  return (
    <Modal title={initial ? 'Modifier la plante' : 'Nouvelle plante'} onClose={onClose}>
      {/* Autocomplete avec les plantes du référentiel */}
      <datalist id="plantes-idf">
        {CALENDRIER_IDF.map(p => <option key={p.nom} value={p.nom} />)}
      </datalist>

      <div className="field">
        <label>Plante</label>
        <input
          value={nom}
          onChange={e => setNom(e.target.value)}
          placeholder="Ex : Tomate"
          list="plantes-idf"
          autoComplete="off"
        />
      </div>

      {/* Panneau de conseil si la plante est dans le référentiel */}
      {refPlante && (
        <ConseilPanel plante={refPlante} onPrefill={handlePrefill} />
      )}

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
