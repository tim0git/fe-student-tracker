import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import StudentsList from "./components/StudentsList";
import axios from "axios";
import AddStudent from "./components/AddStudent";
import BlockList from "./components/BlockList";
import StudentById from "./components/StudentById";

export default class App extends Component {
  state = {
    students: [
      {
        _id: "5ea999d9b35aac7b622bada2",
        name: "Mozell Cassin",
        startingCohort: 1,
        currentBlock: "grad",
      },
      {
        _id: "5ea999d9b35aac7b622bada3",
        name: "Reynold Muller",
        startingCohort: 1,
        currentBlock: "grad",
      },
    ],
    isLoading: true,
    isDeleted: [],
  };

  progressStudent = (_id) => {
    axios
      .patch(
        `https://nc-student-tracker.herokuapp.com/api/students/${_id}?progress=true`
      )
      .then(({ data }) => {
        console.log(data);
        this.setState((currentState) => {
          return {
            students: currentState.students.filter((student) => {
              return student._id !== _id;
            }),
          };
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <NavBar />
        <Router>
          <StudentsList
            path="/students/:graduated"
            fetchStudents={this.fetchStudents}
            students={this.state.students}
            deleteStudent={this.deleteStudent}
            isDeleted={this.state.isDeleted}
          />
          <BlockList path="/blocks" />
          <StudentsList
            path="/blocks/:block"
            fetchStudents={this.fetchStudents}
            students={this.state.students}
            progressStudent={this.progressStudent}
            deleteStudent={this.deleteStudent}
            isDeleted={this.state.isDeleted}
          />
          <AddStudent path="/addStudent" />
          <StudentById path="/student/:id" />
        </Router>
      </div>
    );
  }

  fetchStudents = (graduated, block) => {
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students", {
        params: { graduated: graduated, block: block },
      })
      .then(({ data }) => {
        const studentsData = data.students;
        this.setState({ students: studentsData, isLoading: false });
      });
  };

  deleteStudent = (id) => {
    axios
      .delete(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
      .then((data) => {
        this.setState((currentState) => {
          return {
            students: currentState.students.filter((student) => {
              return student._id !== id;
            }),
            isDeleted: currentState.students.filter((student) => {
              return student._id === id;
            }),
          };
        });
      });
  };
}
