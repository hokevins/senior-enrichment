import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editStudent } from '../reducers/allStudentsReducer';

class SingleStudentEdit extends Component {
  constructor () {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      campusId: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  // future implementation:  make validations for inputs and serve up custom warning messages to user for non-valid input

  render () {
    const studentId = Number(this.props.match.params.studentId);
    const thisStudent = this.props.allStudents.find(student => student.id === studentId);

    return (
      <div>
        <div className="label">Edit Student Form</div>
        <form
          className="form-group"
          onSubmit = {(event) => this.props.handleSubmit({
            firstName: this.state.firstName || thisStudent.firstName,
            lastName: this.state.lastName || thisStudent.lastName,
            email: this.state.email || thisStudent.email,
            gpa: this.state.gpa || thisStudent.gpa,
            campusId: this.state.campusId || thisStudent.campusId
          }, thisStudent.id, event)}>
          <div className="field-labels">StudentID:  {thisStudent.id}</div>
          <br />
          <div className="field-labels">first name</div>
            <input
              className="form-control"
              type="text"
              name="firstName"
              placeholder={thisStudent.firstName}
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          <div className="field-labels">last name</div>
            <input
              className="form-control"
              type="text"
              name="lastName"
              placeholder={thisStudent.lastName}
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          <div className="field-labels">email</div>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder={thisStudent.email}
              onChange={this.handleChange}
              value={this.state.email}
            />
          <div className="field-labels">GPA</div>
            <input
              className="form-control"
              type="text"
              name="gpa"
              placeholder={thisStudent.gpa}
              onChange={this.handleChange}
              value={this.state.gpa}
            />
          <div className="field-labels">select a campus</div>
            <select
              className="form-control"
              type="text"
              name="campusId"
              onChange={this.handleChange}
              value={this.state.campusId}
            >
              { // future implementation: pre-select correct campus for student's associated campusId
                this.props.campuses.map((campus) => {
                  return <option key={campus.id} value={campus.id}>{campus.name}</option>;
                })
              }
            </select>
          <br />
          <br />
          <button type="submit" className="body-button">Submit</button>
          {/* future implementation: react component that serves a submission confirmation to users */}
        </form>
      </div>
    );
  }
}

function mapStateToProps (storeState) {
  return {
    campuses: storeState.campuses,
    allStudents: storeState.allStudents
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleSubmit: function(newState, id, event) {
      event.preventDefault();
      dispatch(editStudent(newState, id, ownProps.history));
    }
  };
}

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(SingleStudentEdit);

export default AddStudentContainer;
