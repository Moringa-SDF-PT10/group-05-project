import React from "react";

function MovieCard() {
  return (
    <div>
      MovieCard
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_SX300.jpg"
          className="card-img-top"
          alt="Sample placeholder"
        />
        <div className="card-body">
          <h5 className="card-title">Sample Card</h5>
          <p className="card-text">
            This is a sample Bootstrap card with imported CSS. It demonstrates
            basic card styling from Bootstrap.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
