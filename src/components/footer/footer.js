import React from "react";
import Logo from "../header/components/logo";
import MediaQuery from "react-responsive";

import styles from "../../styles/footer.module.scss";

import LinkedInIcon from "../icons/media-icons/linkedinIcon";
import FacebookIcon from "../icons/media-icons/fbIcon";
import YoutubeIcon from "../icons/media-icons/youtubeIcon";
import TwitterIcon from "../icons/media-icons/twitterIcon";
import InstagramIcon from "../icons/media-icons/instaIcon";
import LocationIcon from "../icons/contact-icons/locationIcon";
import MailIcon from "../icons/contact-icons/mailIcon";
import PhoneIcon from "../icons/contact-icons/phoneIcon";
import FooterDesktop from "./footerDesktop";

const Footer = () => {
  return (
    <>
      <MediaQuery maxWidth={800}>
        <div className={styles.container}>
          <Logo />
          <p>
            Victory Switzerland GmbH has been active as an import / wholesaler
            since it was founded in 2012 and makes worldwide purchases for its
            customers. Due to the diversity of our customers, our range is
            constantly being expanded; We import over 1000 new items every year.
          </p>
          <div className={styles.contact}>
            <h3>Haben Sie Fragen?</h3>
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
                <a href="tel:+41313019439" rel="noreferrer" target="_blank">
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
          <hr />
          <div className={styles.follow_container}>
            <h3>Folge uns</h3>
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
          <div className={styles.copyright}>
            <p>© Alle Rechte vorbehalten</p>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={800}>
        <FooterDesktop />
      </MediaQuery>
    </>
  );
};

export default Footer;
