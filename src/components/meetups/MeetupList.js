import React from "react";
import { MeetupItem } from "./MeetupItem";

import classes from "./MeetupList.module.css";

export class MeetupList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <section className={classes.list}>
        {this.props.listItems.map((ele) => (
          <MeetupItem item={ele} key={ele.id} />
        ))}
      </section>
    );
  }
}
