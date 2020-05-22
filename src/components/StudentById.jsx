import React, { Component } from "react";
import BlockCard from "./BlockCard";
import axios from "axios";

export default class StudentById extends Component {
  state = {
    student: {
      _id: "5bd0755a064fe4246d4975b9",
      name: "Macey Watsica",
      startingCohort: 11,
      blockHistory: [
        {
          _id: "5bd0755a064fe4246d4975b2",
          number: 1,
          name: "Fundamentals",
          slug: "fun",
        },
        {
          _id: "5bd0755a064fe4246d4975b2",
          number: 1,
          name: "Fundamentals",
          slug: "fun",
        },
        {
          _id: "5bd0755a064fe4246d4975b3",
          number: 2,
          name: "Back End",
          slug: "be",
        },
      ],
      __v: 0,
    },
    isLoading: true,
  };

  componentDidMount() {
    this.getStudentById(this.props.id);
  }

  render() {
    const { name, startingCohort, blockHistory } = this.state.student;
    if (this.state.isLoading) return <h3>Loading...</h3>;
    return (
      <div className="studentById">
        <h3>name: {name}</h3>
        <p>startingCohort: {startingCohort}</p>
        <h4>Block Progress...</h4>
        {blockHistory.map((block, index) => {
          return <BlockCard block={block} key={index} />;
        })}
      </div>
    );
  }

  getStudentById(id) {
    axios
      .get(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
      .then(({ data }) => {
        const studentsData = data.student;
        this.setState({ student: studentsData, isLoading: false });
      });
  }
}
