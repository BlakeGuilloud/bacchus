import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  static propTypes = {}

  render() {
    return (
      <ul className="app__navigation">
        <li><Link to="/buttons">buttons</Link></li>
        <li><Link to="/colors">colors</Link></li>
        <li><Link to="/forms">forms</Link></li>
        <li><Link to="/labels">labels</Link></li>
        <li><Link to="/modals">modals</Link></li>
        <li><Link to="/pills">pills</Link></li>
        <li><Link to="/tabs">tabs</Link></li>
      </ul>
    );
  }
}
