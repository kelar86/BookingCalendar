import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookingForm from './components/BookingForm';
import BookingCalendar from './components/BookingCalendar';
import BookingSelectAdress from './components/BookingSelectAdress';

import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props.testStore);
    return (
      <div className="App">
        <div className="Booking-form">
          <p>Выберите адрес:</p>
          <div><BookingSelectAdress doctors={['adress1', 'adress2']} /></div>
          <p>Выберите дату и время:</p>
          <div><BookingCalendar /></div>
          <BookingForm />
         
        </div>

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
