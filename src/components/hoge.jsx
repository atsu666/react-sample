import React, { Component, PropTypes } from 'react'

export default class Hoge extends React.Component {
  render() {
    return (<div>
      <div>ほげ: {this.props.count}</div>
      <button onClick={() => this.props.increment()}>増加</button>
    </div>);
  }
}

Hoge.propTypes = {
  count: PropTypes.number.isRequired
};

