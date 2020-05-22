import React, { Component } from "react";
import axios from "axios";

export default class AddStudent extends Component {
  state = {
    name: "",
    startingCohort: 0,
    isCreated: false,
  };

  render() {
    return (
      <div>
        <h5>Add new Student</h5>
        {this.state.isCreated && <h6>Is Created....</h6>}
        <form onSubmit={this.createUser} className="addStudentForm">
          <label className="inputName">
            <input
              type="text"
              label="name"
              value={this.state.name}
              onChange={this.setName}
              placeholder="Name"
            />
          </label>
          <label className="inputCohort">
            <input
              type="number"
              label="startingCohort"
              value={this.state.startingCohort}
              onChange={this.setCohort}
  
            />
          </label>
          <label className="inputSubmitt">
            <button type="submit">Submitt</button>
          </label>
        </form>
      </div>
    );
  }

  setName = (e) => {
    let nameChange = e.target.value;
    this.setState({ name: nameChange });
  };

  setCohort = (e) => {
    let cohortChange = e.target.value;
    this.setState({ startingCohort: cohortChange });
  };

  createUser = (event) => {
    event.preventDefault();
    console.log("submitted");
    console.log(this.state);
    const { name, startingCohort } = this.state;
    axios
      .post("https://nc-student-tracker.herokuapp.com/api/students", {
        name,
        startingCohort,
      })
      .then((result) => {
        this.setState({ isCreated: true, name: "", startingCohort: 0 });
      });
  };
}
