import React, { Component } from 'react';
import cx from 'classnames';

export default class ColorPalette extends Component {
  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.oneOf(['turq', 'lemon', 'dark', 'grapefruit', 'kiwi']),
  }

  render() {
    const { className, type } = this.props;

    const classes = cx('palette', className, {
      turq: type === 'turq',
      lemon: type === 'lemon',
      dark: type === 'dark',
      grapefruit: type === 'grapefruit',
      kiwi: type === 'kiwi',
    });

    return (
      <div className={classes}>
        {this.props.label}
      </div>
    );
  }
}
