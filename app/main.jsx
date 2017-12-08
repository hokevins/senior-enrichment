'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import store from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Root from './components/Root';
import AllStudents from './components/AllStudents';
import SingleCampus from './components/SingleCampus';
import SingleStudent from './components/SingleStudent';

render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Route path="/students" component={AllStudents} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            {/* <Redirect to="/" /> */}
          </Switch>
        <Root />
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
);
