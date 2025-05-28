import { useState } from 'react';
import { searchDirector } from '../api/api';
import MovieCard from '../components/MovieCard';

const DiscoverByDirector = () => {
  const [director, setDirector] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const person = await searchDirector(director);
      if (!person || !person.id) {
        setError('Director not found.');
        setMovies([]);
        setLoading(false);
        return;
      }

      const creditsRes = await fetch(`https://api.themoviedb.org/3/person/${person.id}/movie_credits?api_key=tmdb_api_key`);
      const credits = await creditsRes.json();
      const directedMovies = credits.crew.filter((m) => m.job === 'Director');
      setMovies(directedMovies);
    } catch (err) {
      setError('Failed to fetch movies.');
    }
    setLoading(false);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-3">Discover Movies by Director</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Director's Name"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3 mb-4" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverByDirector;
