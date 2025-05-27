import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import MovieCard from "../components/MovieCard";

function Home() {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    const fetchMovies = () => {
      //TODO I will use  Harriet movie card
      const mockMovies = [
        {
          id: 1,
          title: "Solo Levelling",
          year: 2016,
          genre: "Series",
          poster:
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/04/solo-leveling-jinwoo-rematch-with-the-statue-of-god.JPG",
        },
        {
          id: 2,
          title: "Solo Levelling",
          year: 2016,
          genre: "Series",
          poster:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/05/sung-jinwoo-in-front-of-the-monarchs-of-solo-leveling.jpg",
        },
        {
          id: 3,
          title: "Solo Levelling",
          year: 2016,
          genre: "Series",
          poster:
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/05/solo-leveling-jinwoo-featured.jpg",
        },
        {
          id: 4,
          title: "Solo Levelling",
          year: 2016,
          genre: "Series",
          poster:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/04/jinwoo-shadow-army-featured-image.png",
        },
        {
          id: 5,
          title: "Solo Levelling",
          year: 2016,
          genre: "Series",
          poster:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/05/sung-jinwoo-in-front-of-the-monarchs-of-solo-leveling.jpg",
        },
        {
          id: 6,
          title: "Solo Levelling",
          year: 2016,
          genre: "Series",
          poster:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/05/sung-jinwoo-in-front-of-the-monarchs-of-solo-leveling.jpg",
        },
      ];

      setFeaturedMovies(mockMovies.slice(0, 3));
      setTrendingMovies(mockMovies.slice(0, 6));
      setRecentMovies(mockMovies.slice(3, 6));
    };

    fetchMovies();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <Carousel fade className="hero-carousel mb-5">
        {featuredMovies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${movie.poster})`,
              }}
            >
              <div className="hero-content">
                <h1>{movie.title}</h1>
                <p>
                  {movie.year} • {movie.genre}
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
            {trendingMovies.map((movie) => (
              <Col key={movie.id}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </section>

        {/* Recently Added Section */}
        <section className="mb-5">
          <h2 className="section-title">Recently Added</h2>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
            {recentMovies.map((movie) => (
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
