import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "../styles/Calendar.scss";


export default function Cal (props) {

    const [value, onChange] = useState(new Date());

    return (
        <div className='calendar-container flex'>
          <Calendar  onChange={onChange} value={value} />
        </div>
      );
}