import React, { Component } from "react";
import database from "./data";
import Card from "./Card";
import CardM from "./CardM";

class App extends Component {
  constructor() {
    super();

    this.state = {
      day: "mon",
      data: database.mon,
    };
  }

  handleDay = (e) => {
    this.setState({ day: e.target.value, data: database[e.target.value] });
  };

  handle = () => {
    this.setState({ data: database[this.state.day] });
    localStorage.setItem("db", JSON.stringify(database));
  };

  render() {
    const procc = this.state.data.map((x) => (
      <Card
        key={`${this.state.day}${this.state.data.indexOf(x)}`}
        id={this.state.data.indexOf(x)}
        time={x.time}
        link={x.link}
        day={this.state.day}
        handle={this.handle}
      />
    ));

    return (
      <div
        className="container
      has-background-white-bis pb-5"
      >
        <div
          className="navbar
      has-background-black-ter 
      p-4 is-flex
      is-justify-content-space-between"
        >
          <div className="is-size-4 has-text-grey-lighter has-text-weight-bold">
            Meeting Scheduler
          </div>
          <div className="select">
            <select
              name="Day"
              id="day"
              value={this.state.day}
              onChange={this.handleDay}
            >
              <option value="mon">Monday</option>
              <option value="tue">Tuesday</option>
              <option value="wed">Wednesday</option>
              <option value="thu">Thursday</option>
              <option value="fri">Friday</option>
              <option value="sat">Saturday</option>
              <option value="sun">Sunday</option>
            </select>
          </div>
        </div>
        <div className="space">
          {procc}
          <CardM
            key={-1}
            id={-1}
            time="00:00"
            link={""}
            day={this.state.day}
            handle={this.handle}
          />
        </div>
      </div>
    );
  }
}

export default App;
