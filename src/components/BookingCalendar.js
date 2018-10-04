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
        availableDates: [''],
        dateToBook: moment().format('YYYY-MM-D'),
        slots: [''],
        selectedAdress: '',
        selectedTime: ''
      };
      this.onSelectDate = this.onSelectDate.bind(this);
      this.onSelectAdress = this.onSelectAdress.bind(this);
      this.onSelectTime = this.onSelectTime.bind(this);
    };
    

    componentDidMount() {
      const adressID = this.state.selectedAdressID ? this.state.selectedAdressID : 1;
      
      fetch(`http://localhost:8080/wp-json/react-booking/v1/adress`)
          .then(response => response.json()
          .then((data)=>{
            this.setState({
              availableAdress: data
            });
          })) 
          .catch(alert)
      
      fetch(`http://localhost:8080/wp-json/react-booking/v1/dates?doctorID=${adressID}`)
          .then(response => response.json()
          .then((data)=>{
              const dates = data.map(value => moment(value));
              this.setState({
                availableDates: dates,
                selectedDate: dates[0],
                dateToBook: dates[0] ? dates[0].format('YYYY-MM-DD') : moment().format('YYYY-MM-D')
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

    onSelectTime(time) {
      this.setState({
        selectedTime: time
      });
    }

    onSelectDate(date) {
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

      fetch(`http://localhost:8080/wp-json/react-booking/v1/dates?doctorID=${adress_id}`)
      .then(response => response.json()
      .then((data)=>{
          const dates = data.map(value => moment(value));
          this.setState({
            availableDates: dates,
            selectedDate: dates[0],
            dateToBook: dates[0] ? dates[0].format('YYYY-MM-DD') : moment().format('YYYY-MM-D')
          });
        }))
        .catch(alert) 
    }
    
    
    render() {
      return <div>
          <div><BookingSelectAdress 
                  onChange={this.onSelectAdress} 
                  availableAdress={this.state.availableAdress} 
                  checked={this.state.selectedAdress}/></div>
        
                <p>Выберите дату и время:</p>  
                <DatePicker inline={true}
                            selected={this.state.selectedDate}
                            onChange={this.onSelectDate}
                            locale="ru"
                            // minDate={this.state.availableDates[0]}
                            // maxDate={this.state.availableDates[3]}
                            disabledKeyboardNavigation
                            includeDates={this.state.availableDates}
                          
                          />
    
            <BookingTime 
              slots={this.state.slots}
              onClick={this.onSelectTime}
              checked={this.state.selectedTime}
               />
        <p></p>
        <p>Введите данные:</p>
        <BookingForm
          dateToBook={this.state.dateToBook}
          selectedAdress={this.state.selectedAdress}
          selectedTime={this.state.selectedTime} />

        </div>;
    }
  }

  export default BookingCalendar;