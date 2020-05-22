import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <div className="navBarContainer">
      <Link to="/">
        <h3 className="blockButton">Home</h3>
      </Link>
      <Link to="/students/true">
        <h3 className="blockButton">Graduates</h3>
      </Link>
      <Link to="/students/false">
        <h3 className="blockButton">Students</h3>
      </Link>
      <Link to="/blocks">
        <h3 className="blockButton">Blocks</h3>
      </Link>
      <Link to="/addStudent">
        <h3 className="blockButton">Add Student</h3>
      </Link>
    </div>
  );
}
