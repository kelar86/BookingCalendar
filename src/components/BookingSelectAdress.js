import React from 'react';

const BookingSelectAdress = (props) => {
    const docs = props.doctors;
    const options = docs.map((doctor) => <option value={doctor}> {doctor} </option>);
    return <select> {options} </select>;
}

export default BookingSelectAdress;