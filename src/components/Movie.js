import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../contextapi/context";

const imgUrl = "https://via.placeholder.com/200/200";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <section className="movie-page">
      <div className="container grid grid-col-4">
        {movie
          ? movie.map((curMovieElem) => {
              const { imdbID, Title, Poster } = curMovieElem;
              const movieName = Title.substring(0, 15);

              return (
                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                  <div className="card">
                    <div className="card-info">
                      <h2>
                        {movieName.length > 13 ? `${movieName}...` : movieName}
                      </h2>
                      <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                    </div>
                  </div>
                </NavLink>
              );
            })
          : ""}
      </div>
    </section>
  );
};

export default Movie;
