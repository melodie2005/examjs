
// ui.js - Gère l'affichage des films dans le DOM

export function displayMovies(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Réinitialise le conteneur
  
    movies.forEach((movie) => {
      // Création de la carte pour chaque film
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
  
      movieElement.innerHTML = `
        <img src="${movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}" alt="${movie.Title}">
        <div class="movie-info">
          <h3>${movie.Title}</h3>
          <p>Année: ${movie.Year}</p>
          <a href="movie.html?title=${encodeURIComponent(movie.Title)}" class="details-link">En savoir plus</a>
        </div>
      `;
  
      // Ajout de la carte au conteneur
      container.appendChild(movieElement);
    });
  }
  
  