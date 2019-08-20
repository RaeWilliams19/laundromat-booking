import React, { useState } from 'react';
import moment from 'moment';

import Calendar from './components/calendar/Calendar';
import Form from './components/form/Form';
import laundry from './assests/images/laundry.png'

function App() {
  const [selectedDay, setSelectedDay] = useState(moment().format("dddd, MMMM Do"));

  const handleClick = (d, i) => {
    if (i === 0 || i === 6) return null;
    const formattedDate = d.format("dddd, MMMM Do")
    setSelectedDay(formattedDate)
  }

  return (
    <div>
      <header>
        <img src={laundry} alt="washing machine" width={100} />
        <h5>John's Laundromat</h5>
      </header>
      <main>
        <Calendar handleClick={handleClick} selectedDay={selectedDay} />
        <Form selectedDay={selectedDay} />
      </main>
    </div>
  );
}

export default App;
