'use client';
import { useEffect, useMemo, useState } from 'react';
import { findPlante } from '../lib/plantingCalendar';
import { fmtDate, today, diffDays } from '../lib/utils';

const ARROSAGE_CONFIG = {
  faible:    { label: 'Faible',    days: 8,  color: 'var(--blue-100)',   text: 'var(--blue-700)',  icon: '💧' },
  modéré:    { label: 'Modéré',    days: 4,  color: 'var(--blue-100)',   text: 'var(--blue-700)',  icon: '💧💧' },
  régulier:  { label: 'Régulier',  days: 2,  color: 'var(--amber-100)',  text: 'var(--amber-600)', icon: '💧💧💧' },
  abondant:  { label: 'Abondant',  days: 1,  color: 'var(--terra-100)',  text: 'var(--terra-500)', icon: '🚿' },
};

function getStatus(lastWatered, intervalDays) {
  if (!lastWatered) return { label: 'Jamais arrosé', urgent: true, daysLeft: 0 };
  const diff = diffDays(lastWatered, today());
  const daysLeft = intervalDays - diff;
  if (daysLeft <= 0) return { label: `En retard de ${Math.abs(daysLeft)}j`, urgent: true, daysLeft };
  if (daysLeft === 1) return { label: 'Demain', urgent: false, daysLeft };
  return { label: `Dans ${daysLeft}j`, urgent: false, daysLeft };
}

function MeteoExterieur({ ville, bacsExterieurCount }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [meteo, setMeteo] = useState(null);

  useEffect(() => {
    if (!ville) return;
    let cancelled = false;

    async function loadWeather() {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(`/api/weather?city=${encodeURIComponent(ville)}&days=5`);
        if (!res.ok) throw new Error('service indisponible');
        const data = await res.json();
        if (!cancelled) setMeteo(data);
      } catch {
        if (!cancelled) setError("Impossible de récupérer la météo pour l'instant.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadWeather();
    return () => { cancelled = true; };
  }, [ville]);

  if (!ville) {
    return (
      <div className="card" style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>🌦️ Service météo bacs extérieurs</div>
        <div style={{ fontSize: 12, color: 'var(--text-3)' }}>
          Renseignez votre localisation dans l&apos;onglet Réglages pour activer les prévisions.
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginBottom: 10 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>🌦️ Service météo bacs extérieurs</div>
          <div style={{ fontSize: 11, color: 'var(--text-3)' }}>
            {bacsExterieurCount} bac{bacsExterieurCount > 1 ? 's' : ''} extérieur{bacsExterieurCount > 1 ? 's' : ''} · {ville}
          </div>
        </div>
        {meteo?.generatedAt && (
          <div style={{ fontSize: 10, color: 'var(--text-3)', alignSelf: 'flex-start' }}>
            Maj: {new Date(meteo.generatedAt).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
          </div>
        )}
      </div>

      {loading && <div style={{ fontSize: 12, color: 'var(--text-3)' }}>Chargement des prévisions…</div>}
      {error && <div style={{ fontSize: 12, color: 'var(--terra-500)' }}>{error}</div>}

      {!loading && !error && meteo?.days?.length > 0 && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))', gap: 8 }}>
            {meteo.days.map(d => (
              <div
                key={d.date}
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  padding: 10,
                  background: d.level === 'rouge' ? 'var(--terra-100)' : d.level === 'orange' ? 'var(--amber-50)' : 'var(--gray-50)',
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 600 }}>{new Date(`${d.date}T12:00:00`).toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })}</div>
                <div style={{ fontSize: 19, marginTop: 2 }}>{d.icon}</div>
                <div style={{ fontSize: 11, color: 'var(--text-2)' }}>{Math.round(d.tempMin)}° / {Math.round(d.tempMax)}°</div>
                <div style={{ fontSize: 11, color: 'var(--text-2)' }}>🌧 {Math.round(d.rainMm)} mm · {Math.round(d.rainProb)}%</div>
                <div style={{ fontSize: 11, color: 'var(--text-2)' }}>💨 {Math.round(d.windGust)} km/h</div>
                <div style={{
                  marginTop: 5,
                  fontSize: 10,
                  fontWeight: 700,
                  color: d.level === 'rouge' ? 'var(--terra-500)' : d.level === 'orange' ? 'var(--amber-600)' : 'var(--green-700)',
                  textTransform: 'uppercase',
                }}>
                  {d.level}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 10, fontSize: 11, color: 'var(--text-3)' }}>
            Recommandation auto : {meteo.topAction || "Aucune action prioritaire, suivi normal."}
          </div>
        </>
      )}
    </div>
  );
}

export default function TabArrosage({ plants, bacs, profile, arrosage, setArrosage }) {
  const todayStr = today();
  const bacsExterieurCount = useMemo(() => bacs.filter(b => b.emplacement === 'exterieur').length, [bacs]);

  const activePlants = useMemo(
    () => plants.filter(p => p.statut !== 'termine' && p.statut !== 'semis'),
    [plants]
  );

  const items = useMemo(() =>
    activePlants.map(p => {
      const bac = bacs.find(b => b.id === p.bac_id);
      const ref = findPlante(p.nom);
      const arrosageType = ref?.arrosage || 'modéré';
      const cfg = ARROSAGE_CONFIG[arrosageType] || ARROSAGE_CONFIG['modéré'];
      const lastWatered = arrosage[p.id] || null;
      const status = getStatus(lastWatered, cfg.days);
      return { plant: p, bac, ref, arrosageType, cfg, lastWatered, status };
    }).sort((a, b) => {
      // Urgent first, then by daysLeft ascending
      if (a.status.urgent !== b.status.urgent) return a.status.urgent ? -1 : 1;
      return a.status.daysLeft - b.status.daysLeft;
    }),
    [activePlants, bacs, arrosage]
  );

  const urgentCount = items.filter(i => i.status.urgent).length;

  function markWatered(plantId) {
    setArrosage(prev => ({ ...prev, [plantId]: todayStr }));
  }

  function markAll() {
    const updates = {};
    items.forEach(i => { updates[i.plant.id] = todayStr; });
    setArrosage(prev => ({ ...prev, ...updates }));
  }

  if (activePlants.length === 0) {
    return (
      <div className="empty">
        <div className="empty-icon">💧</div>
        <div className="empty-text">Aucune plante active.<br />Ajoutez des plantes pour suivre l&apos;arrosage.</div>
      </div>
    );
  }

  return (
    <div>
      <MeteoExterieur ville={profile?.ville} bacsExterieurCount={bacsExterieurCount} />
      {/* Summary header */}
      <div className="card" style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>
              {urgentCount > 0
                ? <span style={{ color: 'var(--terra-500)' }}>⚠️ {urgentCount} plante{urgentCount > 1 ? 's' : ''} à arroser</span>
                : <span style={{ color: 'var(--green-700)' }}>✅ Tout est arrosé</span>
              }
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-3)', marginTop: 2 }}>
              {activePlants.length} plante{activePlants.length > 1 ? 's' : ''} suivie{activePlants.length > 1 ? 's' : ''}
            </div>
          </div>
          {urgentCount > 0 && (
            <button className="btn btn-primary" style={{ fontSize: 12, padding: '6px 14px' }} onClick={markAll}>
              Tout arroser aujourd&apos;hui
            </button>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="card" style={{ marginBottom: 14 }}>
        <div className="section-title" style={{ marginTop: 0 }}>Fréquences d&apos;arrosage</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
          {Object.entries(ARROSAGE_CONFIG).map(([key, cfg]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', borderRadius: 8, background: cfg.color }}>
              <span style={{ fontSize: 16 }}>{cfg.icon}</span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: cfg.text }}>{cfg.label}</div>
                <div style={{ fontSize: 10, color: cfg.text, opacity: 0.8 }}>Tous les {cfg.days}j</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plant list */}
      <div className="section-title">Planning</div>
      {items.map(({ plant, bac, ref, cfg, lastWatered, status }) => (
        <div key={plant.id} className={`card arrosage-card${status.urgent ? ' arrosage-urgent' : ''}`} style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Emoji */}
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: cfg.color, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              fontSize: 24, flexShrink: 0,
            }}>
              {ref?.emoji || '🌱'}
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {plant.nom}
                {plant.varietal && <span style={{ fontWeight: 400, color: 'var(--text-3)', fontSize: 12 }}> · {plant.varietal}</span>}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-3)' }}>
                {bac?.nom} · {cfg.icon} {cfg.label}
              </div>
              <div style={{ fontSize: 11, marginTop: 2 }}>
                <span style={{ color: status.urgent ? 'var(--terra-500)' : 'var(--text-3)', fontWeight: status.urgent ? 600 : 400 }}>
                  {status.label}
                </span>
                {lastWatered && (
                  <span style={{ color: 'var(--text-3)', marginLeft: 6 }}>· dernier : {fmtDate(lastWatered)}</span>
                )}
              </div>
            </div>

            {/* Action */}
            <button
              className={`btn${status.urgent ? ' btn-primary' : ''}`}
              style={{ fontSize: 12, padding: '6px 12px', flexShrink: 0 }}
              onClick={() => markWatered(plant.id)}
            >
              💧 Arrosé
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
