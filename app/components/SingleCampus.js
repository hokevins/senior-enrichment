import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class SingleCampus extends Component {
  render () {
    // must convert campusId param into number to compare
    const campusId = Number(this.props.match.params.campusId);
    const studentsOfCampus = this.props.allStudents.filter(student => student.campusId === campusId);
    const thisCampus = this.props.campuses.find(campus => campus.id === campusId);

    if (thisCampus) { // fixed async issue initial/later mount
      return (
        <div>
          <div className="label">{thisCampus.name}'s STUDENT DIRECTORY
            <img className="single-campus-img" src={thisCampus.imageUrl} />
          </div>
          <ul className="student-list">
          {
            studentsOfCampus.map((student) => {
              return (
                <li key={student.id}>
                  <NavLink to={`/students/${student.id}`}>
                    <div>Student ID #:  {student.id}</div>
                    <div>Name:  {student.name}</div>
                    <div>Email:  {student.email}</div>
                    <div>GPA:  {student.gpa}</div>
                    <div> >>> Campus: {thisCampus.name}</div>
                  </NavLink>
                </li>
              );
            })
          }
          </ul>
        </div>
      );
    }
  return null; // can also return a simple <div>loading...</div> to let user know that it's loading if it's taking a while
  }
}

function mapStateToProps (storeState) {
  return {
    allStudents: storeState.allStudents,
    campuses: storeState.campuses
  };
}

const SingleCampusContainer = connect(mapStateToProps)(SingleCampus);

export default SingleCampusContainer;
