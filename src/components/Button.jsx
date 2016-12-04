import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  static displayName = 'Button';

  static propTypes = {
    block: React.PropTypes.bool,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    type: React.PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  }

  static defaultProps = {
    block: false,
    disabled: false,
    type: 'default',
  }

  handleClick = (event) => {
    event.preventDefault();

    if (this.props.onClick && typeof this.props.onClick === 'function') this.props.onClick();
  }

  render() {
    const { block, children, className, disabled, type } = this.props;

    const classes = cx('btn form__group', className, {
      'btn-default': type === 'default',
      'btn-primary': type === 'primary',
      'btn-success': type === 'success',
      'btn-info': type === 'info',
      'btn-warning': type === 'warning',
      'btn-danger': type === 'danger',
      'btn-block': block,
      'btn-disabled': disabled,
    });

    return (
      <button onClick={this.handleClick} className={classes}>
        {children}
      </button>
    );
  }
}
