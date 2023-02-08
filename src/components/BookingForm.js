import React, { useState } from 'react';
import "./BookingForm.css";
import { useNavigate } from 'react-router-dom';
import { submitAPI } from '../BookingsAPI';

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
}

const [formData, setFormData] = useState({});
const navigate = useNavigate();

const submitForm = (formData) => {
  const submitSuccess = submitAPI(formData);
  if (submitSuccess) {
    navigate("/confirmation");
  }
};

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      submitForm(formData);
    }} className='container bookingForm' style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
      <label htmlFor="res-date">Choose date</label>
      <input className='input--reservation' required value={date} onChange={handleDateChange} type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select  required className='input--reservation'
        id="res-time"
      > {finalTime}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input className='input--reservation' required value={guests} onChange={(e) => setGuests(e.target.value)} type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select className='input--reservation' required value={occasion} onChange={(e) => setOccasion(e.target.value)} id="occasion">
         <option>Birthday</option>
         <option>Anniversary</option>
      </select>
      <button className='btn' type='submit'>Make Your reservation</button>
    </form>
  )
}

export default BookingForm