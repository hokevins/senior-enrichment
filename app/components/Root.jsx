import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
// import store, { fetchMessages } from '../store';
// import { fetchChannels } from '../store';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: []
    };
  }

  componentDidMount () {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        this.setState({campuses: campuses});
      });
    // const messagesThunk = fetchMessages();
    // store.dispatch(messagesThunk);
    // store.dispatch(fetchChannels());
  }

  render () {
    return (
      <div>
        <h2 style={{margin: 20}}>Welcome to the Margaret Hamilton Interplanetary Academy of JavaScript!</h2>
        <h4 style={{margin: 20}}>Made with &lt;3 by CTO Kevin Ho / FSA-1710</h4>
        <img src="https://orig00.deviantart.net/0d25/f/2012/092/c/2/floating_city_by_zizk-d4ur9pn.jpg"
          style={{width: "700", height: "400"}} />
        <Navbar />
        <main>
        <ul>
        {
          this.state.campuses.map((campus) => {
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
