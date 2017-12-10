import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCampus } from '../reducers/campusesReducer';

class SingleCampusEdit extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      imageUrl: '',
      description: ''
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
    const campusId = Number(this.props.match.params.campusId);
    const campus = this.props.campuses.find(campusElement => campusElement.id === campusId);

    return (
      <div>
        <div className="label">Edit Campus Form</div>
        <form
          className="form-group"
          onSubmit = {(event) => this.props.handleSubmit({
            name: this.state.name || campus.name,
            imageUrl: this.state.imageUrl || campus.imageUrl,
            description: this.state.description || campus.description
          }, campus.id, event)}>
          <div className="field-labels">CampusID:  {campus.id}</div>
          <br />
          <div className="field-labels">campus name</div>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder={campus.name}
              onChange={this.handleChange}
              value={this.state.name}
            />
          <div className="field-labels">image URL</div>
            <input
              className="form-control"
              type="text"
              name="imageUrl"
              placeholder={campus.imageUrl}
              onChange={this.handleChange}
              value={this.state.imageUrl}
            />
          <div className="field-labels">description</div>
            <textarea
              rows="5"
              cols="40"
              wrap="hard"
              className="form-control"
              type="text"
              name="description"
              placeholder={campus.description}
              onChange={this.handleChange}
              value={this.state.description}
            />
          {/* future implementation: add a student directory to be able to edit the campus roster */}
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
      dispatch(editCampus(newState, id, ownProps.history));
    }
  };
}

const SingleCampusEditContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampusEdit);

export default SingleCampusEditContainer;
