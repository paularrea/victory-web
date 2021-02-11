import React, { useState } from "react";
import "./formAbout.css";
import FormAboutImg from "./formAboutImg";

const ContactForm = () => {
  const [callMeButton, setCallMeButton] = useState(false);

  const onClickCallMe = () => {
    setCallMeButton(true)
  }

  return (
    <div className="big_container">
      <div className="contact_container">
        <div className="flex_form">
          <div className="img_container">
            <FormAboutImg />
          </div>
          <div>
            <form
              action="/thankyou"
              name="contact-about-form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {callMeButton && (
                <input
                  id="call-me"
                  name="call-me"
                  type="hidden"
                  value="CALL ME"
                />
              )}
              <input
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="input_about"
                name="name"
                type="text"
                placeholder="Name"
              />
              <input
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="input_about"
                name="vorname"
                type="text"
                placeholder="Vorname"
              />
              <input
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="1000"
                className="input_about"
                name="unternehmen"
                type="text"
                placeholder="Unternehmen"
              />
              <input
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="1000"
                className="input_about"
                name="industrie"
                type="text"
                placeholder="Industrie"
              />
              <input
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
                className="input_about"
                name="telefon"
                type="number"
                placeholder="Telefon"
              />
              <input
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
                className="input_about"
                name="e-mail"
                type="email"
                placeholder="E-mail"
              />
              <div
                data-sal="slide-up"
                data-sal-delay="250"
                data-sal-duration="1000"
                className="btn_container"
              >
                <button
                  data-sal="slide-up"
                  data-sal-delay="400"
                  data-sal-duration="1000"
                  type="submit"
                  className="about_contact_btn"
                >
                  ABSENDEN
                </button>
                <button
                  data-sal="slide-up"
                  data-sal-delay="400"
                  data-sal-duration="1000"
                  type="submit"
                  onClick={onClickCallMe}
                  className="about_contact_btn"
                >
                  WIR RUFEN SIE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
