'use client';
import { useMemo } from 'react';
import { computeAlerts } from '../lib/utils';

const DOT_COLOR = { urgent: '#E24B4A', warning: '#EF9F27', info: '#378ADD', action: '#639922', harvest: '#EF9F27', calendar: '#888780' };
const TIME_CLASS = { urgent: 'urgent', warning: 'soon', info: 'later', action: 'later', harvest: 'urgent', calendar: 'later' };

export default function TabAlertes({ bacs, plants, journal }) {
  const alerts = useMemo(() => computeAlerts(bacs, plants), [bacs, plants]);
  const urgents = alerts.filter(a => a.urgent);
  const others = alerts.filter(a => !a.urgent);

  if (alerts.length === 0) return (
    <div className="empty">
      <div className="empty-icon">✅</div>
      <div className="empty-text">Aucune alerte pour l'instant.<br />Ajoute des plantes avec des dates pour recevoir des rappels automatiques.</div>
    </div>
  );

  const AlertList = ({ items }) => (
    <div className="card">
      {items.map(a => (
        <div key={a.id} className="alert-item">
          <div className="alert-dot" style={{ background: DOT_COLOR[a.type] || '#ccc' }} />
          <div className="alert-body">
            <div className="alert-text">{a.text}</div>
            <div className="alert-meta">{a.meta}</div>
          </div>
          {a.time && <div className={`alert-time ${TIME_CLASS[a.type] || 'later'}`}>{a.time}</div>}
        </div>
      ))}
    </div>
  );

  return (
    <div className="alerts-cols">
      {urgents.length > 0 && (
        <div>
          <div className="section-title">À faire maintenant</div>
          <AlertList items={urgents} />
        </div>
      )}
      {others.length > 0 && (
        <div>
          <div className="section-title">À venir</div>
          <AlertList items={others} />
        </div>
      )}
    </div>
  );
}
