import React, { useState, useEffect } from "react";
import "./ListPage.css";

const ListPage = (props) => {
  const [movies, setMovies] = useState([]);

  const { state } = props.location;

  useEffect(() => {
    setMovies(state);
    console.log(state);
  }, [state]);

  return (
    <div className="list-page">
      <h1 className="list-page__title">My List</h1>
      <ul>
        {movies.map((item) => {
          return (
            <li key={item.imdbID} className="movie-items">
              <a
                href={`https://www.imdb.com/title/${item.imdbID}/`}
                rel="noreferrer"
                target="_blank"
              >
                <h3 className="movie-item__title">
                  {item.Title}&nbsp;({item.Year})
                </h3>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPage;
