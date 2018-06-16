import React from 'react';

const BookingSelectAdress = (props) => {
    const adress = props.availableAdress;
    const onChange = (e) => props.onChange(e.target.value);  
    return <div>
        <p>Выберите адрес:</p>
             {adress.map((adress, index) => <button onClick={onChange} key={index} value={adress.id_adress}> {adress.adress} </button>)} 
        </div>;
}

export default BookingSelectAdress;