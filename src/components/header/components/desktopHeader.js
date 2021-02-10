import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import styles from "../../../styles/header.module.scss";
import Logo from "./logo";
import GoTopButton from "../../../images/svg/go_top_icon.svg";

const DesktopHeader = () => {
  const [goTopApear, setGoTopApear] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [servicesActive, setServicesActive] = useState(false);

  useEffect(() => {
    const setActiveStyle = () => {
      if (window.location.href.indexOf("/about") === -1) {
        if (window.scrollY < (75 * window.innerHeight) / 100) {
          setHomeActive(true);
          setServicesActive(false);
        } else if (window.scrollY > (75 * window.innerHeight) / 100) {
          setHomeActive(false);
          setServicesActive(true);
        }
      } else if (window.location.href.indexOf("/about") > -1) {
        setHomeActive(false);
        setServicesActive(false);
      }
    };
    window.addEventListener("scroll", setActiveStyle);
  }, []);

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
            // onLinkClick={
            //   (() => setSelectedHome(true),
            //   setSelectedServices(false),
            //   setSelectedAbout(false))
            // }
            to="/#home"
            className={homeActive ? styles.active : styles.disabled}
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
              to="/#produktDesign"
              className={servicesActive ? styles.active : styles.disabled}
            >
              + SERVICES
            </AnchorLink>
            <div className={styles.drop_down_content}>
              <AnchorLink to="/#produktDesign">PRODUKTDESIGN</AnchorLink>
              <AnchorLink to="/#produktion">PRODUKTION</AnchorLink>
              <AnchorLink to="/#importieren">IMPORTIEREN</AnchorLink>
              <AnchorLink to="/#logistik">LOGISTIK</AnchorLink>
            </div>
          </div>

          <Link
            // className={aboutLink}
            // onAnchorLinkClick={
            //   (() => setSelectedHome(false),
            //   setSelectedServices(false),
            //   setSelectedAbout(true))
            // }
            id="about"
            to="/about"
            activeStyle={{ color: "white" }}
          >
            ÜBER UNS
          </Link>
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
