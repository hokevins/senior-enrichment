import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class SingleStudent extends Component {
  render () {
    // must convert studentId param into number to compare
    const studentId = +(this.props.match.params.studentId);
    const thisStudent = this.props.allStudents[studentId - 1];
    const thisCampus = this.props.campuses[thisStudent.campusId - 1];

    if (thisStudent && thisCampus) { // fixed async issue initial/later mount
      return (
        <div>
          <div className="label">{thisStudent.name}'s STUDENT PROFILE</div>
          <ul className="student-list">
            <li>
              <NavLink to={`/campuses/${thisStudent.campusId}`}>
                <div>Student ID #:  {thisStudent.id}</div>
                <div>Name:  {thisStudent.name}</div>
                <div>Email:  {thisStudent.email}</div>
                <div>GPA:  {thisStudent.gpa}</div>
                <div> >>> Campus: {thisCampus.name}</div>
              </NavLink>
            </li>
          </ul>
        </div>
      );
    }
  return null;
  }
}

function mapStateToProps (storeState) {
  return {
    allStudents: storeState.allStudents,
    campuses: storeState.campuses
  };
}

const SingleStudentContainer = connect(mapStateToProps)(SingleStudent);

export default SingleStudentContainer;
