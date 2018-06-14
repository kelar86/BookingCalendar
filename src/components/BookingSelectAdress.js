import React from 'react';

const BookingSelectAdress = (props) => {
    const adress = props.availableAdress;
    const onChange = (e) => props.onChange(e.target.value);  
    return <div> {adress.map(adress => <button onClick={onChange} value={adress.adress}> {adress.adress} </button>)} </div>;
}

export default BookingSelectAdress;