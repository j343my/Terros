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
 * recolte    : fenêtre de récolte (ou floraison pour les fleurs)
 * arrosage   : 'faible' | 'modéré' | 'régulier' | 'abondant'
 * taille_min : volume minimum du bac en litres
 */
export const CALENDRIER_IDF = [
  // ── Solanacées ──────────────────────────────────────────
  {
    nom: 'Tomate',
    emoji: '🍅',
    famille: 'Solanacée',
    expo: 'Plein soleil',
    difficulte: 2,
    arrosage: 'régulier',
    taille_min: 50,
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
    arrosage: 'modéré',
    taille_min: 30,
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
    arrosage: 'modéré',
    taille_min: 20,
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
    arrosage: 'modéré',
    taille_min: 30,
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
    arrosage: 'abondant',
    taille_min: 50,
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
    arrosage: 'régulier',
    taille_min: 30,
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
    arrosage: 'abondant',
    taille_min: 80,
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
    arrosage: 'modéré',
    taille_min: 50,
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
    arrosage: 'modéré',
    taille_min: 20,
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
    arrosage: 'modéré',
    taille_min: 20,
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
    arrosage: 'modéré',
    taille_min: 30,
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
    arrosage: 'modéré',
    taille_min: 10,
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
    arrosage: 'modéré',
    taille_min: 20,
    semis_ext:  [3, 4, 5],
    recolte:    [6, 7, 8, 9],
    notes: 'Tremper les graines 12h avant semis. Éclaircir à 10 cm. Se conserve bien.',
  },
  {
    nom: 'Navet',
    emoji: '🟣',
    famille: 'Légume-racine',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 20,
    semis_ext:  [2, 3, 4, 7, 8],
    recolte:    [4, 5, 6, 9, 10],
    notes: 'Cycle court (6-8 semaines). Deux saisons : printemps et automne. Éviter la chaleur estivale. Sol profond et non pierreux.',
  },
  // ── Salades & feuilles ───────────────────────────────────
  {
    nom: 'Laitue',
    emoji: '🥬',
    famille: 'Salade',
    expo: 'Mi-ombre en été, soleil au printemps',
    difficulte: 1,
    arrosage: 'régulier',
    taille_min: 10,
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
    arrosage: 'modéré',
    taille_min: 10,
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
    arrosage: 'faible',
    taille_min: 10,
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
    arrosage: 'modéré',
    taille_min: 5,
    semis_ext:  [2, 3, 4, 7, 8],
    recolte:    [3, 4, 5, 8, 9],
    notes: 'Cycle rapide (4-5 semaines). Monte très vite à fleur en été.',
  },
  {
    nom: 'Blette',
    emoji: '🥬',
    famille: 'Légume-feuille',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'régulier',
    taille_min: 15,
    semis_ext:  [3, 4, 5, 6, 7],
    recolte:    [6, 7, 8, 9, 10],
    notes: 'Bette colorée (côtes rouges, jaunes, blanches). Récolter feuille par feuille. Productive et décorative. Résiste aux légères gelées.',
  },
  {
    nom: 'Chou Kale',
    emoji: '🥬',
    famille: 'Légume-feuille',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 20,
    semis_int:  [4, 5, 6],
    plantation: [6, 7],
    recolte:    [9, 10, 11, 0, 1, 2],
    notes: 'Chou frisé très résistant au gel, meilleur après les premières gelées. Récolter les feuilles extérieures. Très nutritif. Bon compagnon des courges.',
  },
  // ── Légumes-bulbes ───────────────────────────────────────
  {
    nom: 'Oignon blanc',
    emoji: '🧅',
    famille: 'Légume-bulbe',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    semis_ext:  [2, 3, 4],
    recolte:    [4, 5, 6],
    notes: 'Oignon hâtif à récolter jeune avant maturité complète. Cycle court, idéal en bac peu profond. Semer en lignes serrées.',
  },
  {
    nom: 'Échalote',
    emoji: '🧅',
    famille: 'Légume-bulbe',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 10,
    plantation: [1, 2, 3],
    recolte:    [6, 7],
    notes: 'Planter les caïeux en février-mars. Un caïeu produit 6–8 bulbes. Cesser l\'arrosage à maturation. Conserver en lieu sec et aéré.',
  },
  {
    nom: 'Ail',
    emoji: '🧄',
    famille: 'Légume-bulbe',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 15,
    plantation: [2, 3],
    recolte:    [5, 6, 7],
    notes: 'Ail de printemps — planter les caïeux en mars pointe vers le haut. Récolter quand les feuilles jaunissent. Sécher avant de stocker.',
  },
  // ── Aromatiques ──────────────────────────────────────────
  {
    nom: 'Basilic',
    emoji: '🌿',
    famille: 'Aromatique',
    expo: 'Plein soleil, abri du vent',
    difficulte: 2,
    arrosage: 'régulier',
    taille_min: 10,
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
    arrosage: 'modéré',
    taille_min: 10,
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
    arrosage: 'modéré',
    taille_min: 10,
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
    arrosage: 'modéré',
    taille_min: 5,
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
    arrosage: 'régulier',
    taille_min: 15,
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
    arrosage: 'faible',
    taille_min: 10,
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
    arrosage: 'faible',
    taille_min: 15,
    plantation: [3, 4, 5],
    recolte:    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    notes: 'Vivace toute l\'année. Résiste au froid. Très peu d\'arrosage.',
  },
  {
    nom: 'Sarriette',
    emoji: '🌿',
    famille: 'Aromatique',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 10,
    semis_ext:  [3, 4, 5],
    plantation: [3, 4, 5],
    recolte:    [5, 6, 7, 8, 9],
    notes: 'Aromatique méditerranéen proche du thym. Parfume haricots et plats provençaux. Annuelle (d\'été) ou vivace. Sol bien drainé.',
  },
  {
    nom: 'Estragon',
    emoji: '🌿',
    famille: 'Aromatique',
    expo: 'Plein soleil',
    difficulte: 2,
    arrosage: 'modéré',
    taille_min: 15,
    plantation: [3, 4, 5],
    recolte:    [4, 5, 6, 7, 8, 9],
    notes: 'Préférer l\'estragon français (non semable). Acheter en plant. Couper régulièrement pour stimuler. Rentrer ou pailler en hiver.',
  },
  {
    nom: 'Origan',
    emoji: '🌿',
    famille: 'Aromatique',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 10,
    semis_int:  [2, 3, 4],
    plantation: [3, 4, 5],
    recolte:    [5, 6, 7, 8, 9, 10],
    notes: 'Vivace robuste très parfumé. Tailler après floraison. Idéal pour pizzas et grillades. Attire les pollinisateurs.',
  },
  {
    nom: 'Sauge',
    emoji: '🌿',
    famille: 'Aromatique',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 10,
    plantation: [3, 4, 5],
    recolte:    [3, 4, 5, 6, 7, 8, 9, 10],
    notes: 'Arbuste vivace très résistant. Sol drainé impératif. Tailler au printemps. Propriétés médicinales reconnues. Fleurs bleues attractives.',
  },
  {
    nom: 'Aneth',
    emoji: '🌱',
    famille: 'Aromatique',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    semis_ext:  [3, 4, 5, 6, 7, 8],
    recolte:    [5, 6, 7, 8, 9],
    notes: 'Semer en place car supporte mal le repiquage. Semis successifs toutes les 3 sem. Monte vite à graines — les ombelles sont aussi utilisables en cuisine.',
  },
  {
    nom: 'Cerfeuil',
    emoji: '🌱',
    famille: 'Aromatique',
    expo: 'Mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 5,
    semis_ext:  [2, 3, 4, 7, 8, 9],
    recolte:    [4, 5, 6, 8, 9, 10],
    notes: 'Semer en place. Deux saisons idéales : printemps et automne. Éviter la chaleur directe. Cycle très court (5-6 semaines). Incontournable de la cuisine française.',
  },
  {
    nom: 'Verveine citronnelle',
    emoji: '🌿',
    famille: 'Aromatique',
    expo: 'Plein soleil',
    difficulte: 2,
    arrosage: 'modéré',
    taille_min: 20,
    plantation: [4, 5],
    recolte:    [6, 7, 8, 9],
    plantation_note: 'Après les Saints de Glace',
    notes: 'Aloysia citrodora. Arbuste non rustique à rentrer avant les gelées. Feuilles citronnées pour tisanes et desserts. Très parfumée.',
  },
  // ── Fruits ───────────────────────────────────────────────
  {
    nom: 'Fraise',
    emoji: '🍓',
    famille: 'Fruit',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'régulier',
    taille_min: 15,
    plantation: [2, 3, 4, 7, 8],
    recolte:    [4, 5, 6, 7],
    notes: 'Planter des stolons ou plants. Renouveler tous les 3 ans. Protéger des oiseaux.',
  },
  // ── Petits fruits à bac ──────────────────────────────────
  {
    nom: 'Framboisier',
    emoji: '🫐',
    famille: 'Petit fruit',
    expo: 'Soleil à mi-ombre',
    difficulte: 2,
    arrosage: 'régulier',
    taille_min: 30,
    plantation: [9, 10, 2, 3],
    recolte:    [6, 7, 8, 9],
    notes: 'Variété naine Ruby Beauty recommandée en bac. Tailler les cannes après récolte. Pailler le pied. Remontant pour 2 récoltes par an.',
  },
  {
    nom: 'Cassissier',
    emoji: '🫐',
    famille: 'Petit fruit',
    expo: 'Mi-ombre',
    difficulte: 2,
    arrosage: 'modéré',
    taille_min: 30,
    plantation: [9, 10, 2, 3],
    recolte:    [6, 7],
    notes: 'Arbrisseau vivace très productif. Tailler les vieilles branches après récolte. Riche en vitamine C. Peu exigeant, tolère la mi-ombre.',
  },
  {
    nom: 'Groseillier',
    emoji: '🍇',
    famille: 'Petit fruit',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 25,
    plantation: [9, 10, 2, 3],
    recolte:    [5, 6, 7],
    notes: 'Grappes rouges ou blanches. Très rustique et peu exigeant. Tailler pour aérer. Idéal en bac de 25L minimum.',
  },
  {
    nom: 'Myrtillier',
    emoji: '🫐',
    famille: 'Petit fruit',
    expo: 'Soleil à mi-ombre',
    difficulte: 2,
    arrosage: 'régulier',
    taille_min: 30,
    plantation: [2, 3, 9, 10],
    recolte:    [7, 8, 9],
    notes: 'Exige impérativement une terre acide (pH 4,5–5,5). Utiliser de la terre de bruyère. Planter 2 variétés pour la pollinisation. Nain type Blueberry recommandé.',
  },
  {
    nom: 'Mûrier',
    emoji: '🍇',
    famille: 'Petit fruit',
    expo: 'Plein soleil',
    difficulte: 2,
    arrosage: 'modéré',
    taille_min: 40,
    plantation: [9, 10, 2, 3],
    recolte:    [7, 8, 9],
    notes: 'Choisir une variété sans épines (Rubus). À palisser sur un support. Tailler sévèrement après récolte. Fruits fondants et sucrés.',
  },
  {
    nom: 'Kiwai',
    emoji: '🥝',
    famille: 'Grimpant',
    expo: 'Soleil à mi-ombre',
    difficulte: 2,
    arrosage: 'modéré',
    taille_min: 50,
    plantation: [3, 4, 9, 10],
    recolte:    [9, 10],
    notes: 'Mini-kiwi rustique (Actinidia arguta). Grimpant vigoureux nécessitant un support solide. Planter un mâle pour 5 femelles. Fruits de la taille d\'un raisin, sans épluchage.',
  },
  {
    nom: 'Vigne',
    emoji: '🍇',
    famille: 'Fruit',
    expo: 'Plein soleil',
    difficulte: 2,
    arrosage: 'modéré',
    taille_min: 50,
    plantation: [2, 3, 4],
    recolte:    [8, 9, 10],
    notes: 'Variété naine en bac (Pixie) ou petite vigne de table. Tailler court en hiver (taille de Guyot). Grand bac, exposition sud impérative.',
  },
  {
    nom: 'Figuier',
    emoji: '🌳',
    famille: 'Fruit',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 50,
    plantation: [3, 4, 5],
    recolte:    [7, 8, 9, 10],
    notes: 'Variété naine Little Miss Figgy recommandée. Rustique jusqu\'à -12°C. Contre un mur exposé sud. Laisser sécher entre les arrosages. Productif dès la 2ᵉ année.',
  },
  // ── Fleurs ───────────────────────────────────────────────
  {
    nom: 'Capucine',
    emoji: '🌼',
    famille: 'Fleur',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    semis_ext:  [3, 4, 5],
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9],
    notes: 'Fleurs et feuilles comestibles, goût poivré. Excellent répulsif pucerons. Pousse même en sol pauvre. Compagne idéale des tomates.',
  },
  {
    nom: 'Souci',
    emoji: '🌻',
    famille: 'Fleur',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 5,
    semis_int:  [2, 3],
    semis_ext:  [3, 4],
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9, 10],
    notes: 'Calendula officinalis. Fleurs comestibles et médicinales. Compagnon anti-ravageurs exceptionnel. Très résistant et florifère.',
  },
  {
    nom: 'Géranium',
    emoji: '🌺',
    famille: 'Fleur',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 15,
    plantation: [3, 4, 5],
    recolte:    [5, 6, 7, 8, 9, 10],
    notes: 'Classique incontournable du balcon. Laisser sécher entre les arrosages. Hiverner à l\'intérieur hors gel. Nombreuses variétés.',
  },
  {
    nom: 'Pétunias',
    emoji: '🌸',
    famille: 'Fleur',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'régulier',
    taille_min: 10,
    semis_int:  [1, 2, 3],
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9, 10],
    notes: 'Très florifère tout l\'été. Supprimer les fleurs fanées régulièrement. Idéal en jardinières retombantes.',
  },
  {
    nom: 'Lavande',
    emoji: '💜',
    famille: 'Fleur',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 10,
    plantation: [3, 4, 5, 9],
    recolte:    [5, 6, 7, 8],
    notes: 'Vivace méditerranéenne très robuste. Sécheresse tolérée. Tailler après floraison. Parfumée, attire les abeilles et papillons.',
  },
  {
    nom: 'Tournesol',
    emoji: '🌻',
    famille: 'Fleur',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 20,
    semis_ext:  [4, 5],
    recolte:    [7, 8, 9],
    notes: 'Choisir des variétés naines pour bacs (Teddy Bear, Sunspot). Semer en place. Graines comestibles. Impressionnant visuellement.',
  },
  {
    nom: 'Cosmos',
    emoji: '🌸',
    famille: 'Fleur',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 15,
    semis_ext:  [4, 5],
    plantation: [5],
    recolte:    [7, 8, 9, 10],
    notes: 'Floraison légère et abondante. Sol pauvre et drainé. Supporte bien la sécheresse. Supprimer les fleurs fanées pour prolonger.',
  },
  {
    nom: 'Œillet d\'Inde',
    emoji: '🌼',
    famille: 'Fleur',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 5,
    semis_int:  [2, 3],
    plantation: [4, 5],
    recolte:    [6, 7, 8, 9, 10],
    notes: 'Tagetes. Compagnon inestimable — repousse nématodes et pucerons. Associer aux tomates, poivrons, courgettes. Odeur forte protectrice.',
  },
  {
    nom: 'Surfinia',
    emoji: '🌸',
    famille: 'Fleur',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'régulier',
    taille_min: 10,
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9, 10],
    notes: 'Pétunia retombant très florifère. Arrosage fréquent indispensable. Fertilisation tous les 15 jours. Idéal en jardinière de bord de balcon.',
  },
  {
    nom: 'Bégonia',
    emoji: '🌺',
    famille: 'Fleur',
    expo: 'Mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9, 10],
    notes: 'Annuel parfait pour ombre et mi-ombre où peu de fleurs poussent. Floraison continue jusqu\'aux gelées. Supprimer les fleurs fanées.',
  },
  {
    nom: 'Pensée',
    emoji: '💜',
    famille: 'Fleur',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 5,
    plantation: [8, 9, 2, 3],
    recolte:    [2, 3, 4, 5, 9, 10, 11],
    notes: 'Viola tricolor. Fleurit en automne et très tôt au printemps. Résiste au gel. Remplacer en été par des annuelles de saison chaude.',
  },
  {
    nom: 'Primevère',
    emoji: '🌼',
    famille: 'Fleur',
    expo: 'Mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    plantation: [1, 2, 3],
    recolte:    [2, 3, 4],
    notes: 'Premières fleurs colorées de l\'année. Courte saison de floraison. Conserver le pied pour l\'année suivante ou repiquer au jardin.',
  },
  {
    nom: 'Campanule',
    emoji: '🔔',
    famille: 'Fleur',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    plantation: [3, 4, 5],
    recolte:    [5, 6, 7, 8],
    notes: 'Vivace couvre-sol aux fleurs violettes en clochettes. Retombante idéale pour murets ou bords de jardinières. Peu d\'entretien.',
  },
  {
    nom: 'Zinnia',
    emoji: '🌸',
    famille: 'Fleur',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 15,
    semis_ext:  [4, 5],
    plantation: [5],
    recolte:    [7, 8, 9, 10],
    notes: 'Floraison colorée et robuste tout l\'été. Semer après les Saints de Glace. Supprimer les fleurs fanées pour prolonger. Idéal pour couper.',
  },
  {
    nom: 'Fuchsia',
    emoji: '🌺',
    famille: 'Fleur',
    expo: 'Mi-ombre',
    difficulte: 2,
    arrosage: 'régulier',
    taille_min: 15,
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9, 10],
    notes: 'Floraison retombante spectaculaire en ombre. Redoute la chaleur et le soleil direct. Arrosage fréquent. Hiverner hors gel, tailler court en mars.',
  },
  {
    nom: 'Impatiens',
    emoji: '🌸',
    famille: 'Fleur',
    expo: 'Mi-ombre à ombre',
    difficulte: 1,
    arrosage: 'régulier',
    taille_min: 15,
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9, 10],
    notes: 'Impatiens de Nouvelle-Guinée. Floraison abondante à l\'ombre. Arrosage régulier sans mouiller les feuilles. Annuelle à replanter chaque année.',
  },
  {
    nom: 'Lobélie',
    emoji: '💙',
    famille: 'Fleur',
    expo: 'Soleil à mi-ombre',
    difficulte: 2,
    arrosage: 'régulier',
    taille_min: 10,
    semis_int:  [1, 2],
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9, 10],
    notes: 'Petites fleurs bleues retombantes très florifères. Semis délicat (ne pas couvrir). Tailler à mi-saison pour relancer la floraison.',
  },
  {
    nom: 'Marguerite',
    emoji: '🌼',
    famille: 'Fleur',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 15,
    plantation: [3, 4, 5],
    recolte:    [5, 6, 7, 8, 9],
    notes: 'Vivace classique aux fleurs blanc/jaune. Très rustique, revient chaque année. Supprimer les fleurs fanées pour prolonger la floraison.',
  },
  {
    nom: 'Muflier',
    emoji: '🌸',
    famille: 'Fleur',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    semis_int:  [1, 2, 3],
    plantation: [3, 4, 5],
    recolte:    [4, 5, 6, 7, 8, 9],
    notes: 'Gueule-de-loup. Floraison colorée idéale pour couper. Pincer les jeunes plants pour obtenir des touffes ramifiées. Légèrement vivace en IdF.',
  },
  {
    nom: 'Bleuet',
    emoji: '💙',
    famille: 'Fleur',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 10,
    semis_ext:  [3, 4, 5, 8, 9],
    recolte:    [5, 6, 7, 8, 9],
    notes: 'Centaurea cyanus. Fleur champêtre bleue très mellifère. Sol pauvre, drainage parfait. Semer en place. Excellent pour pollinisateurs.',
  },
  // ── Exotiques ────────────────────────────────────────────
  {
    nom: 'Piment fort',
    emoji: '🌶️',
    famille: 'Exotique',
    expo: 'Plein soleil, chaleur',
    difficulte: 2,
    arrosage: 'modéré',
    taille_min: 10,
    semis_int:  [0, 1, 2],
    plantation: [4],
    recolte:    [7, 8, 9, 10],
    plantation_note: 'Après les Saints de Glace',
    notes: 'Jalapeño, habanero, chili… Plus résistant que le poivron. Très décoratif. Fruits mûrissent du vert au rouge. Productif en pot.',
  },
  {
    nom: 'Physalis',
    emoji: '🟠',
    famille: 'Exotique',
    expo: 'Plein soleil',
    difficulte: 2,
    arrosage: 'modéré',
    taille_min: 20,
    semis_int:  [1, 2, 3],
    plantation: [4, 5],
    recolte:    [8, 9, 10],
    plantation_note: 'Après les Saints de Glace',
    notes: 'Coqueret du Pérou. Fruit enveloppé dans une lanterne papier. Goût acidulé unique, riche en vitamine C. Très productif, goût original.',
  },
  {
    nom: 'Gingembre',
    emoji: '🫚',
    famille: 'Exotique',
    expo: 'Mi-ombre, lumière indirecte',
    difficulte: 3,
    arrosage: 'régulier',
    taille_min: 30,
    plantation: [2, 3],
    recolte:    [9, 10, 11],
    notes: 'Planter un rhizome frais en pot profond en mars. Maintenir 20°C+. Rentrer l\'hiver. Récolter les rhizomes en automne. Patient mais gratifiant.',
  },
  {
    nom: 'Citronnelle',
    emoji: '🌿',
    famille: 'Exotique',
    expo: 'Plein soleil',
    difficulte: 2,
    arrosage: 'régulier',
    taille_min: 20,
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9],
    plantation_note: 'Après les Saints de Glace',
    notes: 'Cymbopogon (lemon grass). Tiges utilisées en cuisine asiatique. Parfum citronné qui repousse les moustiques. Hiverner à l\'intérieur.',
  },
  {
    nom: 'Tomatille',
    emoji: '🟢',
    famille: 'Exotique',
    expo: 'Plein soleil',
    difficulte: 2,
    arrosage: 'modéré',
    taille_min: 20,
    semis_int:  [2, 3],
    plantation: [4, 5],
    recolte:    [7, 8, 9],
    plantation_note: 'Après les Saints de Glace',
    notes: 'Tomate verte mexicaine (salsa verde). Fruit collant enveloppé dans une cosse. Planter 2 pieds minimum pour pollinisation croisée.',
  },
  {
    nom: 'Patate douce',
    emoji: '🍠',
    famille: 'Exotique',
    expo: 'Plein soleil, chaleur',
    difficulte: 3,
    arrosage: 'modéré',
    taille_min: 50,
    plantation: [4, 5],
    recolte:    [9, 10],
    plantation_note: 'En mai après toute gelée',
    notes: 'Nécessite un grand bac profond (50L+). Tiges retombantes très décoratives. Rentrer avant les premières gelées pour récolter les tubercules.',
  },
  // ── Plantes vertes ───────────────────────────────────────
  {
    nom: 'Chlorophytum',
    emoji: '🌿',
    famille: 'Plante verte',
    expo: 'Mi-ombre, lumière indirecte',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 15,
    plantation: [2, 3, 4, 5, 8, 9],
    recolte:    [4, 5, 6, 7, 8, 9, 10],
    notes: "Plante araignée. Très robuste, tolère la négligence et l'oubli d'arrosage. Produit des stolons retombants avec plantules en été — à rempoter pour multiplier. Purifie l'air. Idéale en pot suspendu. Éviter le soleil direct (brûlures).",
  },
  // ── Ornementales ─────────────────────────────────────────
  {
    nom: 'Carex',
    emoji: '🌾',
    famille: 'Graminée',
    expo: 'Mi-ombre à ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    plantation: [2, 3, 4, 9, 10],
    recolte:    [3, 4, 5, 6, 7, 8, 9],
    notes: 'Graminée vivace persistante à port élégant et retombant. Tolère l\'ombre. Couper les feuilles mortes au printemps. Très peu d\'entretien.',
  },
  {
    nom: 'Fusain',
    emoji: '🌿',
    famille: 'Arbuste',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 20,
    plantation: [2, 3, 4, 9, 10],
    recolte:    [3, 4, 5, 9, 10, 11],
    notes: 'Euonymus. Arbuste persistant à feuillage panaché vert/jaune ou vert/blanc. Très résistant au froid. Tailler légèrement au printemps. Architecturale.',
  },
  {
    nom: 'Picea glauca',
    emoji: '🎄',
    famille: 'Conifère',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 30,
    plantation: [2, 3, 4, 9, 10],
    recolte:    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    notes: 'Épicéa nain (Conica). Croissance très lente, forme conique naturelle. Décoratif toute l\'année, magnifique en hiver. Arroser régulièrement en bac.',
  },
  {
    nom: 'Yucca',
    emoji: '🌵',
    famille: 'Succulente',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 20,
    plantation: [3, 4, 5],
    recolte:    [5, 6, 7, 8],
    notes: 'Plante architecturale très graphique à feuilles en épées. Extrêmement résistante à la sécheresse. Floraison spectaculaire en grande hampe blanche.',
  },
  {
    nom: 'Orpin',
    emoji: '🌱',
    famille: 'Succulente',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 5,
    plantation: [3, 4, 5, 8, 9],
    recolte:    [7, 8, 9, 10],
    notes: 'Sedum. Vivace succulente très résistante à la sécheresse. Floraison rose/rouge en fin d\'été. Têtes de graines décoratives qui persistent en hiver.',
  },
  // ── Graminées ornementales ───────────────────────────────
  {
    nom: 'Fétuque bleue',
    emoji: '🌾',
    famille: 'Graminée',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 10,
    plantation: [3, 4, 5, 9, 10],
    recolte:    [3, 4, 5, 6, 7, 8, 9, 10],
    notes: 'Festuca glauca. Touffe argentée très décorative. Très résistant à la sécheresse. Couper sévèrement au printemps pour renouveler. Associer aux succulentes.',
  },
  {
    nom: 'Miscanthus',
    emoji: '🌾',
    famille: 'Graminée',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 30,
    plantation: [3, 4, 5],
    recolte:    [8, 9, 10, 11],
    notes: 'Herbe à éléphant naine. Panaches plumeux décoratifs en automne. Couper à 20 cm en février. Effet architectural spectaculaire en fin de saison.',
  },
  {
    nom: 'Pennisetum',
    emoji: '🌾',
    famille: 'Graminée',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 20,
    plantation: [3, 4, 5],
    recolte:    [7, 8, 9, 10],
    notes: 'Herbe aux écouvillons aux inflorescences en épis duveteux. Très ornementale en mouvement. Couper en mars. Rentrer si hivers rigoureux.',
  },
  // ── Vivaces & couvre-sol ─────────────────────────────────
  {
    nom: 'Lierre',
    emoji: '🍃',
    famille: 'Grimpant',
    expo: 'Mi-ombre à ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    plantation: [2, 3, 4, 9, 10],
    recolte:    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    notes: 'Hedera helix. Grimpant ou retombant persistant toute l\'année. Très résistant à l\'ombre. Tailler pour maîtriser. Excellent couvre-sol ou habillage de façade.',
  },
  {
    nom: 'Pervenche',
    emoji: '💙',
    famille: 'Vivace',
    expo: 'Mi-ombre à ombre',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 10,
    plantation: [3, 4, 9, 10],
    recolte:    [3, 4, 5, 6, 7, 8],
    notes: 'Vinca minor. Couvre-sol persistant aux fleurs bleues printanières. Très rustique et peu exigeant. Parfait sous les arbustes.',
  },
  {
    nom: 'Heuchère',
    emoji: '🌿',
    famille: 'Vivace',
    expo: 'Mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 15,
    plantation: [3, 4, 5, 9, 10],
    recolte:    [4, 5, 6, 7, 8, 9, 10],
    notes: 'Feuillage persistant pourpre, bronze ou doré très décoratif. Hampes florales fines en été. Idéale en bac d\'ombre. Diviser tous les 3 ans.',
  },
  {
    nom: 'Hosta',
    emoji: '🌿',
    famille: 'Vivace',
    expo: 'Mi-ombre à ombre',
    difficulte: 1,
    arrosage: 'régulier',
    taille_min: 20,
    plantation: [3, 4, 5],
    recolte:    [5, 6, 7, 8, 9],
    notes: 'Feuillage décoratif vert, bleuté ou panaché. Roi de l\'ombre, très rustique. Protéger des limaces. Disparaît en hiver, replante chaque printemps.',
  },
  // ── Arbustes ornementaux ─────────────────────────────────
  {
    nom: 'Hortensia',
    emoji: '💙',
    famille: 'Arbuste',
    expo: 'Mi-ombre',
    difficulte: 2,
    arrosage: 'abondant',
    taille_min: 30,
    plantation: [3, 4, 9, 10],
    recolte:    [6, 7, 8, 9],
    notes: 'Macrophylla. Grands pompons bleus ou roses selon le pH du sol. Arrosage abondant impératif. Ne jamais laisser sécher. Tailler légèrement après floraison.',
  },
  {
    nom: 'Camélia',
    emoji: '🌸',
    famille: 'Arbuste',
    expo: 'Mi-ombre',
    difficulte: 2,
    arrosage: 'régulier',
    taille_min: 30,
    plantation: [9, 10, 2, 3],
    recolte:    [1, 2, 3, 4],
    notes: 'Floraison hivernale spectaculaire. Exige une terre de bruyère (pH acide). Protéger des gelées fortes et du soleil direct en hiver. Arroser à l\'eau non calcaire.',
  },
  {
    nom: 'Azalée',
    emoji: '🌸',
    famille: 'Arbuste',
    expo: 'Mi-ombre',
    difficulte: 2,
    arrosage: 'régulier',
    taille_min: 20,
    plantation: [3, 4, 9, 10],
    recolte:    [4, 5, 6],
    notes: 'Feuillage persistant. Exige terre de bruyère et eau non calcaire. Floraison printanière spectaculaire. Tailler après floraison. Redoute le calcaire.',
  },
  {
    nom: 'Rhododendron',
    emoji: '🌸',
    famille: 'Arbuste',
    expo: 'Mi-ombre',
    difficulte: 2,
    arrosage: 'régulier',
    taille_min: 30,
    plantation: [3, 4, 9, 10],
    recolte:    [4, 5, 6],
    notes: 'Variété naine très florifère. Terre acide obligatoire. Arroser à l\'eau de pluie ou adoucie. Rustique mais sensible au calcaire. Magnifique au printemps.',
  },
  {
    nom: 'Buis',
    emoji: '🌿',
    famille: 'Arbuste',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 15,
    plantation: [2, 3, 4, 9, 10],
    recolte:    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    notes: 'Buxus. Persistant, idéal pour la taille en topiaire. Surveiller la pyrale du buis. Deux tailles par an : printemps et été.',
  },
  {
    nom: 'Érable du Japon',
    emoji: '🍁',
    famille: 'Arbuste',
    expo: 'Mi-ombre',
    difficulte: 2,
    arrosage: 'modéré',
    taille_min: 40,
    plantation: [2, 3, 4, 9, 10],
    recolte:    [4, 5, 6, 7, 8, 9, 10],
    notes: 'Acer palmatum. Feuillage rouge/orangé délicat. Protéger du vent et du soleil direct. Arrosage régulier en bac. Pot en terre cuite conseillé. Superbe coloration d\'automne.',
  },
  {
    nom: 'Oranger du Mexique',
    emoji: '🌸',
    famille: 'Arbuste',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 25,
    plantation: [3, 4, 9, 10],
    recolte:    [4, 5],
    notes: 'Choisya ternata. Feuillage persistant parfumé et floraison blanche très odorante au printemps. Rustique. Tailler légèrement après floraison.',
  },
  {
    nom: 'Photinia',
    emoji: '🌿',
    famille: 'Arbuste',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 20,
    plantation: [2, 3, 4, 9, 10],
    recolte:    [2, 3, 4, 5, 9, 10],
    notes: 'Little Red Robin. Jeunes feuilles rouge vif au printemps et automne. Persistant, compact. Tailler 2 à 3 fois par an pour stimuler la couleur.',
  },
  {
    nom: 'Olivier',
    emoji: '🫒',
    famille: 'Arbuste',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 40,
    plantation: [3, 4, 5],
    recolte:    [9, 10, 11],
    notes: 'Olea europaea. En bac contre un mur exposé plein sud. Rustique jusqu\'à -8°C. Très décoratif toute l\'année. Rentrer ou protéger en cas de grand froid.',
  },
  {
    nom: 'Laurier-tin',
    emoji: '🌸',
    famille: 'Arbuste',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 25,
    plantation: [9, 10, 2, 3],
    recolte:    [10, 11, 0, 1, 2, 3],
    notes: 'Viburnum tinus. Floraison rose/blanche en hiver et début de printemps. Persistant, très résistant. Baies bleues décoratifs après la floraison.',
  },
  {
    nom: 'Bambou nain',
    emoji: '🎋',
    famille: 'Arbuste',
    expo: 'Mi-ombre',
    difficulte: 1,
    arrosage: 'régulier',
    taille_min: 30,
    plantation: [3, 4, 9, 10],
    recolte:    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    notes: 'Fargesia rufa. Non traçant, en touffes, persistant. Parfait brise-vue ou fond de bac. Arrosage régulier en été. Résiste aux hivers parisiens.',
  },
  // ── Conifères nains ──────────────────────────────────────
  {
    nom: 'Genévrier',
    emoji: '🌲',
    famille: 'Conifère',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 20,
    plantation: [2, 3, 4, 9, 10],
    recolte:    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    notes: 'Juniperus rampant de rocaille. Persistant, extrêmement rustique et résistant à la sécheresse. Couvre-sol ou retombant en pot. Très peu d\'entretien.',
  },
  {
    nom: 'Thuya nain',
    emoji: '🌲',
    famille: 'Conifère',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 20,
    plantation: [2, 3, 4, 9, 10],
    recolte:    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    notes: 'Petit format persistant à croissance lente. Forme naturellement compacte, peu de taille nécessaire. Décoratif toute l\'année en bac.',
  },
  // ── Succulentes & plantes sèches ────────────────────────
  {
    nom: 'Joubarbe',
    emoji: '🌵',
    famille: 'Succulente',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 5,
    plantation: [3, 4, 5, 8, 9],
    recolte:    [5, 6, 7, 8],
    notes: 'Sempervivum. Rosettes persistantes ultra-rustiques. Résiste au gel et à la sécheresse. Se multiplie spontanément. Idéal en vasque ou sol de bac drainé.',
  },
  {
    nom: 'Aloé Vera',
    emoji: '🌵',
    famille: 'Succulente',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 15,
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9, 10],
    notes: 'Propriétés médicinales reconnues (gel cicatrisant). Rentrer impérativement avant le gel. Arroser très peu en hiver. Sol très drainant obligatoire.',
  },
  {
    nom: 'Echeveria',
    emoji: '🌵',
    famille: 'Succulente',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 5,
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9],
    notes: 'Rosette graphique aux teintes pastel. Non rustique, rentrer avant 5°C. Arrosage très rare (laisser sécher entre deux arrosages). Idéale en mini-jardinière.',
  },
  {
    nom: 'Crassula',
    emoji: '🌿',
    famille: 'Succulente',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 15,
    plantation: [4, 5],
    recolte:    [11, 0, 1, 2],
    notes: 'Arbre de jade (C. ovata). Arbustive et longévive. Fleurs blanches en hiver. Rentrer avant le gel. Arroser très peu, supporte la sécheresse. Se bouture facilement.',
  },
  {
    nom: 'Agave',
    emoji: '🌵',
    famille: 'Succulente',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 25,
    plantation: [4, 5],
    recolte:    [5, 6, 7, 8, 9],
    notes: 'Agave parryi, rustique jusqu\'à -15°C. Forme sculpturale très architecturale. Sol sec et drainant impératif. Très peu d\'entretien. Attention aux feuilles pointues.',
  },
  // ── Bulbes ───────────────────────────────────────────────
  {
    nom: 'Tulipe',
    emoji: '🌷',
    famille: 'Bulbe',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    plantation: [9, 10, 11],
    recolte:    [3, 4, 5],
    plantation_note: 'Planter les bulbes à l\'automne (oct-nov)',
    notes: 'Planter en automne à 10–15 cm de profondeur. Éclat de couleurs au printemps. Laisser le feuillage jaunir avant de couper. Renouveler les bulbes tous les 2–3 ans.',
  },
  {
    nom: 'Narcisse',
    emoji: '🌼',
    famille: 'Bulbe',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 10,
    plantation: [9, 10],
    recolte:    [2, 3, 4],
    plantation_note: 'Planter les bulbes en automne',
    notes: 'Jonquille. Bulbe increvable, se naturalise et fleurit tôt. Non appété des rongeurs. Laisser le feuillage mourir. Se ressème et se multiplie seul.',
  },
  {
    nom: 'Jacinthe',
    emoji: '💜',
    famille: 'Bulbe',
    expo: 'Soleil à mi-ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 10,
    plantation: [9, 10],
    recolte:    [2, 3, 4],
    plantation_note: 'Planter les bulbes en automne',
    notes: 'Parfum puissant. Utilisable aussi en vase (jacinthe d\'eau). Planter pointe vers le haut. Floraison printanière précoce très odorante.',
  },
  {
    nom: 'Crocus',
    emoji: '🌸',
    famille: 'Bulbe',
    expo: 'Plein soleil',
    difficulte: 1,
    arrosage: 'faible',
    taille_min: 5,
    plantation: [9, 10],
    recolte:    [1, 2, 3],
    plantation_note: 'Planter les bulbes en automne',
    notes: 'Parmi les premières fleurs de l\'année (dès janvier). Naturalise facilement. Bulbes minuscules à planter en groupe de 10+ pour l\'effet. Violet, jaune ou blanc.',
  },
  {
    nom: 'Muguet',
    emoji: '🤍',
    famille: 'Bulbe',
    expo: 'Mi-ombre à ombre',
    difficulte: 1,
    arrosage: 'modéré',
    taille_min: 15,
    plantation: [9, 10, 11],
    recolte:    [4, 5],
    notes: 'Convallaria majalis. Parfum mythique. Planter les griffes en automne. Préfère les sous-bois et l\'ombre fraîche. Se naturalise et forme des massifs denses en quelques années.',
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

const FAMILLES_NON_RECOLTEES = new Set([
  'Fleur',
  'Plante verte',
  'Graminée',
  'Arbuste',
  'Conifère',
  'Succulente',
  'Bulbe',
  'Vivace',
]);

const FAMILLES_INTERIEUR_OU_MIXTE = new Set([
  'Plante verte',
  'Succulente',
  'Exotique',
]);

/**
 * Indique si la plante est normalement récoltée (alimentaire ou usage culinaire).
 */
export function isPlanteRecoltable(plante) {
  if (!plante) return false;
  if (typeof plante.recoltable === 'boolean') return plante.recoltable;
  return !FAMILLES_NON_RECOLTEES.has(plante.famille);
}

/**
 * Retourne le type de culture conseillé.
 * Valeurs : 'exterieur' | 'interieur' | 'mixte'
 */
export function getCultureType(plante) {
  if (!plante) return 'exterieur';
  if (plante.culture_type) return plante.culture_type;

  const nom = (plante.nom || '').toLowerCase();
  if (nom.includes('chlorophytum') || nom.includes('aloé') || nom.includes('echeveria') || nom.includes('crassula')) {
    return 'interieur';
  }
  if (FAMILLES_INTERIEUR_OU_MIXTE.has(plante.famille)) return 'mixte';
  return 'exterieur';
}

function normalizeNom(nom) {
  return (nom || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim();
}

const INCOMPATIBILITES_SPECIFIQUES = {
  ail: ['haricot vert', 'pois'],
  'oignon blanc': ['haricot vert', 'pois'],
  echalote: ['haricot vert', 'pois'],
  'haricot vert': ['ail', 'oignon blanc', 'echalote'],
  pois: ['ail', 'oignon blanc', 'echalote'],
  menthe: ['basilic', 'persil', 'ciboulette', 'thym', 'romarin', 'coriandre'],
};

const FAMILLES_COMPETITIVES = new Set(['Solanacée', 'Cucurbitacée', 'Légumineuse']);

/**
 * Retourne la liste des incompatibilités détectées entre la plante à ajouter
 * et les plantes déjà présentes dans le bac.
 */
export function getPlantIncompatibilities(plantName, existingPlants = []) {
  if (!plantName || existingPlants.length === 0) return [];

  const candidate = findPlante(plantName);
  const candidateNorm = normalizeNom(plantName);
  const directIncompat = INCOMPATIBILITES_SPECIFIQUES[candidateNorm] || [];

  return existingPlants.flatMap((p) => {
    const otherNorm = normalizeNom(p.nom);
    const otherRef = findPlante(p.nom);
    const otherIncompat = INCOMPATIBILITES_SPECIFIQUES[otherNorm] || [];

    if (directIncompat.includes(otherNorm) || otherIncompat.includes(candidateNorm)) {
      return [{
        type: 'incompatibilite',
        with: p.nom,
        reason: 'Association déconseillée entre ces deux plantes dans le même bac.',
      }];
    }

    if (
      candidate?.famille
      && otherRef?.famille
      && candidate.famille === otherRef.famille
      && FAMILLES_COMPETITIVES.has(candidate.famille)
    ) {
      return [{
        type: 'famille',
        with: p.nom,
        reason: `Deux ${candidate.famille.toLowerCase()} dans un petit bac peuvent se concurrencer.`,
      }];
    }

    return [];
  });
}
