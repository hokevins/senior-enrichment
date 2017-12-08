import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <h5>Margaret Hamilton Interplanetary Academy of JavaScript</h5>
        <img src="http://4.bp.blogspot.com/-HH4G4NsKj_k/UP9JranvgbI/AAAAAAAAGuM/HawRIKhSi_s/s400/planetribbons.jpg" />
        <NavLink to="/">
          <button className="nav-button">Campuses</button>
        </NavLink>
        <NavLink to="/students">
          <button className="nav-button">Students</button>
        </NavLink>
        <div className="footer-text">Thank you for visiting our site!  Come back soon.</div>
        <div className="footer-text">&copy; 2017 Kevin Ho</div>
      </div>
    );
  }
}
