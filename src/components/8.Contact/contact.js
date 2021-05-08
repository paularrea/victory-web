import React from "react";
import styles from "../../styles/form.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import Form from "./form";

const ContactForm = () => {
  return (
    <>
      <div className={styles.big_container}>
      <div id="contact" className={styles.container}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <h3>
          <FormattedMessage id="contact.title" />
          </h3>
          <h5>
          <FormattedMessage id="contact.subtitle" />
          </h5>
        </div>
        <Form />
        {/* <hr className={styles.hr} /> */}
      </div>
      </div>
    </>
  );
};

export default injectIntl(ContactForm);
