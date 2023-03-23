import React from 'react';
import Calendar from 'react-calendar';
import './style.sass';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

export function Calender(props) {

  const { selectedRange, onSelectedData } = props;

  const minDate = new Date()



  function handleDateChange(value) {

    onSelectedData(value)

  }
  return (
    <div className='calendar'>
      <Calendar
        selectRange={true}
        value={selectedRange}
        onChange={handleDateChange}
        showDoubleView={true}
        minDate={minDate}

      />
    </div>
  )
}