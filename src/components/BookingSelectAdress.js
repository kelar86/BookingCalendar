import React from 'react';
import cn from 'classnames';

const BookingSelectAdress = (props) => {
    const adress = props.availableAdress;
    const onChange = (e) => props.onChange(e.target.value);  
    const buttons = adress.map((adress, index) => {
        const btnClass = cn({
                'btn': true,
                'btn-secondary': true,
                'active': adress.id_adress === props.checked
            });
        return <button className={btnClass} onClick={onChange} key={index} value={adress.id_adress}> {adress.adress} </button>;        
     });

    return <div>
        <p>Выберите адрес:</p>
             { buttons } 
        </div>;
    }


export default BookingSelectAdress;