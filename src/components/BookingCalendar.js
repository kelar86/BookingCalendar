
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
        availableAdress: [''],
        dateToBook: moment().format('YYYY-MM-D'),
        slots: [''],
        
        
        selectedAdress: '',
        selectedTime: '',
        name: '', 
        adress: '', 
        email: '', 
        tel: '+7'
      };
      this.handleChange = this.handleChange.bind(this);
      this.onSelectAdress = this.onSelectAdress.bind(this);
      this.onSelectTime = this.onSelectTime.bind(this);
    };
    
    componentDidMount() {
      const adressID = this.state.selectedAdressID ? this.state.selectedAdressID : 1;
      // date = this.state.dateToBook;
      
      fetch(`http://localhost:8080/wp-json/react-booking/v1/adress`)
          .then(response => response.json()
          .then((data)=>{
            this.setState({
              availableAdress: data
            });
          })) 
          .catch(alert)
      
      fetch(`http://localhost:8080/wp-json/react-booking/v1/slots?doctorID=${adressID}&book_date=${this.state.dateToBook}`)
          .then(response => response.json()
          .then((data)=>{
            this.setState({
            slots: data
            });
          })) 
          .catch(alert)    
      
    }

    handleChange(date) {
      const adressID = this.state.selectedAdress ? this.state.selectedAdress : 1;
      const click_date = date.format('YYYY-MM-D')
      this.setState({
        selectedDate: date,
        dateToBook: date.format('YYYY-MM-D')
      }); 

      fetch(`http://localhost:8080/wp-json/react-booking/v1/slots?doctorID=${adressID}&book_date=${click_date}`)
      .then(response => response.json()
      .then((data)=>{
        this.setState({
          slots: data
        });
      })) 
      .catch(alert)
      
    }

    onSelectAdress(adress_id) { 
      
      fetch(`http://localhost:8080/wp-json/react-booking/v1/slots?doctorID=${adress_id}&book_date=${this.state.dateToBook}`)
      .then(response => response.json()
      .then((data)=>{
        this.setState({
          selectedAdress: adress_id,
          slots: data
        });
      })) 
      .catch(alert)   
    }
    
    onSelectTime(time) {
      this.setState({
        selectedTime: time,
      });
    }
    
  
    render() {
      return <div>
          <div><BookingSelectAdress 
                  onChange={this.onSelectAdress} 
                  availableAdress={this.state.availableAdress}/></div>
        
                <p>Выберите дату и время:</p>  
                <DatePicker inline="true"
                            selected={this.state.selectedDate}
                            onChange={this.handleChange}
                            locale="ru"
                            //   showTimeSelect
                            //   timeFormat="HH:mm"
                            //   timeIntervals={15}

                          />
      <div> Time 
          <div>
            <BookingTime 
              slots={this.state.slots}
              onClick={this.onSelectTime} />
          </div>
        </div>
        <BookingForm />

        </div>;
    }
  }

  export default BookingCalendar;