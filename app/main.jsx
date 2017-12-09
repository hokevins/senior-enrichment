'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Root from './components/Root';
import AllStudents from './components/AllStudents';
import SingleCampus from './components/SingleCampus';
import SingleStudent from './components/SingleStudent';
import AddStudent from './components/AddStudent';
import AddCampus from './components/AddCampus';
import SingleStudentEdit from './components/SingleStudentEdit';

render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route exact path="/students/add" component={AddStudent} />
            <Route exact path="/students/:studentId/edit" component={SingleStudentEdit} />
            <Route exact path="/students/:studentId" component={SingleStudent} />
            <Route path="/students" component={AllStudents} />
            <Route exact path="/campuses/add" component={AddCampus} />
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
          </Switch>
        <Root />
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
);
