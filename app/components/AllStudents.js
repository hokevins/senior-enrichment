import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { deleteStudent } from '../reducers/allStudentsReducer';

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
                  <div>StudentID:  {student.id}</div>
                  <div>Name:  {student.name}</div>
                  <div>Email:  {student.email}</div>
                  <div>GPA:  {student.gpa}</div>
                </NavLink>
                <NavLink to={`campuses/${student.campusId}`}>
                  <div> >>> Campus: {this.props.campuses.find(campus => campus.id === student.campusId).name}</div>
                </NavLink>
                <NavLink to={`/students/${student.id}/edit`}>
                  <button className="body-button"> edit {student.firstName} </button>
                </NavLink>
                {/* future implementation: serve users an 'are you sure' confirmation alert before deletion */}
                <button
                  className="body-button"
                  onClick={() => this.props.handleDelete(student.id)}> delete {student.firstName}
                </button>
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

function mapDispatchToProps (dispatch) {
  return {
    handleDelete: function(id) {
      dispatch(deleteStudent(id));
    }
  };
}

const AllStudentsContainer = connect(mapStateToProps, mapDispatchToProps)(AllStudents);

export default AllStudentsContainer;
