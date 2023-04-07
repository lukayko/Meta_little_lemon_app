import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingCSS from "./BookingForm.module.css";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    date: "",
    time: "00:00",
    numGuests: 1,
    occasion: "Birthday",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = async (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    dispatch({ type: "UPDATE_TIMES", payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formData);
  };

  const currentDate = new Date().toISOString().split("T")[0];
  const options = availableTimes.map((time) => (
    <option key={time}>{time}</option>
  ));

  return (
    <main className={BookingCSS.wrapper}>
      <h1>Let's make a reservation!</h1>
      <div className={BookingCSS.flexContainer}>
        <form onSubmit={handleSubmit}>
          <div className={BookingCSS.flexChild}>
            <label htmlFor="res-name">Your name:</label>
            <input
              type="text"
              id="res-name"
              name="customerName"
              value={formData.customerName}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className={BookingCSS.flexChild}>
            <label htmlFor="res-email">Your email:</label>
            <input
              type="email"
              id="res-email"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleFormChange}
            />
          </div>
          <div className={BookingCSS.flexChild}>
            <label htmlFor="res-date">Choose a date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              value={formData.date}
              onChange={handleDateChange}
              required
              min={currentDate}
            />
          </div>
          <div className={BookingCSS.flexChild}>
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time "
              name="time"
              value={formData.time}
              onChange={handleFormChange}
              required
            >
              {options}
            </select>
          </div>
          <div className={BookingCSS.flexChild}>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              required
              id="guests"
              name="numGuests"
              value={formData.numGuests}
              onChange={handleFormChange}
            />
          </div>
          <div className={BookingCSS.flexChild}>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              required
              value={formData.occasion}
              onChange={handleFormChange}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Date</option>
            </select>
          </div>
          <div className={BookingCSS.flexChild}>
            <input
              className="submit"
              type="submit"
              value="Reserve"
              aria-label="submit button"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
