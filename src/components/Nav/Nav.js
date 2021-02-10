import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

class Nav extends Component {
  render() {
    return (
      <nav className={classes.nav}>
        <ul className={classes.menuList}>
          <li className={classes.item}>
            <NavLink to="/profile" activeClassName={classes.active} className={classes.link}>Profile</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/dialogs" activeClassName={classes.active} className={classes.link}>Messages</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/news" activeClassName={classes.active} className={classes.link}>News</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/music" activeClassName={classes.active} className={classes.link}>Music</NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/settings" activeClassName={classes.active} className={classes.link}>Settings</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
