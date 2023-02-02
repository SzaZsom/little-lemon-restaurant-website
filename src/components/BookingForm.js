import React, { useState } from 'react';
import "./BookingForm.css"

function BookingForm({availableTimes, dispatch}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    dispatch({
      type: "UPDATE_TIMES",
      payload: {
        times: availableTimes
      }
    });
  };

  console.log(time)

  return (
    <form className='container bookingForm' style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
      <label htmlFor="res-date">Choose date</label>
      <input className='input--reservation' onChange={(e) => setDate(e.target.value)} type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select  className='input--reservation'
        id="res-time"
        value={time}
        onChange={handleTimeChange}
      >
        {availableTimes.map((t, i) => (
          <option key={i} value={t}>{t}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input className='input--reservation' onChange={(e) => setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select className='input--reservation' onChange={(e) => setOccasion(e.target.value)} id="occasion">
         <option>Birthday</option>
         <option>Anniversary</option>
      </select>
      <input className='btn' type="submit" value="Make Your reservation" />
    </form>
  )
}

export default BookingForm