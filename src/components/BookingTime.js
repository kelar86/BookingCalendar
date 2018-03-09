import React from 'react';

const BookingTime = (props) => {
    const slots = props.slots;
    return slots.map((slot) => <label><input type="radio" name="slot" value={slot}/> {slot}</label>)
}

export default BookingTime;