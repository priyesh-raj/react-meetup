import React from "react";
import { Card } from "../ui/Card";

import classes from "./NewMeetupForm.module.css";

export class NewMeetupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        title: "",
        imgUrl: "",
        address: "",
        description: "",
      },
    };
    this.formRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(eve) {
    eve.preventDefault();
    this.props.onAddMeetup(this.state.formData);
  }

  handleInputChange(eve, key) {
    let newState = { ...this.state };
    newState.formData[key] = eve.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <Card>
        <form
          className={classes.form}
          onSubmit={this.handleSubmit}
          ref={this.formRef}
        >
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input
              type="text"
              id="title"
              onChange={(eve) => this.handleInputChange(eve, "title")}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input
              type="url"
              id="image"
              onChange={(eve) => this.handleInputChange(eve, "imgUrl")}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              onChange={(eve) => this.handleInputChange(eve, "address")}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              rows="5"
              id="description"
              onChange={(eve) => this.handleInputChange(eve, "description")}
              required
            />
          </div>
          <div className={classes.actions}>
            <button type="Submit">Add Meetup</button>
          </div>
        </form>
      </Card>
    );
  }
}
