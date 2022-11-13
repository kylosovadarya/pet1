import React from 'react';
import classes from './tealTxt.module.scss';

const TealTxt = ({children}) => {
  return (
    <span className={classes.tealTxt}>{children}</span>
  )
}

export default TealTxt