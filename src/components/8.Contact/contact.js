import React from "react";
import styles from "../../styles/form.module.scss";
import Form from "./form";

const ContactForm = () => {
  return (
    <>
      <div id="contact" className={styles.container}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <h3>
            Registrieren Sie sich für weitere Informationen über unsere
            Preislisten
          </h3>
          <h5>
            Wir werden Ihre Anfrage bearbeiten und so schnell wie möglich
            kontaktieren wir Sie
          </h5>
        </div>
        <Form />
        <hr className={styles.hr} />
      </div>
    </>
  );
};

export default ContactForm;
