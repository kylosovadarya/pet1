import React from 'react'
import TealTxt from '../../trifles/tealTxt/TealTxt'
import classes from './navbar.module.scss'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
        <div>
            <TealTxt>Chat with me</TealTxt>
            <span>tg: @daryakylosova</span>
            <span>kylosovadaria@icloud.com</span>
        </div>
        <nav>
            <a href="#">Blog</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
        </nav>
    </div>
  )
}

export default Navbar