import React, { Component } from 'react';
import { Button } from '../components';
import { Props } from './app-components';

export default class ButtonApp extends Component {
  static propTypes = {}
  handleClick = () => {
    console.log('clicked');
  }

  render() {
    const ButtonProps = [
      {
        prop: 'block',
        type: 'bool',
      },
      {
        prop: 'children',
        type: 'node',
      },
      {
        prop: 'className',
        type: 'string',
      },
      {
        prop: 'disabled',
        type: 'bool',
      },
      {
        prop: 'onClick',
        type: 'func',
      },
      {
        prop: 'type',
        type: 'oneOf([default, primary, success, info, warning, danger])',
      },
    ];

    return (
      <div>
        <h3>buttons</h3>
        <Props label="Button Props" props={ButtonProps} />
        <Button onClick={this.handleClick} type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="success">Success</Button>
        <Button type="info">Info</Button>
        <Button type="warning">Warning</Button>
        <Button type="danger">Danger</Button>
        <br />
        <Button disabled onClick={this.handleClick} type="default">Default</Button>
        <Button disabled type="primary">Primary</Button>
        <Button disabled type="success">Success</Button>
        <Button disabled type="info">Info</Button>
        <Button disabled type="warning">Warning</Button>
        <Button disabled type="danger">Danger</Button>
      </div>
    );
  }
}
