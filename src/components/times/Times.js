import React from 'react';

import './Times.css';

export default function Times(props) {
    const { handleTime } = props;
    const timeSlots = ["06:00-09:00", "09:00-12:00", "12:00-15:00", "15:00-18:00"]
    return (
        <div className="time-slot-container">
            {timeSlots.map((t, i) =>
                <div onClick={(e) => handleTime(e, t)} key={i} className="time-slot">{t}</div>
            )}
        </div>
    )
}


