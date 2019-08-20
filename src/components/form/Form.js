import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import Times from '../times/Times';
import './Form.css';

export default function Form(props) {
    const { selectedDay } = props;
    const [selectedTime, setSelectedTime] = useState();
    const [formControls, setFormControls] = useState({
        name: {
            value: ''
        },
        email: {
            value: ''
        }
    })

    const handleChange = name => (e) => {
        const value = e.target.value;
        setFormControls({
            ...formControls,
            [name]: {
                value: value
            }
        });
    }

    const bookingSuccessful = () => {
        const el = document.getElementsByClassName('booking-success')
        el[0].classList.remove('hidden');
        setTimeout(() => {
            el[0].classList.add('hidden');
        }, 4000)
    }

    const handleBooking = (e) => {
        e.preventDefault()
        if (formControls.email.value && formControls.name.value && selectedTime && selectedDay) {
            console.log(formControls.email.value, formControls.name.value, selectedTime, selectedDay)
        }
        const times = document.getElementsByClassName('time-slot');
        for (let i = 0; i < times.length; i++) {
            if (times[i].classList.contains('active')) {
                times[i].classList.remove('active')
                times[i].classList.add('booked')
            }
        }
        bookingSuccessful();
    }

    const handleTime = (e, time) => {
        const times = document.getElementsByClassName('time-slot');
        for (let i = 0; i < times.length; i++) {
            times[i].classList.remove('active')
        }
        e.target.classList.add('active')
        setSelectedTime(time);
    }

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
