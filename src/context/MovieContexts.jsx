import { createContext, useEffect, useState, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const getStored = (key) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  };

  const [favorites, setFavorites] = useState(() => getStored("favorites"));
  const [watchlist, setWatchlist] = useState(() => getStored("watchlist"));

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Favorites Logic
  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  // Watchlist Logic
  const addToWatchlist = (movie) =>
    setWatchlist((prev) => [...prev, movie]);

  const removeFromWatchlist = (movieId) =>
    setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId));

  const isInWatchlist = (movieId) =>
    watchlist.some((movie) => movie.id === movieId);

  const clearWatchlist = () => setWatchlist([]);

  // ✅ New: Update movie in watchlist
  const updateWatchlistMovie = (movieId, updatedFields) => {
    setWatchlist((prev) =>
      prev.map((movie) =>
        movie.id === movieId ? { ...movie, ...updatedFields } : movie
      )
    );
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearFavorites,

    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    clearWatchlist,

    updateWatchlistMovie, // ✅ Expose this in context
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
