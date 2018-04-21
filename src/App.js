import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BookingCalendar from './components/BookingCalendar';

import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div className="App">

          <div><BookingCalendar /></div>       

      </div>
      
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
