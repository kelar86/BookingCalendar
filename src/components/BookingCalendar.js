
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import BookingTime from './BookingTime';

import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/ru'


class BookingCalendar extends Component {
    constructor (props) {
      super(props)
      this.state = {
        startDate: moment()
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(date) {
      this.setState({
        startDate: date
      });      
    }

  
    render() {
      return <div>
        <DatePicker           
          inline="true"
          selected={this.state.startDate}
          onChange={this.handleChange}
          locale="ru"
        //   showTimeSelect
        //   timeFormat="HH:mm"
        //   timeIntervals={15}

      />
      <div> Time 
          <div>
            <BookingTime slots={["10:00", "10:15", "10:30", "10:45", "11:00"]} />
          </div>
        </div> 
        </div>;
    }
  }

  export default BookingCalendar;