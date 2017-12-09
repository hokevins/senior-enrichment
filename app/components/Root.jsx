import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCampuses, deleteCampus } from '../reducers/campusesReducer';
import { fetchAllStudents } from '../reducers/allStudentsReducer';

class Root extends Component {
  componentDidMount () {
    this.props.loadCampuses();
    this.props.loadAllStudents();
  }

  render () {
    return (
      <div className="root">
        <h2>Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript!</h2>
        <h4>Made with &lt;3 by CTO Kevin Ho / FSA-1710</h4>
        <img src="https://orig00.deviantart.net/0d25/f/2012/092/c/2/floating_city_by_zizk-d4ur9pn.jpg" />
        <div>
          <div className="label">OUR CAMPUSES
            <button className="body-button">Add/Edit</button>
          </div>
          <ul className="campus-list">
          {
            this.props.campuses.map((campus) => {
              return (
                <li key={campus.id}>
                  <NavLink to={`/campuses/${campus.id}`}>
                    <div>
                    {campus.name}
                    <button
                      // disables delete campus button if campus's students exist
                      disabled={!!this.props.allStudents.filter(student => student.campusId == campus.id).length}
                      className="body-button"
                      onClick={() => this.props.handleDelete(campus.id)}>    delete
                    </button>
                    </div>
                    <div>{campus.description}</div>
                    <img src={campus.imageUrl} />
                  </NavLink>
                </li>
              );
            })
          }
          </ul>
        </div>
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

function mapDispatchToProps (dispatch) {
  return {
    loadCampuses: function () {
      dispatch(fetchCampuses());
    },
    loadAllStudents: function () {
      dispatch(fetchAllStudents());
    },
    handleDelete: function(id) {
      dispatch(deleteCampus(id));
    }
  };
}

const RootContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));

export default RootContainer;
