import React from "react";
import HeaderMenu from "../headerMenu/HeaderMenu";
import Navbar from "../navbar/Navbar";
import SearchBlock from "../searchBlock/SearchBlock";
import classes from "./header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <Navbar />
      <SearchBlock />
      <HeaderMenu />
    </div>
  );
};

export default Header;
