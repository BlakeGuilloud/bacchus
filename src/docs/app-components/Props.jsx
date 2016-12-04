import React, { Component } from 'react';

export default class Props extends Component {
  static displayName = Props;

  static propTypes = {
    label: React.PropTypes.string,
    props: React.PropTypes.array,
  }

  static defaultProps = {
    label: 'Props',
    props: [],
  }

  render() {
    const { label, props } = this.props;

    return (
      <div className="app__props">
        <label htmlFor="props">{label}</label>
        <hr />
        {props.map((prop, idx) => {
          return (
            <div key={idx}>
              <b>{prop.prop}:</b>&nbsp;
              <span>{prop.type}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
