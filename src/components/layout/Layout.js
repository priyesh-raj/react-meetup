import React from "react";
import { MainNav } from "./MainNav";

import classes from "./Layout.module.css";

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <MainNav />
        <main className={classes.main}>{this.props.children}</main>
      </div>
    );
  }
}
