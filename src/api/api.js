const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch a list of popular movies from TMDb.
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

// Search for movies based on user input.
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};

// Fetch detailed information for a single movie
export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const getTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results || [];
};

export const getNowPlayingMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results || [];
};

// 🔍 Search for a director by name
export const searchDirector = async (name) => {
  const response = await fetch(
    `${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(name)}`
  );
  const data = await response.json();
  return data.results?.[0] || null; // Return the first match or null
};

// 🎬 Get directed movies by a person ID
export const getDirectedMovies = async (personId) => {
  const response = await fetch(
    `${BASE_URL}/person/${personId}/movie_credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.crew?.filter((movie) => movie.job === "Director") || [];
};
