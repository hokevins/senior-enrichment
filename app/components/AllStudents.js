import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class AllStudents extends Component {
  render () {
    return (
      <div>
        <div className="label">STUDENT DIRECTORY
          <NavLink to={'/students/add'}>
            <button className="body-button">Add Student</button>
          </NavLink>
        </div>
        <ul className="student-list">
        {
          this.props.allStudents.map((student) => {
            return (
              <li key={student.id}>
                <NavLink to={`/students/${student.id}`}>
                  <div>Student ID #:  {student.id}</div>
                  <div>Name:  {student.name}</div>
                  <div>Email:  {student.email}</div>
                  <div>GPA:  {student.gpa}</div>
                </NavLink>
                <NavLink to={`campuses/${student.campusId}`}>
                  <div> >>> Campus: {this.props.campuses.find(campus => campus.id === student.campusId).name}</div>
                </NavLink>
                <NavLink to={'/students/edit'}>
                  <button className="body-button"> edit {student.firstName} </button>
                </NavLink>
                <NavLink to={'/students'}>
                  <button className="body-button"> delete {student.firstName} </button>
                </NavLink>
              </li>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

function mapStateToProps (storeState) {
  return {
    allStudents: storeState.allStudents,
    campuses: storeState.campuses
  };
}

const AllStudentsContainer = connect(mapStateToProps)(AllStudents);

export default AllStudentsContainer;
