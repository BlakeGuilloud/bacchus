import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  static propTypes = {}

  render() {
    return (
      <ul className="app__navigation">
        <li><Link to="/">bacchus.</Link></li>
        <li><Link to="/button">Button</Link></li>
      </ul>
    );
  }
}
