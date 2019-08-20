import React from 'react'

export default function CalendarView(props) {
    const { handleClick, getNextWeek, getPrevWeek, today, week, currentWeek, daysInWeek, weekdaysShort } = props;

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
