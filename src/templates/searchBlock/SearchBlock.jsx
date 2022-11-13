import React from "react";
import SearchForm from "../../components/searchForm/SearchForm";
import classes from "./searchBlock.module.scss";

const SearchBlock = () => {
  return (
    <div className={classes.searchBlock}>
      <h1>~(о_о ~) (~ o_o)~</h1>
      <SearchForm />
      <div className={classes.btns}>
        <button>j</button>
        <button>a</button>
      </div>
    </div>
  );
};

export default SearchBlock;
