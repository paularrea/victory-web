import React from "react";
import "./form.css";
// import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {

  return (
    <form
      action="/thankyou"
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
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
        type="number"
        placeholder="Telefon"
      />
      <input
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        className="input"
        name="e-mail"
        type="email"
        placeholder="E-mail"
      />
      <br />
      {/* <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} /> */}
      <button
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="1000"
        type="submit"
      >
        FORMULAR SENDEN
      </button>
    </form>
  );
};

export default Form;
