import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render () {
    return (
      <nav className="nav">
          <NavLink to="/">
            <button className="nav-button">Campuses</button>
          </NavLink>
          <NavLink to="/students">
            <button className="nav-button">Students</button>
          </NavLink>
        </nav>
    );
  }
}
