import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigation extends Component {
  static propTypes = {}

  render() {
    return (
      <ul className="app__navigation">
        <li><Link to="/">bacchus.</Link></li>
        <li><Link to="/buttons">Buttons</Link></li>
        <li><Link to="/colors">Colors</Link></li>
        <li><Link to="/forms">Forms</Link></li>
        <li><Link to="/labels">Labels</Link></li>
        <li><Link to="/modals">Modals</Link></li>
        <li><Link to="/pills">Pills</Link></li>
        <li><Link to="/tabs">Tabs</Link></li>
      </ul>
    );
  }
}
