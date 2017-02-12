import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import * as Actions from '../actions';
import Hoge from '../components/hoge';

class App extends React.Component {
  render() {
    const props = this.props;
    return (<div>
      <Hoge {...props}/>
      <button onClick={() => this.props.increment()}>増加</button>
    </div>);
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
