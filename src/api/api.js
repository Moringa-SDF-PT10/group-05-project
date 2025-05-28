const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};

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

export const fetchMoviesByDecade = async (startYear) => {
  const endYear = startYear + 9;
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31`
  );
  const data = await response.json();
  return data.results || [];
};

export const searchDirector = async (name) => {
  const response = await fetch(
    `${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(name)}`
  );
  const data = await response.json();
  return data.results[0] || null;
};

export const getPersonCredits = async (personId) => {
  const response = await fetch(
    `${BASE_URL}/person/${personId}/movie_credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data; 
};
