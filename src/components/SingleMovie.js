import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "../contextapi/context";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  // get the movies data from the API
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
        console.log(data.Search)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 800);
    console.log("clear")
    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  return (
    <section className="moive-section">
      <div className="movie-card" >
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink className="back-btn" to="/">Go Back</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
