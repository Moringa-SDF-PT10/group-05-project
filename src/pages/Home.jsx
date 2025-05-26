import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div>
      <Navigation />
      <div className="md">Welcome</div>
      <div className="row">
        <div className="col-md-3">
          <MovieCard />
        </div>
        <div className="col-md-3">
          <MovieCard />
        </div>
        <div className="col-md-3">
          <MovieCard />
        </div>
        <div className="col-md-3">
          <MovieCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
