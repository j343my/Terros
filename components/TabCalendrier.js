'use client';
import { useState } from 'react';
import { MOIS, getPlantPhases } from '../lib/utils';
import { CALENDRIER_IDF, getRefPhases, getConseil } from '../lib/plantingCalendar';

const PHASE_COLORS   = { semis: '#B5D4F4', croissance: '#C0DD97', recolte: '#EF9F27', none: '#F1EFE8' };
const REF_COLORS     = { semis_int: '#B5D4F4', semis_ext: '#D4E8FA', plantation: '#C0DD97', recolte: '#EF9F27', none: '#F1EFE8' };
const STATUS_STYLE   = {
  ok:       { color: 'var(--green-700)',  bg: 'var(--green-100)',  icon: '✓' },
  soon:     { color: 'var(--amber-600)',  bg: 'var(--amber-100)', icon: '→' },
  upcoming: { color: 'var(--amber-600)',  bg: 'var(--amber-50)',  icon: '→' },
  later:    { color: 'var(--text-3)',     bg: 'var(--gray-100)',  icon: '·' },
  late:     { color: 'var(--gray-500)',   bg: 'var(--gray-100)',  icon: '✗' },
};
const FAMILLES_ORDER = ['Solanacée','Cucurbitacée','Légumineuse','Légume-racine','Salade',"Salade d'hiver",'Légume-feuille','Aromatique','Fruit'];

// ──────────────────────────────────────────────────────────
//  Vue "Mon Potager" (calendrier des plantes de l'utilisateur)
// ──────────────────────────────────────────────────────────
function PotagerView({ plants, bacs }) {
  const yr = new Date().getFullYear();

  if (plants.length === 0) return (
    <div className="empty">
      <div className="empty-icon">📅</div>
      <div className="empty-text">Ajoute des plantes pour voir leur calendrier</div>
    </div>
  );

  return (
    <div>
      <div className="cal-legend">
        {[['#B5D4F4', 'Semis int.'], ['#C0DD97', 'Croissance'], ['#EF9F27', 'Récolte'], ['#F1EFE8', 'Repos']].map(([c, l]) => (
          <div key={l} className="cal-legend-item">
            <div className="cal-legend-dot" style={{ background: c }} />
            {l}
          </div>
        ))}
      </div>

      <div style={{ overflowX: 'auto', marginLeft: -20, marginRight: -20, paddingLeft: 20, paddingRight: 20 }}>
        <div style={{ minWidth: 380 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '76px repeat(12,1fr)', gap: 2, marginBottom: 5 }}>
            <div />
            {MOIS.map((m, i) => (
              <div key={m} style={{
                textAlign: 'center', fontSize: 9,
                color: i === new Date().getMonth() ? 'var(--green-700)' : 'var(--text-3)',
                fontWeight: i === new Date().getMonth() ? 800 : 600,
              }}>{m}</div>
            ))}
          </div>

          {plants.map(p => {
            const phases = getPlantPhases(p);
            const bac = bacs.find(b => b.id === p.bac_id);
            return (
              <div key={p.id} style={{ display: 'grid', gridTemplateColumns: '76px repeat(12,1fr)', gap: 2, marginBottom: 5, alignItems: 'center' }}>
                <div style={{ fontSize: 10, color: 'var(--text-2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: 5 }} title={p.nom + (p.varietal ? ' · ' + p.varietal : '')}>
                  {p.nom}
                  {bac && <span style={{ color: 'var(--text-3)' }}> ({bac.nom.slice(0, 4)})</span>}
                </div>
                {phases.map((ph, i) => (
                  <div key={i} style={{
                    height: 16, borderRadius: 3,
                    background: PHASE_COLORS[ph] || PHASE_COLORS.none,
                    outline: i === new Date().getMonth() ? '1.5px solid var(--border-strong)' : 'none',
                  }} />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: 16, padding: '10px 14px', background: 'var(--green-50)', borderRadius: 'var(--radius)', border: '1px solid var(--green-200)' }}>
        <div style={{ fontSize: 11, color: 'var(--green-700)', fontWeight: 600, marginBottom: 2 }}>Saison {yr}</div>
        <div style={{ fontSize: 11, color: 'var(--green-700)' }}>Dates calculées depuis les informations de chaque plante</div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
//  Carte détail dans le référentiel
// ──────────────────────────────────────────────────────────
function RefCard({ plante }) {
  const currentMonth = new Date().getMonth();
  const conseil = getConseil(plante, currentMonth);
  const phases = getRefPhases(plante);

  const mainConseil = conseil.recolte?.status === 'ok' ? conseil.recolte
    : conseil.plantation?.status === 'ok' ? conseil.plantation
    : conseil.semis_int?.status === 'ok' ? conseil.semis_int
    : conseil.semis_ext?.status === 'ok' ? conseil.semis_ext
    : conseil.semis_int?.status === 'soon' ? conseil.semis_int
    : conseil.plantation?.status === 'soon' ? conseil.plantation
    : null;

  const style = mainConseil ? STATUS_STYLE[mainConseil.status] : null;

  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}>
      {/* Titre */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>{plante.emoji}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13 }}>{plante.nom}</div>
          <div style={{ fontSize: 10, color: 'var(--text-3)' }}>{plante.famille} · {plante.expo}</div>
        </div>
        {style && (
          <div style={{
            fontSize: 10, fontWeight: 600,
            padding: '2px 8px', borderRadius: 99,
            background: style.bg, color: style.color,
            whiteSpace: 'nowrap',
          }}>
            {style.icon} {mainConseil.label}
          </div>
        )}
      </div>

      {/* Barre calendrier 12 mois */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 2 }}>
        {phases.map((ph, m) => (
          <div key={m} style={{
            height: 14, borderRadius: 2,
            background: REF_COLORS[ph] || REF_COLORS.none,
            outline: m === currentMonth ? '2px solid var(--text)' : 'none',
            outlineOffset: 1,
          }} title={['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'][m]} />
        ))}
      </div>

      {/* Note */}
      {plante.notes && (
        <div style={{ fontSize: 10, color: 'var(--text-3)', lineHeight: 1.4, fontStyle: 'italic' }}>
          {plante.notes}
        </div>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────────────
//  Vue Référentiel Île-de-France
// ──────────────────────────────────────────────────────────
function ReferentielView() {
  const currentMonth = new Date().getMonth();
  const MOIS_COURT = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  const [filtre, setFiltre] = useState('Tout');

  const familles = ['Tout', ...FAMILLES_ORDER.filter(f => CALENDRIER_IDF.some(p => p.famille === f))];

  const plantes = filtre === 'Tout'
    ? CALENDRIER_IDF
    : CALENDRIER_IDF.filter(p => p.famille === filtre);

  // Trier : celles disponibles maintenant en premier
  const sorted = [...plantes].sort((a, b) => {
    const score = p => {
      const c = getConseil(p, currentMonth);
      if (c.recolte?.status === 'ok') return 0;
      if (c.plantation?.status === 'ok') return 1;
      if (c.semis_int?.status === 'ok' || c.semis_ext?.status === 'ok') return 2;
      if (c.plantation?.status === 'soon' || c.semis_int?.status === 'soon') return 3;
      return 10;
    };
    return score(a) - score(b);
  });

  return (
    <div>
      {/* Bandeau mois courant */}
      <div style={{
        padding: '10px 14px', marginBottom: 16,
        background: 'var(--green-50)', border: '1px solid var(--green-200)',
        borderRadius: 'var(--radius)', fontSize: 12, color: 'var(--green-700)',
      }}>
        <span style={{ fontWeight: 700 }}>Île-de-France · {MOIS_COURT[currentMonth]}</span>
        {' — '}Calendrier indicatif, adaptez selon votre exposition et micro-climat.
      </div>

      {/* Légende */}
      <div className="cal-legend" style={{ marginBottom: 12 }}>
        {[['#B5D4F4', 'Semis intérieur'], ['#D4E8FA', 'Semis extérieur'], ['#C0DD97', 'Plantation'], ['#EF9F27', 'Récolte']].map(([c, l]) => (
          <div key={l} className="cal-legend-item">
            <div className="cal-legend-dot" style={{ background: c }} />
            {l}
          </div>
        ))}
      </div>

      {/* Filtre par famille */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {familles.map(f => (
          <button
            key={f}
            onClick={() => setFiltre(f)}
            style={{
              padding: '4px 10px', borderRadius: 99, fontSize: 11, cursor: 'pointer',
              border: '1px solid var(--border-strong)', fontFamily: 'inherit',
              background: filtre === f ? 'var(--green-700)' : 'var(--surface)',
              color: filtre === f ? '#fff' : 'var(--text-2)',
              fontWeight: filtre === f ? 600 : 400,
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grille des plantes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
        {sorted.map(p => <RefCard key={p.nom} plante={p} />)}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
//  Composant principal
// ──────────────────────────────────────────────────────────
export default function TabCalendrier({ plants, bacs }) {
  const [view, setView] = useState('potager');

  return (
    <div>
      {/* Sélecteur de vue */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 20, background: 'var(--gray-100)', borderRadius: 'var(--radius)', padding: 3 }}>
        {[['potager', '📅 Mon potager'], ['referentiel', '📚 Référentiel IdF']].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setView(id)}
            style={{
              flex: 1, padding: '7px 10px', borderRadius: 8, border: 'none', cursor: 'pointer',
              fontFamily: 'inherit', fontSize: 12, fontWeight: view === id ? 700 : 500,
              background: view === id ? 'var(--surface)' : 'transparent',
              color: view === id ? 'var(--green-700)' : 'var(--text-3)',
              boxShadow: view === id ? '0 1px 3px rgba(0,0,0,.1)' : 'none',
              transition: 'all 0.15s',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {view === 'potager'
        ? <PotagerView plants={plants} bacs={bacs} />
        : <ReferentielView />
      }
    </div>
  );
}
