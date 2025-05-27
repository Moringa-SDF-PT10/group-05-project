
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;  // Replace with your actual TMDb API key
BASE_URL = "https://api.themoviedb.org/3"

//Fetch a list of popular movies from TMDb.
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

//Search for movies based on user input.
export const searchMovies = async (query) => {
    const response = await fetch (`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}

// Fetch detailed information for a single movie

export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

