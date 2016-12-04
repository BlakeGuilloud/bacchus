import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  static displayName = 'Button';

  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    type: React.PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  }

  static defaultProps = {
    type: 'default',
  }

  render() {
    const { children, className, type } = this.props;

    const classes = cx('btn form__group', className, {
      'btn-default': type === 'default',
      'btn-primary': type === 'primary',
      'btn-success': type === 'success',
      'btn-info': type === 'info',
      'btn-warning': type === 'warning',
      'btn-danger': type === 'danger',
    });

    return (
      <button className={classes}>
        {children}
      </button>
    );
  }
}
