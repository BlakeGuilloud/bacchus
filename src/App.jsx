import React, { Component } from 'react';
import { Header, Navigation } from './docs';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="col-3 kiwi">apple</div>
          <div className="col-3 lemon">apple</div>
          <div className="col-3 col-offset-3 kiwi">apple</div>
        </div>
        <Header />
        <div className="app__content">
          {this.props.children}
          <Navigation />
        </div>
      </div>
    );
  }
}
