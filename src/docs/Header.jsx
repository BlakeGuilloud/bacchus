import React, { Component } from 'react';

export default class Header extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="app__header">
        <div>
          <img src="https://camo.githubusercontent.com/a0cb0b94d3d816da6567d164f7acec2810c75005/687474703a2f2f63646e2e666c617469636f6e2e636f6d2f706e672f3235362f31383335332e706e67" alt="" />
        </div>
        <div>
          bacchus.
        </div>
      </div>
    );
  }
}
