import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campusesReducer';
import Navbar from './Navbar';
// import store, { fetchMessages } from '../store';
// import { fetchChannels } from '../store';

class Root extends Component {
  componentDidMount () {
    this.props.loadCampuses();
  }
  render () {
    return (
      <div>
        <h2 style={{margin: 20}}>Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript!</h2>
        <h4 style={{margin: 20}}>Made with &lt;3 by CTO Kevin Ho / FSA-1710</h4>
        <img src="https://orig00.deviantart.net/0d25/f/2012/092/c/2/floating_city_by_zizk-d4ur9pn.jpg"
          style={{width: '700', height: '400'}} />
        <Navbar />
        <main>
        <ul>
        {
          this.props.campuses.map((campus) => {
            return (
              <li key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                  <span>{campus.name}</span>
                  <div>{campus.description}</div>
                  <img src={campus.imageUrl} />
                </NavLink>
              </li>
            );
          })
        }
        </ul>
          {/*}
          <Switch>
            <Route path="/new-channel" component={NewChannelEntry} />
            <Route path="/channels/:channelId" component={MessagesList} />
            <Redirect to="/channels/1" />
          </Switch>
        */}
        </main>
      </div>
    );
  }
}

function mapStateToProps (storeState) {
  return {
    campuses: storeState.campuses
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadCampuses: function () {
      dispatch(fetchCampuses());
    }
  };
}

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);

export default RootContainer;
