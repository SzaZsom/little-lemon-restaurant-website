import React from 'react'
import BookingForm from '../BookingForm'

function BookingPage({availableTimes, dispatch}) {
  return (
    <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
  )
}

export default BookingPage