import React from 'react';

const BookingSelectAdress = (props) => {
    const adress = props.availableAdress;
    const onChange = (e) => props.onChange(e.target.value);  
    const buttons = adress.map(adress => <button value={adress}> {adress} </button>);
    return <div onClick={onChange}> {buttons} </div>;
}

export default BookingSelectAdress;