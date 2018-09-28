import React, { Component } from 'react';
import qs from 'qs';

class BookingForm extends Component{
    constructor(props){
      super(props);
      this.state = {name: '', adress: '', email: '', tel: '+7' };
      
      this.onFioChange = this.onFioChange.bind(this);
      this.onAdressChange = this.onAdressChange.bind(this);
      this.onEmailChange = this.onEmailChange.bind(this);
      this.onTelChange = this.onTelChange.bind(this);
     
      this.handleSubmit = this.handleSubmit.bind(this); 
    }
  
    onFioChange(event) {
      this.setState({name: event.target.value});
    }
    onAdressChange(event) {
      this.setState({adress: event.target.value});
    }
    onEmailChange(event) {
      this.setState({email: event.target.value});
    }
    onTelChange(event) {
      this.setState({tel: event.target.value});
    }
    
  
    handleSubmit(event) {
      const params = qs.stringify({...this.state, ...this.props });
      console.log(params);

      fetch(`http://localhost:8080/wp-json/react-booking/v1/reserv?${params}`, {method: "POST"})
      alert('Text field value is: ' + this.state.value);
    }
  
    render(){
      return(
      <div> 
       <p>
         ФИО пациента*
         <input type='text' 
            name='book_client_name' 
            placeholder="Иванов Иван Иванович" 
            required='required'
            value={this.state.name}
            onChange={this.onFioChange}
            />
        </p>
        <p>    
          Адрес проживания
         <input type='text' 
            name='book_home_adress'
            value={this.state.adress}
            onChange={this.onAdressChange} />
        </p>
  
        <p>    
          Ваш e-mail*
          <input type='email'
            name='book_client_email'
            required='true'
            value={this.state.email}
            onChange={this.onEmailChange} />
        </p> 
        <p>    
          Контактный телефон*
          <input type='tel' 
          name='book_phone' 
          placeholder='+7'
          value={this.state.tel}   
          onChange={this.onTelChange} 
          />
        </p>  
        <p>
        <input type='checkbox' name='personal-data-agree' defaultChecked='true' /> Согласен на обработку персональных данных
        </p>
  
        <p><button onClick={this.handleSubmit}>
           ЗАПИСАТЬСЯ
          </button>
       </p>
      </div> 
      );
    }
  }

  export default BookingForm;