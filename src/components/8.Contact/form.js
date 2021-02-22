import React from "react";
import "./form.css";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

const Form = ({ intl }) => {
  const namePlaceholder = intl.formatMessage({ id: "contact.name" });
  const surnamePlaceholder = intl.formatMessage({ id: "contact.surname" });
  const companyPlaceholder = intl.formatMessage({ id: "contact.company" });
  const industryPlaceholder = intl.formatMessage({ id: "contact.industry" });
  const phonePlaceholder = intl.formatMessage({ id: "contact.phone" });
  const emailPlaceholder = intl.formatMessage({ id: "contact.email" });
  return (
    <form
      action="https://www.flexyform.com/f/8e720ef63c4be85521fa15f7038e5f9eb03365c9"
      name="CONTACT"
      method="post"
    >
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
        <FormattedMessage id="contact.button" />
      </button>
    </form>
  );
};

export default injectIntl(Form);
