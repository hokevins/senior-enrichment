import React, { Component } from 'react';
import { connect } from 'react-redux';

import { writeCampus } from '../reducers/campusesReducer';

class AddCampus extends Component {
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
    return (
      <div>
        <div className="label">Campus Creation Form</div>
        <form
          className="form-group"
          onSubmit = {(event) => this.props.handleSubmit(this.state, event)}>
          <div className="field-labels">campus name</div>
            <input
              required="true"
              className="form-control"
              type="text"
              name="name"
              placeholder="e.g. Saturn"
              onChange={this.handleChange}
              value={this.state.name}
            />
          <div className="field-labels">image URL</div>
            <input
              // future implementation: serve users a default image if none was submitted even though the backend Sequelize DB already has default value
              className="form-control"
              type="text"
              name="imageUrl"
              placeholder="e.g. http://..."
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
              placeholder="e.g. I love Fullstack!"
              onChange={this.handleChange}
              value={this.state.description}
            />
          <br />
          <br />
          <button type="submit" className="body-button">Submit</button>
          {/* future implementation: react component that serves a submission confirmation to users */}
        </form>
      </div>
    );
  }
}

function mapStateToProps (storeState) { // can I get rid of this but still call 'connect' on Line 85?
  return {};
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    handleSubmit: function(newState, event) {
      event.preventDefault();
      dispatch(writeCampus(newState, ownProps.history));
    }
  };
}

const AddCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AddCampus);

export default AddCampusContainer;
