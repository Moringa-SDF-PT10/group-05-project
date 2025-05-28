import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import {
  getPopularMovies,
  getTrendingMovies,
  getNowPlayingMovies,
} from "../api/api";

function Home() {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recentMovies, setRecentMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        // We will fetch all movies required
        const [popular, trending, nowPlaying] = await Promise.all([
          getPopularMovies(),
          getTrendingMovies(),
          getNowPlayingMovies(),
        ]);
        console.log("Movie API responses:", { popular, trending, nowPlaying });

        setFeaturedMovies(popular.slice(0, 8));
        setTrendingMovies(trending);
        setRecentMovies(nowPlaying);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <Carousel fade className="hero-carousel mb-5">
        {featuredMovies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            >
              <div className="hero-content">
                <h1 style={{ color: "white" }}>{movie.title}</h1>
                <p style={{ color: "white" }}>
                  {movie.release_date?.split("-")[0]} • {movie.vote_average} ⭐
                </p>
                <div className="hero-buttons">
                  <button className="btn btn-danger me-2">Play Now</button>
                  <button className="btn btn-outline-light">+ Watchlist</button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container>
        {/* Trending Now Section */}
        <section className="mb-5">
          <h2 className="section-title">Trending Now</h2>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {trendingMovies?.map((movie) => (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </section>

        {/* Recently Added Section */}
        <section className="mb-5">
          <h2 className="section-title">Now Playing</h2>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {recentMovies?.map((movie) => (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default Home;
