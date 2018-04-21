
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import BookingTime from './BookingTime';
import BookingForm from './BookingForm';
import BookingSelectAdress from './BookingSelectAdress';

import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/ru'


class BookingCalendar extends Component {
    constructor (props) {
      super(props)
      this.state = {
        selectedDate: moment(),
        selectAdress: ['adress1', 'adress2'],
        slots: ["10:00", "10:15", "10:30", "10:45"],

      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(date) {
      this.setState({
        selectedDate: date
      });      
    }

  
    render() {
      return <div>
        <p>Выберите адрес:</p>
          <div><BookingSelectAdress doctors={this.state.selectAdress} /></div>
        <p>Выберите дату и время:</p>  
        <DatePicker           
          inline="true"
          selected={this.state.selectedDate}
          onChange={this.handleChange}
          locale="ru"
        //   showTimeSelect
        //   timeFormat="HH:mm"
        //   timeIntervals={15}

      />
      <div> Time 
          <div>
            <BookingTime slots={this.state.slots} />
          </div>
        </div>
        <BookingForm />

        </div>;
    }
  }

  export default BookingCalendar;