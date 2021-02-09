import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import styles from "../../../styles/header.module.scss";
import Logo from "./logo";
import GoTopButton from "../../../images/svg/go_top_icon.svg";

const DesktopHeader = () => {
  const [goTopApear, setGoTopApear] = useState(false);
  //   const [selectedHome, setSelectedHome] = useState(false)
  //   const [selectedServices, setSelectedServices] = useState(false)
  //   const [selectedAbout, setSelectedAbout] = useState(false)

  //   const homeLink = selectedHome ? styles.active : styles.disabled
  //   const servicesLink = selectedServices ? styles.active : styles.disabled
  //   const aboutLink = selectedAbout ? styles.active : styles.disabled

  useEffect(() => {
    const getGoTopButton = () => {
      if (window.scrollY < (30 * window.innerHeight) / 100) {
        setGoTopApear(false);
      } else {
        setGoTopApear(true);
      }
    };
    window.addEventListener("scroll", getGoTopButton);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <div className={styles.navBar}>
        <nav className={styles.logo_nav_container}>
          <AnchorLink id="logo" to="/#home">
            <Logo />
          </AnchorLink>
          <AnchorLink
            // className={homeLink}
            // onAnchorLinkClick={
            //   (() => setSelectedHome(true),
            //   setSelectedServices(false),
            //   setSelectedAbout(false))
            // }
            id="home"
            to="/#home"
          >
            HAUS
          </AnchorLink>
          <div className={styles.drop_down}>
            <AnchorLink
              // className={servicesLink}
              // onAnchorLinkClick={
              //   (() => setSelectedHome(false),
              //   setSelectedServices(true),
              //   setSelectedAbout(false))
              // }
              id="services"
              to="/#services"
              className={styles.drop_btn}
            >
              SERVICES
            </AnchorLink>
            <div class={styles.drop_down_content}>
              <AnchorLink to="/#produktDesign">Produktdesign</AnchorLink>
              <AnchorLink to="/#produktion">Produktion</AnchorLink>
              <AnchorLink to="/#importieren">Importieren</AnchorLink>
              <AnchorLink to="/#logistik">Logistik</AnchorLink>
            </div>
          </div>

          <AnchorLink
            // className={aboutLink}
            // onAnchorLinkClick={
            //   (() => setSelectedHome(false),
            //   setSelectedServices(false),
            //   setSelectedAbout(true))
            // }
            id="about"
            to="/about"
          >
            ÜBER UNS
          </AnchorLink>
        </nav>
        <div>
          <button>
            <a
              href="https://www.victoryshop.ch/en/"
              rel="noreferrer"
              target="_blank"
            >
              VICTORY SHOP
            </a>
          </button>
        </div>
        <div
          className={
            goTopApear ? styles.go_top_button : styles.go_top_button_disabled
          }
        >
          <GoTopButton className={styles.svg} onClick={scrollTop} />
        </div>
      </div>
    </header>
  );
};

DesktopHeader.propTypes = {
  siteTitle: PropTypes.string,
};

export default DesktopHeader;
