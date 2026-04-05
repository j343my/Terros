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
