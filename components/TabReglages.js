'use client';
import { useRef } from 'react';

const EXPORT_KEYS = ['potager_bacs', 'potager_plants', 'potager_journal', 'potager_profile', 'potager_arrosage'];

export default function TabReglages({ profile, setProfile, bacs, plants, journal, arrosage }) {
  const importRef = useRef(null);

  function handleExport() {
    const data = {};
    EXPORT_KEYS.forEach(k => {
      const v = localStorage.getItem(k);
      if (v) data[k] = JSON.parse(v);
    });
    const payload = {
      version: '1.0',
      exportDate: new Date().toISOString().slice(0, 10),
      data,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `potager-${payload.exportDate}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const payload = JSON.parse(ev.target.result);
        if (!payload?.data) throw new Error('Format invalide');
        EXPORT_KEYS.forEach(k => {
          if (payload.data[k] !== undefined) {
            localStorage.setItem(k, JSON.stringify(payload.data[k]));
          }
        });
        window.location.reload();
      } catch {
        alert('Fichier invalide. Veuillez utiliser un export Mon Potager.');
      }
    };
    reader.readAsText(file);
    // Reset input so the same file can be re-imported
    e.target.value = '';
  }

  return (
    <div>
      <div className="section-title">Ma terrasse</div>
      <div className="card">
        <div className="field">
          <label>Localisation</label>
          <input value={profile.ville || ''} onChange={e => setProfile(p => ({ ...p, ville: e.target.value }))} placeholder="Ex : Saint-Maur-des-Fossés" />
        </div>
        <div className="field">
          <label>Exposition principale</label>
          <select value={profile.expo || 'Sud-Est'} onChange={e => setProfile(p => ({ ...p, expo: e.target.value }))}>
            {['Sud', 'Sud-Est', 'Sud-Ouest', 'Est', 'Ouest', 'Nord-Est', 'Nord'].map(x => <option key={x}>{x}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Notes sur la terrasse</label>
          <textarea value={profile.notes || ''} onChange={e => setProfile(p => ({ ...p, notes: e.target.value }))} placeholder="Surface, matériaux, contraintes de poids…" />
        </div>
      </div>

      <div className="section-title">Sauvegarde</div>
      <div className="card">
        <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 14, lineHeight: 1.5 }}>
          Exportez toutes vos données ({bacs?.length ?? 0} bacs, {plants?.length ?? 0} plantes, {journal?.length ?? 0} entrées journal) dans un fichier JSON, ou importez une sauvegarde depuis un autre appareil.
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }} onClick={handleExport}>
            ⬇ Exporter
          </button>
          <button className="btn" style={{ flex: 1, justifyContent: 'center' }} onClick={() => importRef.current?.click()}>
            ⬆ Importer
          </button>
          <input ref={importRef} type="file" accept=".json,application/json" style={{ display: 'none' }} onChange={handleImport} />
        </div>
      </div>

      <div className="section-title">À propos</div>
      <div className="card">
        <div className="setting-row">
          <div>
            <div className="setting-label">Mon Potager</div>
            <div className="setting-sub">Sauvegarde locale dans le navigateur</div>
          </div>
        </div>
        <div className="setting-row">
          <div>
            <div className="setting-label">Données</div>
            <div className="setting-sub">Stockées uniquement sur cet appareil</div>
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          <button
            className="btn btn-danger"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              if (confirm('Effacer toutes les données ?')) {
                localStorage.clear();
                window.location.reload();
              }
            }}
          >
            Effacer toutes les données
          </button>
        </div>
      </div>
    </div>
  );
}
