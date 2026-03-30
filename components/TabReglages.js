'use client';

export default function TabReglages({ profile, setProfile }) {
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
