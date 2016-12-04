import React, { Component } from 'react';
import { Header, Navigation } from './docs';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__content">
          {this.props.children}
          <Navigation />
        </div>
      </div>
    );
  }
}
