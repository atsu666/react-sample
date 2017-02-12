import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import Hello from '../components/hello.jsx';
import World from '../components/world.jsx';


const App = () => (
    <div>
        <Hello />
        <World />
    </div>
);



App.propTypes = {
  item: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);