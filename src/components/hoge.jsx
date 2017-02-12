import React, { Component, PropTypes } from 'react'

export default class Hoge extends React.Component {
  render() {
    return (<div>
      <div>{this.props.name}: {this.props.count}</div>
      <button onClick={() => this.props.increment()}>増加</button>
      <button onClick={() => this.props.decrement()}>減少</button>
      <input type="text" onChange={(e) => this.props.rename(e.target.value)} value={this.props.name} />
    </div>);
  }
}

