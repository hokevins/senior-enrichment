import React, { Component } from 'react';
import { connect } from 'react-redux';

import { writeStudent } from '../reducers/allStudentsReducer';

class AddStudent extends Component {
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

  render () {
    return (
      <div>
        <div className="label">Student Enrollment Form</div>
        <form
          className="form-group"
          onSubmit = {(event) => this.props.handleSubmit(this.state, event)}>
          <div className="field-labels">first name</div>
            <input
              required="true"
              className="form-control"
              type="text"
              name="firstName"
              placeholder="e.g. Ru"
              onChange={this.handleChange}
              value={this.state.firstName}
            />
          <div className="field-labels">last name</div>
            <input
              required="true"
              className="form-control"
              type="text"
              name="lastName"
              placeholder="e.g. Paul"
              onChange={this.handleChange}
              value={this.state.lastName}
            />
          <div className="field-labels">email</div>
            <input
              required="true"
              className="form-control"
              type="text"
              name="email"
              placeholder="e.g. ru@paul.com"
              onChange={this.handleChange}
              value={this.state.email}
            />
          <div className="field-labels">GPA</div>
            <input
              className="form-control"
              type="text"
              name="gpa"
              placeholder="e.g 3.5"
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
              {
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
    campuses: storeState.campuses
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleSubmit: function(newState, event) {
      event.preventDefault();
      dispatch(writeStudent(newState, ownProps.history));
    }
  };
}

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddStudent);

export default AddStudentContainer;
