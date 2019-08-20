import React from 'react'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import Times from '../times/Times';
import './Form.css';

export default function FormView(props) {
    const { handleBooking, handleChange, handleTime, selectedDay, selectedTime, formControls } = props;

    return (
        <form onSubmit={handleBooking}>
            <div className="booking-success hidden">
                <h4>Booking successfully made for {selectedDay} {selectedTime}!</h4>
            </div>
            <h4>Book a time slot for {selectedDay}:</h4>
            <Times handleTime={handleTime} selectedTime={selectedTime} />
            <TextField
                label="Name"
                value={formControls.name.value}
                onChange={handleChange('name')}
                id="mui-theme-provider-standard-input"
            />
            <TextField
                label="Email"
                value={formControls.email.value}
                onChange={handleChange('email')}
                id="mui-theme-provider-standard-input"
            />
            <Button type="submit">Book</Button>
        </form>
    )
}
