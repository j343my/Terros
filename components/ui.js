'use client';

export function Modal({ title, onClose, children }) {
  return (
    <div className="modal-bg" onClick={e => { if (e.target.classList.contains('modal-bg')) onClose(); }}>
      <div className="modal">
        <div className="modal-handle" />
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function BadgeOrigine({ val }) {
  const map = {
    semence_propre: ['badge badge-semence', 'Semence propre'],
    graines_achetees: ['badge badge-achetee', 'Graines achetées'],
    'plant_acheté': ['badge badge-plant', 'Plant acheté'],
  };
  const [cls, label] = map[val] || ['badge', '?'];
  return <span className={cls}>{label}</span>;
}

export function BadgeStatus({ val }) {
  const STATUS_LABELS = { semis: 'Semis', plantule: 'Plantule', croissance: 'Croissance', floraison: 'Floraison', recolte: 'Récolte', termine: 'Terminé' };
  return <span className={`badge badge-status-${val}`}>{STATUS_LABELS[val] || val}</span>;
}
