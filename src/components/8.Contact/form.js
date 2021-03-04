import React from "react";
import "./form.css";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

const Form = ({ intl }) => {
  const namePlaceholder = intl.formatMessage({ id: "contact.name" });
  const surnamePlaceholder = intl.formatMessage({ id: "contact.surname" });
  const companyPlaceholder = intl.formatMessage({ id: "contact.company" });
  const subjectPlaceholder = intl.formatMessage({ id: "contact.subject.name" });
  const phonePlaceholder = intl.formatMessage({ id: "contact.phone" });
  const emailPlaceholder = intl.formatMessage({ id: "contact.email" });

  const productDesignPlaceholder = intl.formatMessage({
    id: "contact.subject.productDesign",
  });
  const productionPlaceholder = intl.formatMessage({
    id: "contact.subject.production",
  });
  const importPlaceholder = intl.formatMessage({
    id: "contact.subject.import",
  });
  const logisticPlaceholder = intl.formatMessage({
    id: "contact.subject.logistic",
  });
  return (
    <form
      action="https://www.flexyform.com/f/5b588b2b896183814cfe1778245b8a3e26736b35"
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
      <select
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-duration="1000"
        className="input"
        name="industrie"
        type="text"
      >
        <option disabled selected>{subjectPlaceholder}</option>
        <option>{productDesignPlaceholder}</option>
        <option>{productionPlaceholder}</option>
        <option>{importPlaceholder}</option>
        <option>{logisticPlaceholder}</option>
      </select>
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
      <input
        type="text"
        style={{ visibility: "hidden" }}
        value=""
        name="_empty_field"
      />
      <br />
      <button
        style={{ marginTop: "0" }}
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
