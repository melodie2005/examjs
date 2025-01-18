// main.js - Gère les interactions principales

import { fetchMovies } from "./api.js";
import { displayMovies } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Charger les films tendance au démarrage
  const movies = await fetchMovies("transformers");
  displayMovies(movies, "movies-container");
});

// Gérer le clic sur le bouton pour charger les films de 2024
document.getElementById("load-2024").addEventListener("click", async () => {
  const movies = await fetchMovies("2024"); // Rechercher les films de 2024
  displayMovies(movies, "movies-container");
});

