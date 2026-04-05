// ─────────────────────────────────────────────────────────────
//  Calendrier de plantation · Île-de-France
//  Mois en 0-indexé : 0 = Janvier … 11 = Décembre
//  Derniers gels : ~10-13 mai (Saints de Glace)
//  Premiers gels : ~1-15 novembre
// ─────────────────────────────────────────────────────────────

export const MOIS_COURT = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
export const MOIS_LONG_CAL = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

/**
 * Données de référence Île-de-France.
 * semis_int  : semis sous abri / en intérieur
 * semis_ext  : semis direct en pleine terre / bac
 * plantation : mise en place dehors (repiquage ou plant acheté)
 * recolte    : fenêtre de récolte
 */
export const CALENDRIER_IDF = [
  // ── Solanacées ──────────────────────────────────────────
  {
    nom: 'Tomate',
    emoji: '🍅',
    famille: 'Solanacée',
    expo: 'Plein soleil',
    difficulte: 2,
    semis_int:  [1, 2, 3],
    plantation: [4],
    recolte:    [6, 7, 8, 9],
    plantation_note: 'Après les Saints de Glace (13 mai)',
    notes: 'Pincer les gourmands. Tuteurage obligatoire. Arrosage régulier au pied.',
  },
  {
    nom: 'Tomate cerise',
    emoji: '🍒',
    famille: 'Solanacée',
    expo: 'Plein soleil',
    difficulte: 1,
    semis_int:  [1, 2, 3],
    plantation: [4],
    recolte:    [5, 6, 7, 8, 9],
    plantation_note: 'Après les Saints de Glace (13 mai)',
    notes: 'Plus tolérante que la tomate classique. Idéale en pot sur balcon.',
  },
  {
    nom: 'Poivron',
    emoji: '🫑',
    famille: 'Solanacée',
    expo: 'Plein soleil, chaleur',
    difficulte: 3,
    semis_int:  [0, 1, 2],
    plantation: [4],
    recolte:    [7, 8, 9],
    plantation_note: 'Après les Saints de Glace (13 mai)',
    notes: 'Germination lente (3-4 sem). Besoin de 22°C+ en germination. Contre un mur exposé sud.',
  },
  {
    nom: 'Aubergine',
    emoji: '🍆',
    famille: 'Solanacée',
    expo: 'Plein soleil, chaleur',
    difficulte: 3,
    semis_int:  [0, 1, 2],
    plantation: [4],
    recolte:    [7, 8, 9],
    plantation_note: 'Après les Saints de Glace (13 mai)',
    notes: 'Encore plus exigeante en chaleur que le poivron. Tige fragile à soutenir.',
  },
  // ── Cucurbitacées ────────────────────────────────────────
  {
    nom: 'Courgette',
    emoji: '🥒',
    famille: 'Cucurbitacée',
    expo: 'Soleil',
    difficulte: 1,
    semis_int:  [3, 4],
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8],
    plantation_note: 'Après les Saints de Glace',
    notes: 'Un pied occupe beaucoup de place. Arrosage quotidien en été. Récolter jeune (15-20 cm).',
  },
  {
    nom: 'Concombre',
    emoji: '🥒',
    famille: 'Cucurbitacée',
    expo: 'Soleil',
    difficulte: 2,
    semis_int:  [3, 4],
    plantation: [4, 5],
    recolte:    [6, 7, 8],
    plantation_note: 'Après les Saints de Glace',
    notes: 'Aime la chaleur. Arrosage régulier sans mouiller le feuillage (mildiou).',
  },
  {
    nom: 'Potiron',
    emoji: '🎃',
    famille: 'Cucurbitacée',
    expo: 'Plein soleil',
    difficulte: 1,
    semis_int:  [3, 4],
    plantation: [4, 5],
    recolte:    [8, 9, 10],
    plantation_note: 'Après les Saints de Glace',
    notes: 'Très gourmand en espace. Arrosage copieux. Récolter à maturité (queue desséchée).',
  },
  {
    nom: 'Melon',
    emoji: '🍈',
    famille: 'Cucurbitacée',
    expo: 'Plein soleil, chaleur',
    difficulte: 3,
    semis_int:  [3, 4],
    plantation: [4, 5],
    recolte:    [7, 8],
    plantation_note: 'Après les Saints de Glace, contre un mur sud',
    notes: 'Difficile en IdF. Préférer des variétés précoces. Exposé plein sud obligatoire.',
  },
  // ── Légumineuses ─────────────────────────────────────────
  {
    nom: 'Haricot vert',
    emoji: '🫘',
    famille: 'Légumineuse',
    expo: 'Soleil',
    difficulte: 1,
    semis_ext:  [4, 5, 6],
    recolte:    [6, 7, 8],
    notes: 'Semer après les Saints de Glace. Récolter jeune. Semer en successifs toutes les 3 sem.',
  },
  {
    nom: 'Pois',
    emoji: '🫛',
    famille: 'Légumineuse',
    expo: 'Soleil',
    difficulte: 1,
    semis_ext:  [1, 2, 3],
    recolte:    [4, 5, 6],
    notes: 'Semer tôt (dès mars). Supporte bien le froid. Tuteurage recommandé.',
  },
  // ── Légumes-racines ──────────────────────────────────────
  {
    nom: 'Carotte',
    emoji: '🥕',
    famille: 'Légume-racine',
    expo: 'Soleil',
    difficulte: 2,
    semis_ext:  [2, 3, 4, 5, 6],
    recolte:    [5, 6, 7, 8, 9],
    notes: 'Sol profond et meuble. Peu adapté aux bacs peu profonds (< 30 cm).',
  },
  {
    nom: 'Radis',
    emoji: '🌱',
    famille: 'Légume-racine',
    expo: 'Mi-ombre à soleil',
    difficulte: 1,
    semis_ext:  [2, 3, 4, 7, 8],
    recolte:    [3, 4, 5, 8, 9],
    notes: 'Cycle très court (18-30 j). Semis direct, pas de repiquage. Pas d\'arrosage excessif.',
  },
  {
    nom: 'Betterave',
    emoji: '🔴',
    famille: 'Légume-racine',
    expo: 'Soleil',
    difficulte: 1,
    semis_ext:  [3, 4, 5],
    recolte:    [6, 7, 8, 9],
    notes: 'Tremper les graines 12h avant semis. Éclaircir à 10 cm. Se conserve bien.',
  },
  // ── Salades & feuilles ───────────────────────────────────
  {
    nom: 'Laitue',
    emoji: '🥬',
    famille: 'Salade',
    expo: 'Mi-ombre en été, soleil au printemps',
    difficulte: 1,
    semis_int:  [1, 2, 3, 4, 5],
    semis_ext:  [2, 3, 4, 5, 6, 7],
    plantation: [2, 3, 4, 5, 6, 7],
    recolte:    [4, 5, 6, 7, 8, 9],
    notes: 'Semis successifs toutes les 3 semaines. Monte à graines en forte chaleur.',
  },
  {
    nom: 'Épinard',
    emoji: '🥬',
    famille: 'Légume-feuille',
    expo: 'Mi-ombre',
    difficulte: 1,
    semis_ext:  [2, 3, 7, 8, 9],
    recolte:    [4, 5, 8, 9, 10, 11],
    notes: 'Monte à graines en chaleur. Culture de printemps et d\'automne. Froid toléré.',
  },
  {
    nom: 'Mâche',
    emoji: '🥬',
    famille: 'Salade d\'hiver',
    expo: 'Mi-ombre',
    difficulte: 1,
    semis_ext:  [7, 8, 9],
    recolte:    [10, 11, 0, 1, 2],
    notes: 'Culture d\'hiver. Résiste au gel. Semer en août-septembre pour récolte hivernale.',
  },
  {
    nom: 'Roquette',
    emoji: '🌱',
    famille: 'Salade',
    expo: 'Mi-ombre',
    difficulte: 1,
    semis_ext:  [2, 3, 4, 7, 8],
    recolte:    [3, 4, 5, 8, 9],
    notes: 'Cycle rapide (4-5 semaines). Monte très vite à fleur en été.',
  },
  // ── Aromatiques ──────────────────────────────────────────
  {
    nom: 'Basilic',
    emoji: '🌿',
    famille: 'Aromatique',
    expo: 'Plein soleil, abri du vent',
    difficulte: 2,
    semis_int:  [2, 3, 4],
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8],
    plantation_note: 'Sensible au froid, attendre fin mai',
    notes: 'Ne jamais planter avant les Saints de Glace. Pincer régulièrement les fleurs.',
  },
  {
    nom: 'Persil',
    emoji: '🌱',
    famille: 'Aromatique',
    expo: 'Mi-ombre à soleil',
    difficulte: 2,
    semis_int:  [2, 3, 4, 5, 6],
    semis_ext:  [2, 3, 4, 5, 6],
    plantation: [3, 4, 5, 6, 7],
    recolte:    [4, 5, 6, 7, 8, 9, 10],
    notes: 'Germination lente (3-4 semaines). Tremper les graines 24h avant. Bisannuel.',
  },
  {
    nom: 'Ciboulette',
    emoji: '🌱',
    famille: 'Aromatique',
    expo: 'Mi-ombre à soleil',
    difficulte: 1,
    semis_int:  [2, 3],
    semis_ext:  [3, 4],
    plantation: [3, 4],
    recolte:    [4, 5, 6, 7, 8, 9],
    notes: 'Vivace. Se ressème facilement. Couper régulièrement pour stimuler la pousse.',
  },
  {
    nom: 'Coriandre',
    emoji: '🌱',
    famille: 'Aromatique',
    expo: 'Mi-ombre (monte à graines au soleil direct)',
    difficulte: 2,
    semis_ext:  [3, 4, 5, 6, 7, 8],
    recolte:    [4, 5, 6, 7, 8, 9],
    notes: 'Semer en successifs toutes les 3 semaines. Monte vite à fleur en chaleur.',
  },
  {
    nom: 'Menthe',
    emoji: '🌿',
    famille: 'Aromatique',
    expo: 'Mi-ombre',
    difficulte: 1,
    plantation: [3, 4, 5],
    recolte:    [4, 5, 6, 7, 8, 9],
    notes: 'Très envahissante, isoler en pot. Se multiplie par division. Vivace résistante.',
  },
  {
    nom: 'Thym',
    emoji: '🌿',
    famille: 'Aromatique',
    expo: 'Plein soleil',
    difficulte: 1,
    plantation: [3, 4, 5],
    recolte:    [3, 4, 5, 6, 7, 8, 9, 10],
    notes: 'Arbuste vivace très résistant. Tailler après floraison. Peu d\'arrosage.',
  },
  {
    nom: 'Romarin',
    emoji: '🌿',
    famille: 'Aromatique',
    expo: 'Plein soleil',
    difficulte: 1,
    plantation: [3, 4, 5],
    recolte:    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    notes: 'Vivace toute l\'année. Résiste au froid. Très peu d\'arrosage.',
  },
  // ── Fruits ───────────────────────────────────────────────
  {
    nom: 'Fraise',
    emoji: '🍓',
    famille: 'Fruit',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    plantation: [2, 3, 4, 7, 8],
    recolte:    [4, 5, 6, 7],
    notes: 'Planter des stolons ou plants. Renouveler tous les 3 ans. Protéger des oiseaux.',
  },
];

// ─────────────────────────────────────────────────────────────
//  FONCTIONS UTILITAIRES
// ─────────────────────────────────────────────────────────────

/**
 * Trouve une plante dans le référentiel (correspondance partielle, insensible à la casse)
 */
export function findPlante(nom) {
  if (!nom || nom.length < 2) return null;
  const n = nom.toLowerCase().trim();
  return CALENDRIER_IDF.find(p => p.nom.toLowerCase() === n)
    || CALENDRIER_IDF.find(p => p.nom.toLowerCase().startsWith(n))
    || null;
}

/**
 * Calcule le conseil pour une plante donnée et le mois courant.
 * @returns {{ semis_int, semis_ext, plantation, recolte }} – chacun { status, label }
 */
export function getConseil(plante, currentMonth) {
  const m = currentMonth ?? new Date().getMonth();

  const check = (months) => {
    if (!months || months.length === 0) return null;
    if (months.includes(m)) return { status: 'ok', label: 'Maintenant !' };

    // Chercher le prochain mois dans la liste
    const sorted = [...months].sort((a, b) => a - b);
    const next = sorted.find(x => x > m);
    if (next !== undefined) {
      const delta = next - m;
      const label = MOIS_LONG_CAL[next];
      if (delta === 1) return { status: 'soon', label: `Le mois prochain (${label})` };
      if (delta <= 3) return { status: 'upcoming', label: `Dans ${delta} mois (${label})` };
      return { status: 'later', label: `À partir de ${label}` };
    }

    // Tous les mois sont passés (trop tard cette saison)
    return { status: 'late', label: 'Trop tard cette saison' };
  };

  return {
    semis_int:  check(plante.semis_int),
    semis_ext:  check(plante.semis_ext),
    plantation: check(plante.plantation),
    recolte:    check(plante.recolte),
  };
}

/**
 * Suggère des dates ISO basées sur la plante et la date courante.
 */
export function suggestDates(plante, currentDate) {
  const now = currentDate || new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const firstDateFrom = (months, fallbackNextYear = false) => {
    if (!months || months.length === 0) return null;
    const sorted = [...months].sort((a, b) => a - b);
    // Préférer un mois >= mois actuel
    const fromNow = sorted.find(x => x >= month);
    if (fromNow !== undefined) {
      const day = fromNow === month ? now.getDate() : 15;
      return `${year}-${String(fromNow + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }
    if (fallbackNextYear) {
      return `${year + 1}-${String(sorted[0] + 1).padStart(2, '0')}-15`;
    }
    return null;
  };

  const semisDate = firstDateFrom(plante.semis_int) || firstDateFrom(plante.semis_ext);
  const plantationDate = firstDateFrom(plante.plantation);

  // Récolte : chercher un mois après la plantation si possible
  let recolteDate = null;
  if (plante.recolte && plante.recolte.length > 0) {
    const plantationMonth = plantationDate
      ? parseInt(plantationDate.slice(5, 7)) - 1
      : month;
    const sorted = [...plante.recolte].sort((a, b) => a - b);
    const afterPlantation = sorted.find(x => x > plantationMonth);
    const candidate = afterPlantation !== undefined ? afterPlantation : sorted[0];
    const recolteYear = candidate < month && candidate < plantationMonth ? year + 1 : year;
    recolteDate = `${recolteYear}-${String(candidate + 1).padStart(2, '0')}-01`;
  }

  // Fin : 6-8 semaines après début récolte, ou dernier mois de récolte
  let finDate = null;
  if (plante.recolte && plante.recolte.length > 0 && recolteDate) {
    const sorted = [...plante.recolte].sort((a, b) => a - b);
    const lastMonth = sorted[sorted.length - 1];
    const recolteMonth = parseInt(recolteDate.slice(5, 7)) - 1;
    if (lastMonth > recolteMonth) {
      finDate = `${recolteDate.slice(0, 4)}-${String(lastMonth + 1).padStart(2, '0')}-30`;
    }
  }

  return { semis: semisDate, plantation: plantationDate, recolte: recolteDate, fin: finDate };
}

/**
 * Retourne le tableau de 12 cases (phases) d'une plante du référentiel pour l'affichage calendrier.
 * Valeur possible : 'semis', 'plantation', 'recolte', 'none'
 */
export function getRefPhases(plante) {
  return Array.from({ length: 12 }, (_, m) => {
    if (plante.recolte?.includes(m)) return 'recolte';
    if (plante.plantation?.includes(m)) return 'plantation';
    if (plante.semis_ext?.includes(m)) return 'semis_ext';
    if (plante.semis_int?.includes(m)) return 'semis_int';
    return 'none';
  });
}
