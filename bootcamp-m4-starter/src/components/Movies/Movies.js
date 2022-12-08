import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./Movies.css";

const Movies = (props) => {
  return (
    <ul className="movies">
      {props.movies.map((movie) => (
        <li className="movies__item" key={movie.imdbID}>
          <MovieItem
            {...movie}
            addMovie={() => props.addMovie(movie)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Movies;