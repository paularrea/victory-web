import React from "react";
import "./form.css";
import { injectIntl } from "gatsby-plugin-intl";
// import ReCAPTCHA from "react-google-recaptcha";

const Form = ({ intl }) => {
  const namePlaceholder = intl.formatMessage({ id: "contact.name" });
  const surnamePlaceholder = intl.formatMessage({ id: "contact.surname" });
  const companyPlaceholder = intl.formatMessage({ id: "contact.company" });
  const industryPlaceholder = intl.formatMessage({ id: "contact.industry" });
  const phonePlaceholder = intl.formatMessage({ id: "contact.phone" });
  const emailPlaceholder = intl.formatMessage({ id: "contact.email" });
  return (
    <form
    subject="CONTACT"
      action="/thankyou"
      name="CONTACT"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
    >
      <input type="hidden" name="form-name" value="CONTACT" />
      <input
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className="input"
        name="name"
        type="text"
        required
        placeholder={namePlaceholder}
      />
      <input
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="1000"
        className="input"
        name="vorname"
        type="text"
        required
        placeholder={surnamePlaceholder}
      />
      <input
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        className="input"
        name="unternehmen"
        type="text"
        required
        placeholder={companyPlaceholder}
      />
      <input
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        className="input"
        name="industrie"
        type="text"
        required
        placeholder={industryPlaceholder}
      />
      <input
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        className="input"
        name="telefon"
        type="number"
        required
        placeholder={phonePlaceholder}
      />
      <input
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-duration="1000"
        className="input"
        name="e-mail"
        type="email"
        required
        placeholder={emailPlaceholder}
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
