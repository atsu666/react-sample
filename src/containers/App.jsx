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

App.defaultProps = {
  count: 0
};

App.propTypes = {
  count: React.PropTypes.number,
  handleClick: React.PropTypes.func
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
