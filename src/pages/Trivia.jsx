import React, { useState, useEffect } from "react";
import {
  getPopularMovies,
  getTrendingMovies,
  getNowPlayingMovies,
} from "../api/api";

function Trivia() {
  const [movies, setMovies] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        const filteredMovies = trendingMovies
          .filter((movie) => movie.overview && movie.overview.trim() !== "")
          .slice(0, 10);

        if (filteredMovies.length < 10) {
          setError("Not enough movies with overviews available");
          return;
        }

        setMovies(filteredMovies);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch movies");
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleAnswerSubmit = (e) => {
    e.preventDefault();

    const correctAnswer = movies[currentQuestion].title.toLowerCase();
    const userGuess = userAnswer.toLowerCase();

    if (userGuess === correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < movies.length) {
      setCurrentQuestion(nextQuestion);
      setUserAnswer("");
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswer("");
  };

  if (isLoading) {
    return (
      <div className="container trivia-page py-5 text-center">
        <h1>Loading movie trivia...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container trivia-page py-5 text-center">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container trivia-page py-5">
      <h1 className="mb-4">Movie Trivia</h1>

      {showScore ? (
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Quiz Completed!</h5>
            <p className="card-text">
              Your score: {score} out of {movies.length}
            </p>
            <button className="btn btn-primary" onClick={resetQuiz}>
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Question {currentQuestion + 1}/{movies.length}
            </h5>
            <p className="card-text mb-4">
              <strong>Movie Overview:</strong>{" "}
              {movies[currentQuestion].overview}
            </p>

            <form onSubmit={handleAnswerSubmit}>
              <div className="form-group mb-3">
                <label>What movie is this?</label>
                <input
                  type="text"
                  className="form-control"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter movie title"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit Answer
              </button>
            </form>

            <div className="mt-3">
              <small className="text-muted">
                Hint: The movie was released in{" "}
                {new Date(movies[currentQuestion].release_date).getFullYear()}
              </small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Trivia;
