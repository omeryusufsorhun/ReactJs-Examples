import "./index.css";
import React, { useState } from "react";
export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleFirstName = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handleLastName = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <>
      <div class="form-container">
        <form class="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div className="success-message">success</div>
          ) : null}
          <input
            onChange={handleFirstName}
            value={values.firstName}
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          {submitted && !values.firstName ? (
            <span>Please enter a firstname</span>
          ) : null}
          <input
            onChange={handleLastName}
            value={values.lastName}
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          {submitted && !values.lastName ? (
            <span>Please enter a lastname</span>
          ) : null}{" "}
          <input
            onChange={handleEmail}
            value={values.email}
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          {submitted && !values.email ? (
            <span>Please enter an emaail</span>
          ) : null}{" "}
          <button class="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
