const API_KEY ="d7c852c4";
const BASE_API_URL="https://www.omdbapi.com/?apikey=d7c852c4";

// Fonction pour récupérer les films via une requête API
export async function fetchMovies(query) {
    try {
      const response = await fetch(`${BASE_API_URL}&s=${query}`);
      const data = await response.json();
  
      // Vérifiez si la réponse est valide
      if (data.Response === "True") {
        return data.Search; // Renvoie la liste des films
      } else {
        console.error("Erreur de l'API :", data.Error);
        return [];
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
      return [];
    }
  }


  