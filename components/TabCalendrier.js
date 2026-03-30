'use client';
import { MOIS, getPlantPhases } from '../lib/utils';

const PHASE_COLORS = { semis: '#B5D4F4', croissance: '#C0DD97', recolte: '#EF9F27', none: '#F1EFE8' };

export default function TabCalendrier({ plants, bacs }) {
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
          {/* Month headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '76px repeat(12,1fr)', gap: 2, marginBottom: 5 }}>
            <div />
            {MOIS.map(m => (
              <div key={m} style={{ textAlign: 'center', fontSize: 9, color: 'var(--text-3)', fontWeight: 600 }}>{m}</div>
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
                  <div key={i} style={{ height: 16, borderRadius: 3, background: PHASE_COLORS[ph] || PHASE_COLORS.none }} />
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
