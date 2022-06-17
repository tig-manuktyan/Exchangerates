import React from 'react';
import './style.css';

const _Date = () => {
    const date = new Date();
    const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    let month = months[date.getMonth()];
    return (
        <div className='date'>
            <p>Время последного обновления:</p>
            <p>{` ${date.getDate()} ${month}  ${date.getFullYear()} г ${date.getHours()}:${date.getMinutes()} `}</p>
        </div>
    );
}
export default _Date;
