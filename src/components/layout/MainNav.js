import React from "react";
import { Link } from "react-router-dom";

import classes from "./MainNav.module.css";

export class MainNav extends React.Component {
  render() {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>All Meetups</Link>
            </li>
            <li>
              <Link to={"/favourites"}>Favourites</Link>
            </li>
            <li>
              <Link to={"/new-meetup"}>New Meetups</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
