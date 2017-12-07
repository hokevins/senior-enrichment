import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Navbar extends Component {
  render () {
    return (
      <nav>
        <button>Campuses</button>
        <button>Students</button>
      </nav>
    );
  }
}
