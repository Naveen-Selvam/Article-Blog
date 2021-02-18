import React, { useState } from "react";
import search from "../image/search.png";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const { toggleFunc } = props;

  const handleInput = (e) => {
    setSearchText(e.target.value);
    toggleFunc(e.target.value);
  };

  const handleClick = () => {
    setSearchText("");
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        value={searchText}
        onChange={handleInput}
        placeholder="Search by title.."
      />

      <button className="buttonStyle" onClick={handleClick}>
        X
      </button>
    </div>
  );
};

export default Search;
