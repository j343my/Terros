'use client';
import { useMemo, useState } from 'react';
import { Modal } from './ui';
import { CALENDRIER_IDF, getCultureType, getIncompatibilitesDansBac, isPlanteRecoltable } from '../lib/plantingCalendar';

function scoreExpoMatch(expositionBac, expoPlante) {
  const bac = (expositionBac || '').toLowerCase();
  const plante = (expoPlante || '').toLowerCase();
  if (!bac || !plante) return 1;
  if (plante.includes('plein soleil') && bac.includes('sud')) return 3;
  if (plante.includes('mi-ombre') && (bac.includes('est') || bac.includes('ouest') || bac.includes('nord'))) return 3;
  if (plante.includes('soleil') && (bac.includes('sud') || bac.includes('est') || bac.includes('ouest'))) return 2;
  if (plante.includes('ombre') && bac.includes('nord')) return 2;
  return 0;
}

function actionNow(plante, month) {
  if (plante.plantation?.includes(month)) return 'Plantation maintenant';
  if (plante.semis_ext?.includes(month)) return 'Semis direct maintenant';
  if (plante.semis_int?.includes(month)) return 'Semis intérieur maintenant';
  return null;
}

export default function PlantWizard({ bacs, plants, onClose, onPrefillPlant }) {
  const [bacId, setBacId] = useState(bacs[0]?.id || '');
  const [maxDifficulte, setMaxDifficulte] = useState(2);
  const [arrosage, setArrosage] = useState('tous');
  const [objectif, setObjectif] = useState('recolte');
  const [onlyNow, setOnlyNow] = useState(true);

  const currentMonth = new Date().getMonth();
  const bac = bacs.find(x => x.id === bacId);
  const plantsInBac = plants.filter(p => p.bac_id === bacId);
  const bacVolume = Number(bac?.volume || 0);

  const suggestions = useMemo(() => {
    const plantedNames = new Set(plantsInBac.map(p => p.nom.toLowerCase()));
    return CALENDRIER_IDF
      .filter(p => p.difficulte <= maxDifficulte)
      .filter(p => arrosage === 'tous' || p.arrosage === arrosage)
      .filter(p => objectif !== 'recolte' || isPlanteRecoltable(p))
      .filter(p => !onlyNow || Boolean(actionNow(p, currentMonth)))
      .filter(p => !plantedNames.has(p.nom.toLowerCase()))
      .filter(p => {
        const culture = getCultureType(p);
        if (!bac) return true;
        if (bac.emplacement === 'interieur') return culture !== 'exterieur';
        return culture !== 'interieur';
      })
      .map(p => {
        const scoreVolume = bacVolume >= (p.taille_min || 0) ? 4 : 0;
        const scoreExpo = scoreExpoMatch(bac?.exposition, p.expo);
        const conflicts = getIncompatibilitesDansBac(p.nom, plantsInBac);
        const conflictPenalty = conflicts.length > 0 ? 4 : 0;
        const score = scoreVolume + scoreExpo - conflictPenalty;
        return { plante: p, score, conflicts, action: actionNow(p, currentMonth) };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [maxDifficulte, arrosage, objectif, onlyNow, currentMonth, bacVolume, bac, plantsInBac]);

  if (!bac) {
    return (
      <Modal title="Wizard de plantation" onClose={onClose}>
        <div className="empty">
          <div className="empty-text">Ajoute au moins un bac pour obtenir des suggestions.</div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal title="Wizard de plantation" onClose={onClose}>
      <div className="wizard-grid">
        <div className="field">
          <label>Bac ciblé</label>
          <select value={bacId} onChange={e => setBacId(e.target.value)}>
            {bacs.map(item => <option key={item.id} value={item.id}>{item.nom}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Difficulté max</label>
          <select value={maxDifficulte} onChange={e => setMaxDifficulte(Number(e.target.value))}>
            <option value={1}>Facile</option>
            <option value={2}>Intermédiaire</option>
            <option value={3}>Toutes</option>
          </select>
        </div>
        <div className="field">
          <label>Arrosage</label>
          <select value={arrosage} onChange={e => setArrosage(e.target.value)}>
            <option value="tous">Peu importe</option>
            <option value="faible">Faible</option>
            <option value="modéré">Modéré</option>
            <option value="régulier">Régulier</option>
            <option value="abondant">Abondant</option>
          </select>
        </div>
        <div className="field">
          <label>Objectif</label>
          <select value={objectif} onChange={e => setObjectif(e.target.value)}>
            <option value="recolte">Plantes à récolter</option>
            <option value="deco">Décoratif + comestible</option>
          </select>
        </div>
      </div>

      <label className="wizard-checkbox">
        <input type="checkbox" checked={onlyNow} onChange={e => setOnlyNow(e.target.checked)} />
        Montrer uniquement ce qui se plante/se sème ce mois-ci.
      </label>

      <div className="wizard-meta">
        Bac: {bac.nom} · {bac.volume || '?'}L · {bac.exposition || 'exposition inconnue'}
      </div>

      <div className="wizard-list">
        {suggestions.length === 0 ? (
          <div className="empty-text">Aucune proposition avec ces critères. Essaie de desserrer les filtres.</div>
        ) : suggestions.map(({ plante, action, conflicts }) => (
          <div className="wizard-item" key={plante.nom}>
            <div>
              <div className="wizard-title">{plante.emoji} {plante.nom}</div>
              <div className="wizard-sub">
                {plante.famille} · difficulté {plante.difficulte}/3 · arrosage {plante.arrosage} · min {plante.taille_min}L
              </div>
              <div className="wizard-sub">
                {action || 'Planification plus tard'} · expo idéale: {plante.expo}
              </div>
              {conflicts.length > 0 && (
                <div className="wizard-conflict">
                  ⚠️ Risque avec {conflicts.map(c => c.nom).join(', ')}.
                </div>
              )}
            </div>
            <button className="btn" onClick={() => onPrefillPlant(bac.id, plante.nom)}>Ajouter</button>
          </div>
        ))}
      </div>
    </Modal>
  );
}
