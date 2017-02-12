import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
// import Hello from '../components/hoge';
import { increment } from '../actions';

class App extends React.Component {
  render() {
    return (<div>
      <span>count: {this.props.count}</span>
      <button onClick={ () => this.props.handleClick() }>増加</button>
    </div>)
  }
}

App.defaultProps = {
  count: 0
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(increment())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
