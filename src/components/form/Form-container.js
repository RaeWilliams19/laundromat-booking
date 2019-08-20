import React, { useState } from 'react'
import FormView from './Form-view';

export default function FormConatiner(props) {
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
        <FormView
            handleChange={handleChange}
            handleBooking={handleBooking}
            handleTime={handleTime}
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            formControls={formControls}
        />
    )
}
