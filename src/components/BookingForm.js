import { useNavigate } from "react-router-dom";
import BookingCSS from "./BookingForm.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { submitAPI } from "../api/ApiFile";

export default function BookingForm({ availableTimes, dispatch }) {
  const currentDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();

  const basicSchema = yup.object().shape({
    name: yup
      .string("Please enter a valid name")
      .required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    guests: yup
      .number()
      .positive("Please enter a valid number of guests")
      .max(10, "Ooops, currently we offer tables only up to 10 people :("),
    occasion: yup
      .string()
      .matches(
        /(birthday|anniversary|engagement|date)/,
        "Please choose an occasion"
      ),
  });

  const onSubmit = async (values, actions) => {
    console.log(actions);
    console.log(values);
    submitAPI(values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
    navigate("/confirmed-booking");
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: currentDate,
      time: "",
      guests: 1,
      occasion: "Pick...",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const handleDateChange = async (e) => {
    handleChange(e);
    dispatch({ type: "UPDATE_TIMES", payload: e.target.value });
  };

  const options = availableTimes.map((time) => (
    <option key={time} value={time}>
      {time}
    </option>
  ));

  return (
    <main className={BookingCSS.wrapper}>
      <h1 className={BookingCSS.heading}>Let's make a reservation!</h1>
      <div className={BookingCSS.flexContainer}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="name">Your name:</label>
          <input
            id="name"
            name="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? "input-error" : ""}
          />
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}

          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}

          <label htmlFor="date">Choose a date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={values.date}
            onChange={handleDateChange}
            onBlur={handleBlur}
            min={currentDate}
          />

          <label htmlFor="time">Choose time</label>
          <select
            id="time "
            name="time"
            value={values.time}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {options}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            id="guests"
            name="guests"
            value={values.guests}
            onChange={handleChange}
          />

          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={values.occasion}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.occasion && values.occasion === "" ? "input-error" : ""
            }
          >
            <option value="">Pick...</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            <option value="date">Date</option>
          </select>
          {errors.occasion && <p className="error">{errors.occasion}</p>}

          <button disabled={isSubmitting} type="submit">
            Make a reservation
          </button>
        </form>
      </div>
    </main>
  );
}
