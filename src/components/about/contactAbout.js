import React from "react";
import "./formAbout.css";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import FormAboutImg from "../../images/svg/map_bern.svg";
import Location from "../../images/svg/ubication_victory.svg";

const ContactForm = ({ intl }) => {
  const namePlaceholder = intl.formatMessage({ id: "contact.name" });
  const surnamePlaceholder = intl.formatMessage({ id: "contact.surname" });
  const companyPlaceholder = intl.formatMessage({ id: "contact.company" });
  const industryPlaceholder = intl.formatMessage({ id: "contact.industry" });
  const phonePlaceholder = intl.formatMessage({ id: "contact.phone" });
  const emailPlaceholder = intl.formatMessage({ id: "contact.email" });
  return (
    <div className="big_container">
      <div className="contact_container">
        <div className="flex_form">
          <div className="img_container">
            <FormAboutImg />
            <div className="img_location">
              <a
                href="https://www.google.com/maps/dir//Solothurnstrasse+24C,+3422+Kirchberg,+Suiza/@47.088762,7.5803751,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x478e2e8fb3298e67:0xc936accc2ffb169a!2m2!1d7.5825638!2d47.088762!3e0"
                rel="noreferrer"
                target="_blank"
              >
                <Location />
              </a>
            </div>
          </div>
          <div>
            <form
              subject="CALL ME"
              action="/thankyou"
              name="CALL ME"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              id="form-about"
            >
              <input type="hidden" name="form-name" value="CALL ME" />
              <input
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="input_about"
                name="name"
                type="text"
                required
                placeholder={namePlaceholder}
              />
              <input
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-duration="1000"
                className="input_about"
                name="vorname"
                type="text"
                required
                placeholder={surnamePlaceholder}
              />
              <input
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="1000"
                className="input_about"
                name="unternehmen"
                type="text"
                required
                placeholder={companyPlaceholder}
              />
              <input
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-duration="1000"
                className="input_about"
                name="industrie"
                type="text"
                required
                placeholder={industryPlaceholder}
              />
              <input
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
                className="input_about"
                name="telefon"
                type="number"
                required
                placeholder={phonePlaceholder}
              />
              <input
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-duration="1000"
                className="input_about"
                name="e-mail"
                type="email"
                required
                placeholder={emailPlaceholder}
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
                  <FormattedMessage id="about.contactBtn" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(ContactForm);
