import React, { Component } from "react";
import StudentCard from "./StudentCard";
import BlockList from "./BlockList";

export default class StudentsList extends Component {
  componentDidMount() {
    const { graduated, block } = this.props;
    this.props.fetchStudents(graduated, block);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.graduated !== this.props.graduated ||
      prevProps.block !== this.props.block
    ) {
      const { graduated, block } = this.props;
      this.props.fetchStudents(graduated, block);
    }
  }
  render() {
    if (this.props.isLoading) return <h4>Loading...</h4>;
    return (
      <>
        <div className="studentListContainer">
          <h4>Students list</h4>
          {!this.props.block && (
            <h5>Total nunber of students: {this.props.students.length}</h5>
          )}
          {this.props.isDeleted.length > 0 && (
            <p>Delted: {this.props.isDeleted[0].name}</p>
          )}
          {this.props.block && (
            <h5>Total Number of Students:{this.props.students.length}</h5>
          )}
          {this.props.path.startsWith("/block") && <BlockList />}
          <ul className="studentCardListUL">
            {this.props.students.map((student) => {
              return (
                <StudentCard
                  student={student}
                  key={student._id}
                  block={this.props.block}
                  progressStudent={this.props.progressStudent}
                  deleteStudent={this.props.deleteStudent}
                />
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
