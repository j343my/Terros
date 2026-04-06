'use client';
import { useState, useMemo } from 'react';
import { useLocalStorage } from '../lib/useLocalStorage';
import { computeAlerts, MOIS_LONG } from '../lib/utils';
import { SEED_BACS, SEED_PLANTS, SEED_JOURNAL, SEED_PROFILE } from '../lib/seed';
import TabBacs from '../components/TabBacs';
import TabCalendrier from '../components/TabCalendrier';
import TabAlertes from '../components/TabAlertes';
import TabReglages from '../components/TabReglages';
import TabArrosage from '../components/TabArrosage';

const TABS = [
  { id: 'bacs', icon: '🪴', label: 'Mes Bacs' },
  { id: 'calendrier', icon: '📅', label: 'Calendrier' },
  { id: 'arrosage', icon: '💧', label: 'Arrosage' },
  { id: 'alertes', icon: '🔔', label: 'Alertes' },
  { id: 'reglages', icon: '⚙️', label: 'Réglages' },
];

export default function PotagerApp() {
  const [tab, setTab] = useState('bacs');
  const [bacs, setBacs] = useLocalStorage('potager_bacs', SEED_BACS);
  const [plants, setPlants] = useLocalStorage('potager_plants', SEED_PLANTS);
  const [journal, setJournal] = useLocalStorage('potager_journal', SEED_JOURNAL);
  const [profile, setProfile] = useLocalStorage('potager_profile', SEED_PROFILE);
  const [arrosage, setArrosage] = useLocalStorage('potager_arrosage', {});

  const alerts = useMemo(() => computeAlerts(bacs, plants), [bacs, plants]);
  const urgentCount = alerts.filter(a => a.urgent).length;

  const now = new Date();
  const monthName = MOIS_LONG[now.getMonth()];

  const inRecolte = plants.filter(p => p.statut === 'recolte').length;
  const inCroissance = plants.filter(p => p.statut === 'croissance' || p.statut === 'floraison').length;

  const tabLabel = TABS.find(t => t.id === tab)?.label || '';

  return (
    <div className="app-shell">

      {/* ─── SIDEBAR (desktop only) ─── */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h1>🌿 Mon Potager</h1>
          <div className="header-sub">{profile.ville || 'Mon balcon'} · {profile.expo || 'SE'} · {monthName}</div>
        </div>
        <nav className="sidebar-nav">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`sidebar-btn${tab === t.id ? ' active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              <span className="tab-icon">{t.icon}</span>
              {t.label}
              {t.id === 'alertes' && urgentCount > 0 && (
                <span style={{ marginLeft: 'auto', background: '#e24b4a', color: '#fff', borderRadius: 99, fontSize: 10, padding: '1px 7px', fontWeight: 700 }}>
                  {urgentCount}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          Données stockées<br />localement dans le navigateur.
        </div>
      </aside>

      {/* ─── MAIN AREA ─── */}
      <div className="app-content-area">

        {/* Mobile header */}
        <header className="app-header">
          <div>
            <h1>Mon potager 🌿</h1>
            <div className="header-sub">{profile.ville || 'Mon balcon'} · {profile.expo || 'SE'} · {monthName}</div>
          </div>
        </header>

        <main className="main">
          <div className="main-inner">

            {/* Desktop page heading */}
            <div className="page-heading" style={{ display: 'none' }} aria-hidden="true">{tabLabel}</div>

            {/* Stats banner — desktop only, shown on bacs tab */}
            {tab === 'bacs' && (
              <div className="stats-banner">
                <div className="stat-card">
                  <div className="stat-label">Bacs</div>
                  <div className="stat-value">{bacs.length}</div>
                  <div className="stat-sub">{bacs.length === 1 ? 'jardinière' : 'jardinières'}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Plantes</div>
                  <div className="stat-value">{plants.length}</div>
                  <div className="stat-sub">{plants.filter(p => p.statut !== 'termine').length} actives</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">En récolte</div>
                  <div className="stat-value" style={{ color: 'var(--amber-600)' }}>{inRecolte}</div>
                  <div className="stat-sub">à surveiller</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Alertes</div>
                  <div className="stat-value" style={{ color: urgentCount > 0 ? 'var(--terra-500)' : 'var(--text)' }}>{urgentCount}</div>
                  <div className="stat-sub">{urgentCount > 0 ? 'à traiter' : 'tout va bien'}</div>
                </div>
              </div>
            )}

            {tab === 'bacs' && <TabBacs bacs={bacs} plants={plants} journal={journal} setBacs={setBacs} setPlants={setPlants} setJournal={setJournal} />}
            {tab === 'calendrier' && <TabCalendrier plants={plants} bacs={bacs} />}
            {tab === 'arrosage' && <TabArrosage plants={plants} bacs={bacs} profile={profile} arrosage={arrosage} setArrosage={setArrosage} />}
            {tab === 'alertes' && <TabAlertes bacs={bacs} plants={plants} journal={journal} />}
            {tab === 'reglages' && (
            <TabReglages
              profile={profile} setProfile={setProfile}
              bacs={bacs} plants={plants} journal={journal} arrosage={arrosage}
            />
          )}
          </div>
        </main>

        {/* Mobile tab bar */}
        <nav className="tab-bar">
          {TABS.map(t => (
            <button key={t.id} className={`tab-btn${tab === t.id ? ' active' : ''}`} onClick={() => setTab(t.id)}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <span className="tab-icon">{t.icon}</span>
                {t.id === 'alertes' && urgentCount > 0 && (
                  <span className="notif-badge">{urgentCount}</span>
                )}
              </div>
              <span>{t.label}</span>
            </button>
          ))}
        </nav>

      </div>
    </div>
  );
}
