import React, { useState } from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  const [searchLine, setsearchLine] = useState("");

  const searchLineChangeHandler = (e) => {
    setsearchLine(e.target.value);
  };

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    props.setSearchValue(searchLine);
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Search movie by title:
          <input
            value={props.value}
            type="text"
            className="search-box__form-input"
            placeholder="For example, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
