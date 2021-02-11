import React from "react";
import "./form.css";

const Form = () => {
  return (
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className="input"
        name="name"
        type="text"
        placeholder="Name"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className="input"
        name="vorname"
        type="text"
        placeholder="Vorname"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        className="input"
        name="unternehmen"
        type="text"
        placeholder="Unternehmen"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        className="input"
        name="industrie"
        type="text"
        placeholder="Industrie"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        className="input"
        name="telefon"
        type="text"
        placeholder="Telefon"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        className="input"
        name="email"
        type="email"
        placeholder="e-mail"
      />
      <button
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="1000"
        type="submit"
      >
        SEND FORM
      </button>
    </form>
  );
};

export default Form;
