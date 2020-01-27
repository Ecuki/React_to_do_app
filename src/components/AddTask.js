import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    priority: false,
    date: this.minDate
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  handlePrioryty = e => {
    this.setState({
      priority: e.target.checked
    });
  };
  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };
  handleClick = () => {
    console.log(this.state.text);
    const add = this.props.add(
      this.state.text,
      this.state.priority,
      this.state.date
    );
    if (add) {
      this.setState({
        text: "",
        priority: false,
        date: new Date().toISOString().slice(0, 10)
      });
    }
  };
  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    let monthDay = this.minDate.slice(4, 10);
    maxDate = `${maxDate}${monthDay}`;
    return (
      <div className="form">
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          id="important"
          type="checkbox"
          checked={this.state.priority}
          onChange={this.handlePrioryty}
        />
        <label htmlFor="important">Ważne</label>
        <br />
        <label htmlFor="date">Termin wykonania:</label>
        <input
          id="data"
          type="date"
          value={this.state.date}
          max={maxDate}
          min={this.minDate}
          onChange={this.handleDate}
        />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}
export default AddTask;
