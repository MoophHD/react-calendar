import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Calendar from './Calendar'

class App extends Component {
  render() {
    return (
      <div 
        className="app">
        <h1>React Calendar</h1>
        <Calendar />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     score: state.score
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(pageActions, dispatch), // eslint-disable-line
//     dtActions : bindActionCreators(dtActions, dispatch)
//   }
// }


export default connect(null, null)(App);

