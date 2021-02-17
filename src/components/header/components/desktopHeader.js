import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";
import styles from "../../../styles/header.module.scss";
import Logo from "./logo";
import GoTopButton from "../../../images/svg/go_top_icon.svg";

const DesktopHeader = () => {
  const [goTopApear, setGoTopApear] = useState(false);
  const [hover, setHover] = useState(false);
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
            to="/#home"
            className={homeActive ? styles.active : styles.disabled}
          >
            <FormattedMessage id="nav.home" />
          </AnchorLink>
          <div className={styles.drop_down}>
            <AnchorLink
              id="services"
              to="/#produktDesign"
              className={servicesActive ? styles.active : styles.disabled}
            >
              <FormattedMessage id="nav.services" />
            </AnchorLink>
            <div className={styles.drop_down_content}>
              <AnchorLink to="/#produktDesign">
                {" "}
                <FormattedMessage id="nav.productDesign" />
              </AnchorLink>
              <AnchorLink to="/#produktion">
                {" "}
                <FormattedMessage id="nav.production" />
              </AnchorLink>
              <AnchorLink to="/#importieren">
                {" "}
                <FormattedMessage id="nav.import" />
              </AnchorLink>
              <AnchorLink to="/#logistik">
                {" "}
                <FormattedMessage id="nav.logistic" />
              </AnchorLink>
            </div>
          </div>

          <Link id="about" to="/about" activeStyle={{ color: "white" }}>
            <FormattedMessage id="nav.about" />
          </Link>
        </nav>
        <div>
          <a
            href="https://www.victoryshop.ch/"
            rel="noreferrer"
            target="_blank"
          >
            <button>
              {" "}
              <FormattedMessage id="nav.shop" />
            </button>
          </a>
        </div>
        <div
          className={
            goTopApear ? styles.go_top_button : styles.go_top_button_disabled
          }
          role="button"
          tabIndex={0}
          onMouseEnter={() => setHover(true)}
          onFocus={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onBlur={() => setHover(false)}
        >
          {hover ? (
            <GoTopButton className={styles.svg} onClick={scrollTop} />
          ) : (
            <GoTopButton className={styles.svg} onClick={scrollTop} />
          )}
        </div>
      </div>
    </header>
  );
};

DesktopHeader.propTypes = {
  siteTitle: PropTypes.string,
};

export default injectIntl(DesktopHeader);
