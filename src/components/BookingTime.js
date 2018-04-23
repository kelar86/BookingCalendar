import React from 'react';

const BookingTime = (props) => {
    const slots = props.slots;
    const onClick = (e) => props.onClick(e.target.value);
    return slots.map((slot, index) => 
        <button onClick={onClick} value={slot}> {slot} </button>)
}

export default BookingTime;