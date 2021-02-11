import React, { useState } from "react";
import "./form.css";
// import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [callMeButton, setCallMeButton] = useState(false);

  const onClickCallMe = () => {
    setCallMeButton(true);
  };

  return (
    <form
      action="/thankyou"
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
    >
      {callMeButton && (
        <input id="call-me" name="call-me" type="hidden" value="CALL ME" />
      )}
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
        name="email"
        type="email"
        placeholder="email"
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
        placeholder="email"
      />
      <br />
      {/* <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} /> */}
      <button
        data-sal="slide-up"
        data-sal-delay="400"
        data-sal-duration="1000"
        type="submit"
        onClick={onClickCallMe}
      >
        FORMULAR SENDEN
      </button>
    </form>
  );
};

export default Form;
