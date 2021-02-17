import React from "react";
import "./form.css";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
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
      <input type="hidden" name="form-name" value="contact-form" />
      <input
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className="input"
        name="name"
        type="text"
        placeholder={<FormattedMessage id="contact.name" />}
      />
      <input
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className="input"
        name="vorname"
        type="text"
        placeholder={<FormattedMessage id="contact.surname" />}
      />
      <input
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        className="input"
        name="unternehmen"
        type="text"
        placeholder={<FormattedMessage id="contact.company" />}
      />
      <input
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        className="input"
        name="industrie"
        type="text"
        placeholder={<FormattedMessage id="contact.industry" />}
      />
      <input
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        className="input"
        name="telefon"
        type="number"
        placeholder={<FormattedMessage id="contact.phone" />}
      />
      <input
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        className="input"
        name="e-mail"
        type="email"
        placeholder={<FormattedMessage id="contact.email" />}
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

export default injectIntl(Form);
