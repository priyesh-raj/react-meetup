import React from "react";
import { Card } from "../ui/Card";

import classes from "./MeetupItem.module.css";

export class MeetupItem extends React.Component {
  render() {
    return (
      <div className={classes.item}>
        <Card>
          <figure className={classes.image}>
            <img src={this.props.item.image} alt="" />
          </figure>
          <section className={classes.content}>
            <h3>{this.props.item.title}</h3>
            <address>{this.props.item.address}</address>
            <p>{this.props.item.description}</p>
          </section>
          <section className={classes.actions}>
            <button>To Favourites</button>
          </section>
        </Card>
      </div>
    );
  }
}
