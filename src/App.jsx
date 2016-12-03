import React, { Component } from 'react';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    return (
      <div>
        Hello world
        {this.props.children}
      </div>
    );
  }
}
