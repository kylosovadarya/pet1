import React from "react";
import classes from "./searchForm.module.scss";

const SearchForm = () => {
  return (
    <div>
      <form className={classes.searchForm}>
        <select>
          <option selected>All artists</option>
          <option>1</option>
          <option>2</option>
          <option>4</option>
        </select>
        <input placeholder="Search songs, artists..."></input>
        <button>Q</button>
      </form>
    </div>
  );
};

export default SearchForm;
