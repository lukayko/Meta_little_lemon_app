import React from "react";
import { useState, useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../api/ApiFile.js";

export default function BookingPage() {
  const [date, setDate] = useState(new Date());

  function initializeTimes(date) {
    return fetchAPI(date);
  }

  function updateTimes(date) {
    const dateObj = new Date(date);
    return fetchAPI(dateObj);
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

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
}
