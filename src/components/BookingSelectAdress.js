import React from 'react';

const BookingSelectAdress = (props) => {
    const adress = props.availableAdress;
    const onChange = (e) => props.onChange(e.target.value);  
    const options = adress.map(adress => <option value={adress}> {adress} </option>);
    return <select onChange={onChange}> {options} </select>;
}

export default BookingSelectAdress;