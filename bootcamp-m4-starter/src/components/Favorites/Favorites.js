import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = (props) => {
  const [title, setTitle] = useState("New List");
  const [movies, setMovies] = useState([]);
  // const [save, setSave] = useState(false);

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (!props.save) {
      setMovies(props.movies);
    }
  }, [props.movies, props.save]);

  // const saveFavorites = () => {
  //   if (props.movies.length === 0) {
  //     setSave(false);
  //   } else {
  //     setSave(true);
  //   }
  // };

  return (
    <div className="favorites">
      <input
        value={title}
        type="text"
        placeholder="Give name to list"
        onChange={changeHandler}
        className="favorites__name"
        disabled={props.save}
      />
      <ul className="favorites__list">
        {movies &&
          movies.map((item) => {
            return (
              <div className="fav_list_items" key={item.imdbID}>
                <li>
                  {item.Title} ({item.Year})
                </li>
                <button
                  className="del-button"
                  onClick={() => props.deleteFavoriteMovie(item)}
                  disabled={props.save}
                >
                  X
                </button>
              </div>
            );
          })}
      </ul>
      {!props.save ? (
        <button
          type="button"
          disabled={!title}
          className="favorites__save"
          onClick={props.saveFavorites}
        >
          Save list
        </button>
      ) : (
        <Link
          to={{
            pathname: "/list/:id",
            state: movies,
          }}
        >
          Go to the List
        </Link>
      )}
    </div>
  );
};

export default Favorites;