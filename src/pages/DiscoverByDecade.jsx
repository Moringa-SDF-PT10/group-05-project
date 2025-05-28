import { useState } from 'react';
import { fetchMoviesByDecade } from '../api/api';
import MovieCard from '../components/MovieCard';

const DiscoverByDecade = () => {
  const [decadeStart, setDecadeStart] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    const year = parseInt(decadeStart);
    if (isNaN(year) || year % 10 !== 0) {
      setError('Please enter a valid starting year of a decade (e.g. 1990)');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const results = await fetchMoviesByDecade(year);
      setMovies(results);
    } catch (err) {
      setError('Failed to fetch movies.');
    }
    setLoading(false);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-3">Discover Movies by Decade</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Decade Start (e.g., 1980)"
          value={decadeStart}
          onChange={(e) => setDecadeStart(e.target.value)}
        />
        <button className="btn btn-success" onClick={handleSearch}>
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

export default DiscoverByDecade;
