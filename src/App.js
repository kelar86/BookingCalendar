import React, { Component } from 'react';
import './App.css';

import BookingCalendar from './components/BookingCalendar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div><BookingCalendar /></div>       
      </div>    
    );
  }
}

export default App
