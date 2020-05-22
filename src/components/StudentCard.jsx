import React from "react";
import { Link } from "@reach/router";

export default function StudentCard({
  student,
  block,
  progressStudent,
  deleteStudent,
}) {
  const { _id, name, startingCohort, currentBlock } = student;
  return (
    <div className="studentCard">
      <h5>Student name: {name}</h5>
      <p>starting cohort: {startingCohort}</p>
      <p>currentBlock: {currentBlock}</p>
      {block && (
        <button className="progressStudentButton" onClick={() => progressStudent(_id)}>Progress Student</button>
      )}

      <Link to={`/student/${_id}`}>
        <button className="info">See More Info</button>
      </Link>
      <button className="delete" onClick={() => deleteStudent(_id)}>
        Delete Student
      </button>
    </div>
  );
}
