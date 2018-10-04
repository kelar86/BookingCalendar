import React from 'react';
import cn from 'classnames';

const BookingTime = (props) => {
    const slots = props.slots;
    const onClick = (e) => props.onClick(e.target.value);
    const buttons = slots.map((slot, index) => {
        const btnClass = cn({
            'btn': true,
            'btn-secondary': true,
            'active': slot === props.checked
        });
        return <button onClick={onClick} className={btnClass} key={index} value={slot}> {slot.slice(0, 5)} </button>
    });
    return <div>
              <p> Выберите время: </p>
                { buttons }
           </div>
}

export default BookingTime;