import React from "react";

import classes from "./Card.module.css";

export class Card extends React.Component {
  render() {
    return <div className={classes.card}>{this.props.children}</div>;
  }
}
