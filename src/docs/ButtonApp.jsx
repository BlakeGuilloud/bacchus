import React, { Component } from 'react';
import { Button } from '../components';

export default class ButtonApp extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="info">Info</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
      </div>
    );
  }
}
