export const MOIS = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
export const MOIS_LONG = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

export const STATUS_LABELS = {
  semis: 'Semis',
  plantule: 'Plantule',
  croissance: 'Croissance',
  floraison: 'Floraison',
  recolte: 'Récolte',
  termine: 'Terminé',
};

export const ORIGINE_LABELS = {
  semence_propre: 'Semence propre',
  graines_achetees: 'Graines achetées',
  'plant_acheté': 'Plant acheté',
};

export const STATUS_COLORS = {
  semis: '#378ADD',
  plantule: '#639922',
  croissance: '#639922',
  floraison: '#EF9F27',
  recolte: '#BA7517',
  termine: '#888780',
};

export function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}

export function addDays(d, n) {
  if (!d) return null;
  const dt = new Date(d);
  dt.setDate(dt.getDate() + n);
  return dt.toISOString().slice(0, 10);
}

export function diffDays(a, b) {
  if (!a || !b) return null;
  return Math.round((new Date(b) - new Date(a)) / (1000 * 86400));
}

export function fmtDate(d) {
  if (!d) return '—';
  const dt = new Date(d + 'T12:00:00');
  return dt.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
}

export function getPlantPhases(plant) {
  const phases = Array(12).fill('none');
  const yr = new Date().getFullYear();
  const { date_semis: semis, date_plantation: plantation, date_recolte: recolte, date_fin: fin } = plant;

  for (let m = 0; m < 12; m++) {
    const mStart = new Date(yr, m, 1);
    const mEnd = new Date(yr, m + 1, 0);
    const inRange = (start, end) => {
      if (!start) return false;
      const s = new Date(start.slice(0, 4) === String(yr) ? start : yr + '-' + start.slice(5));
      const e = end
        ? new Date(end.slice(0, 4) === String(yr) ? end : yr + '-' + end.slice(5))
        : new Date(yr, 11, 31);
      return s <= mEnd && e >= mStart;
    };
    if (semis && plantation && inRange(semis, plantation)) phases[m] = 'semis';
    else if (plantation && recolte && inRange(plantation, recolte)) phases[m] = 'croissance';
    else if (recolte && inRange(recolte, fin || addDays(recolte, 60))) phases[m] = 'recolte';
  }
  return phases;
}

export function computeAlerts(bacs, plants) {
  const alerts = [];
  const now = new Date();
  const todayStr = today();

  plants.forEach(p => {
    const bac = bacs.find(b => b.id === p.bac_id);
    const bacName = bac ? bac.nom : '?';

    if (p.date_semis && !p.date_plantation && p.origine !== 'plant_acheté') {
      const semisAge = diffDays(p.date_semis, todayStr);
      if (semisAge >= 45 && semisAge < 90 && p.statut === 'semis') {
        alerts.push({ id: 'accl-' + p.id, type: 'info', urgent: true, text: `Commencer l'acclimatation dehors — ${p.nom}`, meta: `Semé il y a ${semisAge}j · ${bacName}` });
      }
    }
    if (p.date_plantation) {
      const plantAge = diffDays(p.date_plantation, todayStr);
      if (plantAge >= 14 && plantAge < 16 && (p.statut === 'croissance' || p.statut === 'floraison')) {
        alerts.push({ id: 'ferti-' + p.id, type: 'warning', urgent: true, text: `Fertiliser — ${p.nom}`, meta: `Planté il y a ${plantAge}j · ${bacName}` });
      }
      if (p.statut === 'floraison' || p.statut === 'recolte') {
        alerts.push({ id: 'pince-' + p.id, type: 'action', urgent: false, text: `Vérifier les gourmands — ${p.nom}`, meta: bacName });
      }
    }
    if (p.statut === 'recolte') {
      alerts.push({ id: 'recolte-' + p.id, type: 'harvest', urgent: true, text: `Récolte en cours — ${p.nom}`, meta: `Vérifier quotidiennement · ${bacName}` });
    }
  });

  const m = now.getMonth();
  if (m === 6) alerts.push({ id: 'semis-automne', type: 'calendar', urgent: false, text: "Semer les salades d'automne", meta: 'Avant le 15 juillet pour récolte en septembre', time: 'Avant le 15/07' });
  if (m === 4) alerts.push({ id: 'saints-glace', type: 'calendar', urgent: false, text: 'Saints de Glace passés → tout planter', meta: '13 mai : feu vert pour tomates, courgettes…', time: '13 mai' });
  if (m === 0 || m === 11) alerts.push({ id: 'cmd-graines', type: 'calendar', urgent: false, text: 'Commander les graines de la saison', meta: 'Kokopelli, Germinance, Ferme de Sainte Marthe', time: 'Hiver' });
  if (m === 7) alerts.push({ id: 'semis-hiver', type: 'calendar', urgent: false, text: "Semer mâche et épinards d'hiver", meta: 'Fenêtre août-septembre pour récolte hivernale', time: 'Août-sept' });

  return alerts;
}
