import { connect } from 'react-redux';
import React from 'react';
import { increment } from '../actions';
import Hoge from '../components/hoge';

class App extends React.Component {
  render() {
    const props = this.props;
    return (<div>
      <Hoge {...props}/>
      <button onClick={() => this.props.handleClick()}>増加</button>
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
  return {
    handleClick: () => {
      dispatch(increment());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
