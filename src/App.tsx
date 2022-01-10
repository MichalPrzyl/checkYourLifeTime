import React, { useState } from 'react';
import './App.css';
import Day from './components/day';

const App = () => {
  const days = [];
  const numberOfDays = 60 * 365;
  for(let i = 0; i < numberOfDays; i ++)
  {
    days.push(i);
  }
  console.log(days)
  return (
    <>
    <div className="flex-row">
      {days.map(el => <Day key={el} day={el} />)}
    </div>
    </>
  )
}

export default App;

