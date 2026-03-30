// ─────────────────────────────────────────────
//  SEED — Mon Potager · Saint-Maur-des-Fossés
//  Terrasse SE · Saison 2026
// ─────────────────────────────────────────────

export const SEED_BACS = [
  { id: "bac-1", nom: "Grand bac tomates", dimensions: "100×40", volume: "80", exposition: "Sud-Est", notes: "Contre le mur principal, plein soleil de 7h à 14h. Idéal pour les tomates." },
  { id: "bac-2", nom: "Bac aromatiques", dimensions: "60×25", volume: "20", exposition: "Sud-Est", notes: "À portée de main depuis la porte. Basilic, thym, ciboulette, persil." },
  { id: "bac-3", nom: "Bac salades & radis", dimensions: "80×30", volume: "35", exposition: "Sud-Est", notes: "Semis successifs toutes les 3 semaines pour étaler les récoltes." },
  { id: "bac-4", nom: "Pot courgette", dimensions: "45×45", volume: "40", exposition: "Sud-Est", notes: "Un seul pied — une courgette occupe beaucoup de place. Arrosage quotidien en été." },
  { id: "bac-5", nom: "Pot poivrons & aubergine", dimensions: "50×30", volume: "30", exposition: "Sud-Est", notes: "Contre le mur pour profiter de la chaleur réfléchie. Adore la chaleur accumulée en SE." },
];

export const SEED_PLANTS = [
  // ── Grand bac tomates ──
  { id: "plant-1", bac_id: "bac-1", nom: "Tomate", varietal: "Andine Cornue", origine: "semence_propre", date_semis: "2026-02-14", date_plantation: "2026-05-15", date_recolte: "2026-07-10", date_fin: "2026-10-15", statut: "semis" },
  { id: "plant-2", bac_id: "bac-1", nom: "Tomate cerise", varietal: "Sweet Million", origine: "graines_achetees", date_semis: "2026-02-20", date_plantation: "2026-05-15", date_recolte: "2026-07-01", date_fin: "2026-10-10", statut: "semis" },
  { id: "plant-3", bac_id: "bac-1", nom: "Tomate", varietal: "Noire de Crimée", origine: "graines_achetees", date_semis: "2026-02-20", date_plantation: "2026-05-15", date_recolte: "2026-07-15", date_fin: "2026-10-15", statut: "semis" },
  // ── Bac aromatiques ──
  { id: "plant-4", bac_id: "bac-2", nom: "Basilic", varietal: "Grand vert", origine: "graines_achetees", date_semis: "2026-03-15", date_plantation: "2026-05-13", date_recolte: "2026-06-10", date_fin: "2026-09-30", statut: "semis" },
  { id: "plant-5", bac_id: "bac-2", nom: "Thym", varietal: "Commun", origine: "plant_acheté", date_semis: "", date_plantation: "2026-03-20", date_recolte: "2026-05-01", date_fin: "", statut: "croissance" },
  { id: "plant-6", bac_id: "bac-2", nom: "Ciboulette", varietal: "", origine: "semence_propre", date_semis: "2026-03-01", date_plantation: "2026-04-10", date_recolte: "2026-05-01", date_fin: "", statut: "semis" },
  { id: "plant-7", bac_id: "bac-2", nom: "Persil", varietal: "Frisé", origine: "graines_achetees", date_semis: "2026-03-01", date_plantation: "2026-04-15", date_recolte: "2026-05-15", date_fin: "2026-11-30", statut: "semis" },
  // ── Bac salades & radis ──
  { id: "plant-8", bac_id: "bac-3", nom: "Laitue", varietal: "Feuille de chêne blonde", origine: "graines_achetees", date_semis: "2026-03-20", date_plantation: "2026-04-15", date_recolte: "2026-05-10", date_fin: "2026-06-20", statut: "semis" },
  { id: "plant-9", bac_id: "bac-3", nom: "Radis", varietal: "18 jours", origine: "graines_achetees", date_semis: "2026-03-25", date_plantation: "", date_recolte: "2026-04-15", date_fin: "2026-05-01", statut: "semis" },
  { id: "plant-10", bac_id: "bac-3", nom: "Épinard", varietal: "Géant d'hiver", origine: "graines_achetees", date_semis: "2026-03-10", date_plantation: "", date_recolte: "2026-04-25", date_fin: "2026-06-01", statut: "semis" },
  // ── Pot courgette ──
  { id: "plant-11", bac_id: "bac-4", nom: "Courgette", varietal: "Ronde de Nice", origine: "graines_achetees", date_semis: "2026-04-20", date_plantation: "2026-05-13", date_recolte: "2026-06-25", date_fin: "2026-09-30", statut: "semis" },
  // ── Pot poivrons & aubergine ──
  { id: "plant-12", bac_id: "bac-5", nom: "Poivron", varietal: "Doux d'Espagne", origine: "graines_achetees", date_semis: "2026-01-28", date_plantation: "2026-05-20", date_recolte: "2026-08-01", date_fin: "2026-10-15", statut: "plantule" },
  { id: "plant-13", bac_id: "bac-5", nom: "Aubergine", varietal: "Violette de Florence", origine: "graines_achetees", date_semis: "2026-02-01", date_plantation: "2026-05-20", date_recolte: "2026-08-10", date_fin: "2026-10-15", statut: "plantule" },
];

export const SEED_JOURNAL = [
  { id: "j-1", plant_id: "plant-12", date: "2026-03-20", texte: "Repiqué en godets 8cm après apparition des 2 premières feuilles vraies. Croissance lente mais normale pour les poivrons." },
  { id: "j-2", plant_id: "plant-13", date: "2026-03-22", texte: "Repiqué en godets. Tige fragile, bien soutenir. Besoin de 22°C minimum la nuit." },
  { id: "j-3", plant_id: "plant-1",  date: "2026-02-14", texte: "Semis sous lampe, 25°C. Levée en 6 jours. Semences récupérées saison 2025." },
  { id: "j-4", plant_id: "plant-9",  date: "2026-03-25", texte: "Semis direct en bac, couvert d'un voile P17 la nuit. Levée attendue sous 5-7j." },
];

export const SEED_PROFILE = {
  ville: "Saint-Maur-des-Fossés",
  expo: "Sud-Est",
  notes: "Terrasse du 3e étage, mur en brique côté est qui accumule la chaleur. Protégée du vent dominant (ouest). Arrosage automatique à installer pour l'été.",
};
