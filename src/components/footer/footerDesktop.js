import React from "react";
import Logo from "../header/components/logo";
import { Link } from "gatsby";
import styles from "../../styles/footer.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import LinkedInIcon from "../../images/svg/Linkedin_icon.svg";
import FacebookIcon from "../../images/svg/Facebook_icon.svg";
import YoutubeIcon from "../../images/svg/Youtube_icon.svg";
import TwitterIcon from "../../images/svg/Twitter_icon.svg";
import InstagramIcon from "../../images/svg/Instagram_icon.svg";

import LocationIcon from "../../images/svg/LOCATION.svg";
import MailIcon from "../../images/svg/MAIL.svg";
import PhoneIcon from "../../images/svg/PHONE.svg";
import Language from "../language";

const FooterDesktop = () => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]');
  }
  return (
    <div className={styles.big_container}>
      <div className={styles.container}>
        <div className={styles.flex_container}>
          <div className={styles.logo_text}>
            <Link to="/">
              <Logo />
            </Link>
            <p>
              <FormattedMessage id="footer.text" />
            </p>
          </div>
          <div className={styles.contact}>
            <h3>
              <FormattedMessage id="footer.title" />
            </h3>
            <div className={styles.contact_div}>
              <div className={styles.contact_icons}>
                <LocationIcon />
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/dir//Solothurnstrasse+24C,+3422+Kirchberg,+Suiza/@47.088762,7.5803751,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x478e2e8fb3298e67:0xc936accc2ffb169a!2m2!1d7.5825638!2d47.088762!3e0"
                  rel="noreferrer"
                  target="_blank"
                >
                  Solothurnstrasse 24 C, 3422 Kirchberg Bern Schweiz
                </a>
              </div>
            </div>
            <div className={styles.contact_div}>
              <div className={styles.contact_icons}>
                <PhoneIcon />
              </div>
              <div>
                <a href="tel:+41313019439">
                  +41 31 301 94 39
                </a>
              </div>
            </div>
            <div className={styles.contact_div}>
              <div className={styles.contact_icons}>
                <MailIcon />
              </div>
              <div>
                <a
                  href="mailto:info@victoryswitzerland.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  info@victoryswitzerland.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.flex_container}>
          <div className={styles.follow_container}>
            <ul className={styles.media_list}>
              <li>
                <a
                  href="https://www.instagram.com/victoryswitzerland/?hl=es"
                  rel="noreferrer"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/victoryswitzerland/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCl7cknUnSR8FcsinGHRok9Q"
                  rel="noreferrer"
                  target="_blank"
                >
                  <YoutubeIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/VICTORYSWITZER1"
                  rel="noreferrer"
                  target="_blank"
                >
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/victory-switzerland/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.flex_footer_lang}>
            <Language />
            <div className={styles.copyright}>
              <p><FormattedMessage id="footer.copyright" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(FooterDesktop);
