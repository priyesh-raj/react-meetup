import React from "react";
import { MeetupItem } from "./MeetupItem";

import classes from "./MeetupList.module.css";

export function MeetupList(props) {
  return (
    <section className={classes.list}>
      {props.listItems.map((ele) => (
        <MeetupItem item={ele} key={ele.id} />
      ))}
    </section>
  );
}
