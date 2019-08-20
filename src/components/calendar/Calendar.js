import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './Calendar.css';

export default function Calendar(props) {
    const [dateContext] = useState(moment());
    const [today] = useState(moment());
    const [currentWeek] = useState(moment().week());
    const [week, setWeek] = useState(moment().week())
    const [daysInWeek, setDaysInWeek] = useState()
    const weekdaysShort = moment.weekdaysShort();

    const { handleClick } = props;

    useEffect(() => {
        const currentWeek = () => {
            const days = [];
            const startDate = dateContext.startOf('week');
            for (let i = 0; i < 7; i++) {
                days.push(moment(startDate).add(i, 'day'));
            }
            setDaysInWeek(days);
        }
        currentWeek();
    }, [dateContext])

    const getNextWeek = (weekNum) => {
        const nextWeek = dateContext.week(weekNum).add(1, 'weeks');
        const days = [];
        const startDate = nextWeek.startOf('week');
        for (let i = 0; i < 7; i++) {
            days.push(moment(startDate).add(i, 'day'));
        }
        setDaysInWeek(days);
        setWeek(weekNum + 1);
    }

    const getPrevWeek = (weekNum) => {
        const days = [];
        const startDate = dateContext.week(weekNum).subtract(1, 'weeks').startOf('week');
        for (let i = 0; i < 7; i++) {
            days.push(moment(startDate).add(i, 'day'));
        }
        setDaysInWeek(days);
        setWeek(weekNum - 1);
    }

    return (
        <div className="calendar">
            <table>
                <thead>
                    <tr className="calendar-head">
                        <th>
                            <button onClick={() => getPrevWeek(week)} className={week === currentWeek ? "prev hidden" : "prev"}>&lt;</button>
                        </th>
                        <th colSpan="5" className="calendar-week">
                            {"Week " + week}
                        </th>
                        <th>
                            <button onClick={() => getNextWeek(week)} className="next">&gt;</button>
                        </th>
                    </tr>
                    <tr>
                        {weekdaysShort.map((day, i) =>
                            <th key={day} className={(i === 0 || i === 6) ? "weekend" : "weekday"}>
                                {day}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {daysInWeek && daysInWeek.map((d, i) =>
                            <td
                                className={d.format("D") === today.format("D") && week === currentWeek ? "calendar-day today" : (i === 0 || i === 6) ? "calendar-day closed" : "calendar-day"}
                                key={i * 100}
                                onClick={() => handleClick(d, i)}
                            >
                                {d.format("D")}
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
