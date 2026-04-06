'use client';
import { useState } from 'react';
import { MOIS, getPlantPhases } from '../lib/utils';
import { CALENDRIER_IDF, getRefPhases, getConseil, MOIS_COURT } from '../lib/plantingCalendar';
import { Modal } from './ui';
import { usePlantPhoto } from '../lib/usePlantPhoto';

const PHASE_COLORS   = { semis: '#B5D4F4', croissance: '#C0DD97', recolte: '#EF9F27', none: '#F1EFE8' };
const REF_COLORS     = { semis_int: '#B5D4F4', semis_ext: '#D4E8FA', plantation: '#C0DD97', recolte: '#EF9F27', none: '#F1EFE8' };
const STATUS_STYLE   = {
  ok:       { color: 'var(--green-700)',  bg: 'var(--green-100)',  icon: '✓' },
  soon:     { color: 'var(--amber-600)',  bg: 'var(--amber-100)', icon: '→' },
  upcoming: { color: 'var(--amber-600)',  bg: 'var(--amber-50)',  icon: '→' },
  later:    { color: 'var(--text-3)',     bg: 'var(--gray-100)',  icon: '·' },
  late:     { color: 'var(--gray-500)',   bg: 'var(--gray-100)',  icon: '✗' },
};
const FAMILLES_ORDER = [
  'Solanacée','Cucurbitacée','Légumineuse','Légume-racine',
  'Salade',"Salade d'hiver",'Légume-feuille',
  'Aromatique','Fruit',
  'Fleur','Exotique',
  'Plante verte',
  'Graminée','Arbuste','Conifère','Succulente',
];

const ARROSAGE_LABELS = {
  faible:   '💧 Faible',
  modéré:   '💧💧 Modéré',
  régulier: '💧💧💧 Régulier',
  abondant: '💧💧💧💧 Abondant',
};

const FAMILLE_COLORS = {
  'Fleur':      { bg: '#fde8f4', color: '#9b2c6e' },
  'Exotique':   { bg: '#fef3e2', color: '#92400e' },
  'Fruit':      { bg: '#fef3e2', color: '#92400e' },
  'Aromatique': { bg: '#ecfdf5', color: '#065f46' },
  'Graminée':   { bg: '#f0fdf4', color: '#166534' },
  'Arbuste':    { bg: '#f0fdf4', color: '#166534' },
  'Conifère':   { bg: '#f0fdf4', color: '#166534' },
  'Succulente':    { bg: '#fff7ed', color: '#9a3412' },
  'Plante verte':  { bg: '#ecfdf5', color: '#065f46' },
};

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
//  Fiche détail plante (modal)
// ──────────────────────────────────────────────────────────
function FichePlante({ plante, onClose }) {
  const currentMonth = new Date().getMonth();
  const conseil = getConseil(plante, currentMonth);
  const { photoUrl } = usePlantPhoto(plante.nom);
  const phases = getRefPhases(plante);
  const isFleur = plante.famille === 'Fleur';
  const recolteLabel = isFleur ? 'Floraison' : 'Récolte';

  const famColor = FAMILLE_COLORS[plante.famille] || { bg: 'var(--green-100)', color: 'var(--green-700)' };

  const DIFFICULTE_LABELS = ['', 'Très facile', 'Facile', 'Moyen', 'Difficile', 'Expert'];

  const statusRows = [
    conseil.semis_int  && { label: 'Semis intérieur', ...conseil.semis_int },
    conseil.semis_ext  && { label: 'Semis extérieur', ...conseil.semis_ext },
    conseil.plantation && { label: 'Plantation', status: conseil.plantation.status, label2: conseil.plantation.label + (plante.plantation_note ? ` — ${plante.plantation_note}` : '') },
    conseil.recolte    && { label: recolteLabel, ...conseil.recolte },
  ].filter(Boolean).map(r => ({ ...r, label2: r.label2 || r.label, ...STATUS_STYLE[r.status] }));

  const hasNow = statusRows.some(r => r.status === 'ok');

  return (
    <Modal title={`${plante.emoji} ${plante.nom}`} onClose={onClose}>
      {/* Photo */}
      <div className="modal-photo-banner">
        {photoUrl
          ? <img src={photoUrl} alt={plante.nom} onError={e => { e.currentTarget.style.display = 'none'; }} />
          : <span className="modal-photo-banner-emoji">{plante.emoji}</span>
        }
      </div>

      {/* Badges famille + difficulté */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{
          padding: '2px 9px', borderRadius: 99, fontSize: 11, fontWeight: 600,
          background: famColor.bg, color: famColor.color,
        }}>{plante.famille}</span>
        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{
              width: 7, height: 7, borderRadius: '50%',
              background: i <= plante.difficulte ? 'var(--amber-600)' : 'var(--gray-300)',
            }} />
          ))}
          <span style={{ fontSize: 10, color: 'var(--text-3)', marginLeft: 3 }}>
            {DIFFICULTE_LABELS[plante.difficulte] || ''}
          </span>
        </div>
      </div>

      {/* Stats pratiques */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
        <div style={{ padding: '8px 10px', background: 'var(--gray-50)', borderRadius: 8, border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 2 }}>Exposition</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-2)' }}>☀️ {plante.expo}</div>
        </div>
        {plante.arrosage && (
          <div style={{ padding: '8px 10px', background: 'var(--gray-50)', borderRadius: 8, border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 2 }}>Arrosage</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-2)' }}>{ARROSAGE_LABELS[plante.arrosage]}</div>
          </div>
        )}
        {plante.taille_min && (
          <div style={{ padding: '8px 10px', background: 'var(--gray-50)', borderRadius: 8, border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 10, color: 'var(--text-3)', marginBottom: 2 }}>Bac minimum</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-2)' }}>🪴 {plante.taille_min} L</div>
          </div>
        )}
      </div>

      {/* Calendrier 12 mois */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6 }}>Calendrier Île-de-France</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 2, marginBottom: 4 }}>
          {phases.map((ph, m) => (
            <div key={m} style={{
              height: 18, borderRadius: 3,
              background: REF_COLORS[ph] || REF_COLORS.none,
              outline: m === currentMonth ? '2px solid var(--text)' : 'none',
              outlineOffset: 1,
            }} title={MOIS_COURT[m]} />
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 2, marginBottom: 8 }}>
          {MOIS_COURT.map((m, i) => (
            <div key={i} style={{
              textAlign: 'center', fontSize: 7,
              color: i === currentMonth ? 'var(--text)' : 'var(--text-3)',
              fontWeight: i === currentMonth ? 800 : 400,
            }}>{m.slice(0, 1)}</div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {[
            ['#B5D4F4', 'Semis int.'],
            ['#D4E8FA', 'Semis ext.'],
            ['#C0DD97', 'Plantation'],
            ['#EF9F27', recolteLabel],
          ].map(([c, l]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 10, color: 'var(--text-3)' }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: c, flexShrink: 0 }} />
              {l}
            </div>
          ))}
        </div>
      </div>

      {/* Statut actuel */}
      {statusRows.length > 0 && (
        <div style={{
          padding: '10px 12px', borderRadius: 8, marginBottom: 14,
          background: hasNow ? 'var(--green-50)' : 'var(--gray-50)',
          border: `1px solid ${hasNow ? 'var(--green-200)' : 'var(--border)'}`,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: hasNow ? 'var(--green-700)' : 'var(--text-2)', marginBottom: 7 }}>
            En ce moment — {MOIS_COURT[currentMonth]}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {statusRows.map((r, i) => (
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
                    {r.label2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notes / conseils */}
      {plante.notes && (
        <div style={{
          padding: '10px 12px', borderRadius: 8,
          background: 'var(--gray-50)', border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-2)', marginBottom: 5 }}>Conseils</div>
          <div style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.55 }}>{plante.notes}</div>
        </div>
      )}
    </Modal>
  );
}

// ──────────────────────────────────────────────────────────
//  Carte dans le référentiel (cliquable)
// ──────────────────────────────────────────────────────────
function RefCard({ plante, onClick }) {
  const currentMonth = new Date().getMonth();
  const conseil = getConseil(plante, currentMonth);
  const phases = getRefPhases(plante);
  const isFleur = plante.famille === 'Fleur';

  const mainConseil = conseil.recolte?.status === 'ok' ? conseil.recolte
    : conseil.plantation?.status === 'ok' ? conseil.plantation
    : conseil.semis_int?.status === 'ok' ? conseil.semis_int
    : conseil.semis_ext?.status === 'ok' ? conseil.semis_ext
    : conseil.semis_int?.status === 'soon' ? conseil.semis_int
    : conseil.plantation?.status === 'soon' ? conseil.plantation
    : null;

  const style = mainConseil ? STATUS_STYLE[mainConseil.status] : null;
  const famColor = FAMILLE_COLORS[plante.famille] || null;

  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '12px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        cursor: 'pointer',
        transition: 'box-shadow 0.15s, border-color 0.15s',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,.1)'; e.currentTarget.style.borderColor = 'var(--border-strong)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border)'; }}
    >
      {/* Titre */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>{plante.emoji}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13 }}>{plante.nom}</div>
          <div style={{ fontSize: 10, color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 5 }}>
            {famColor
              ? <span style={{ padding: '0 5px', borderRadius: 99, fontSize: 9, fontWeight: 600, background: famColor.bg, color: famColor.color }}>{plante.famille}</span>
              : <span>{plante.famille}</span>
            }
            <span>· {plante.expo}</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
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
          <div style={{ fontSize: 9, color: 'var(--text-3)' }}>Voir fiche →</div>
        </div>
      </div>

      {/* Barre calendrier 12 mois */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 2 }}>
        {phases.map((ph, m) => (
          <div key={m} style={{
            height: 14, borderRadius: 2,
            background: REF_COLORS[ph] || REF_COLORS.none,
            outline: m === currentMonth ? '2px solid var(--text)' : 'none',
            outlineOffset: 1,
          }} title={MOIS_COURT[m]} />
        ))}
      </div>

      {/* Difficulté + taille min */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', gap: 2 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              width: 6, height: 6, borderRadius: '50%',
              background: i <= plante.difficulte ? 'var(--amber-600)' : 'var(--gray-300)',
            }} />
          ))}
        </div>
        {plante.taille_min && (
          <span style={{ fontSize: 10, color: 'var(--text-3)' }}>🪴 {plante.taille_min} L min</span>
        )}
        {plante.arrosage && (
          <span style={{ fontSize: 10, color: 'var(--text-3)' }}>{ARROSAGE_LABELS[plante.arrosage]}</span>
        )}
      </div>

      {/* Note courte */}
      {plante.notes && (
        <div style={{ fontSize: 10, color: 'var(--text-3)', lineHeight: 1.4, fontStyle: 'italic',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
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
  const [filtre, setFiltre] = useState('Tout');
  const [fichePlante, setFichePlante] = useState(null);

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
      {fichePlante && (
        <FichePlante plante={fichePlante} onClose={() => setFichePlante(null)} />
      )}

      {/* Bandeau mois courant */}
      <div style={{
        padding: '10px 14px', marginBottom: 16,
        background: 'var(--green-50)', border: '1px solid var(--green-200)',
        borderRadius: 'var(--radius)', fontSize: 12, color: 'var(--green-700)',
      }}>
        <span style={{ fontWeight: 700 }}>Île-de-France · {MOIS_COURT[currentMonth]}</span>
        {' — '}Cliquez sur une plante pour ouvrir sa fiche détail.
      </div>

      {/* Légende */}
      <div className="cal-legend" style={{ marginBottom: 12 }}>
        {[['#B5D4F4', 'Semis intérieur'], ['#D4E8FA', 'Semis extérieur'], ['#C0DD97', 'Plantation'], ['#EF9F27', 'Récolte / Floraison']].map(([c, l]) => (
          <div key={l} className="cal-legend-item">
            <div className="cal-legend-dot" style={{ background: c }} />
            {l}
          </div>
        ))}
      </div>

      {/* Filtre par famille */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {familles.map(f => {
          const famColor = FAMILLE_COLORS[f];
          const isActive = filtre === f;
          return (
            <button
              key={f}
              onClick={() => setFiltre(f)}
              style={{
                padding: '4px 10px', borderRadius: 99, fontSize: 11, cursor: 'pointer',
                border: '1px solid var(--border-strong)', fontFamily: 'inherit',
                background: isActive
                  ? (famColor ? famColor.color : 'var(--green-700)')
                  : 'var(--surface)',
                color: isActive ? '#fff' : (famColor ? famColor.color : 'var(--text-2)'),
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {f === 'Fleur' ? '🌸 ' : f === 'Exotique' ? '🌴 ' : f === 'Succulente' ? '🌵 ' : f === 'Conifère' ? '🎄 ' : f === 'Graminée' ? '🌾 ' : f === 'Arbuste' ? '🌿 ' : ''}{f}
            </button>
          );
        })}
      </div>

      {/* Grille des plantes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
        {sorted.map(p => (
          <RefCard key={p.nom} plante={p} onClick={() => setFichePlante(p)} />
        ))}
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
