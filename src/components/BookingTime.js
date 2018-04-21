import React from 'react';

const BookingTime = (props) => {
    const slots = props.slots;
    const onClick = (e) => props.onClick(e.target.value);
    return slots.map((slot, index) => 
        <label><input onClick={onClick} key={index} type="radio" name="slot" value={slot}/> {slot}</label>)
}

export default BookingTime;