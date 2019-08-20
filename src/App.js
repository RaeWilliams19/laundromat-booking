import React, { useState } from 'react';
import moment from 'moment';

import CalendarContainer from './components/calendar/Calendar-container';
import FormConatiner from './components/form/Form-container';
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
        <CalendarContainer handleClick={handleClick} selectedDay={selectedDay} />
        <FormConatiner selectedDay={selectedDay} />
      </main>
    </div>
  );
}

export default App;
