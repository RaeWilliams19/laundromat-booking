import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './Calendar.css';
import CalendarView from './Calendar-view';

export default function CalendarContainer(props) {
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
        <CalendarView
            handleClick={handleClick}
            getNextWeek={getNextWeek}
            getPrevWeek={getPrevWeek}
            today={today}
            currentWeek={currentWeek}
            week={week}
            daysInWeek={daysInWeek}
            weekdaysShort={weekdaysShort}
        />
    )
}
