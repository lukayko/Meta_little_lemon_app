import React from "react";
import { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api/ApiFile.js";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const [date, setDate] = useState(new Date());

  function initializeTimes(date) {
    console.log(`1/ initializing new date object: ${date}`);
    return fetchAPI(date);
  }

  function updateTimes(date) {
    const dateObj = new Date(date);
    console.log(`2/ updating date object with set date: ${dateObj}`);
    return fetchAPI(dateObj);
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed-booking");
    }
  }

  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case "UPDATE_TIMES":
        const newDate = new Date(action.payload);
        newState = updateTimes(newDate);
        console.log(
          `3/ updating set date with times according to the api: ${newState}`
        );
        break;

      default:
        throw new Error();
    }
    return newState;
  }

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
      initializeTimes={initializeTimes}
    />
  );
}
