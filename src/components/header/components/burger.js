import React, { useState } from "react";
import { fallDown as Menu } from "react-burger-menu";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import "./burger.css";
import Logo from "./logo";
import Link from "../../Link";
import Language from "../../language";

import PhoneIcon from "../../../images/svg/PHONE.svg";
import LinkedInIcon from "../../../images/svg/Linkedin_icon.svg";
import FacebookIcon from "../../../images/svg/Facebook_icon.svg";
import YoutubeIcon from "../../../images/svg/Youtube_icon.svg";
import TwitterIcon from "../../../images/svg/Twitter_icon.svg";
import InstagramIcon from "../../../images/svg/Instagram_icon.svg";

const Burger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="hideBar"></div>
      <Menu
        right
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <div className="logo-menu">
          <Logo />
        </div>
        <nav className="bm-item-list">
          <Link id="home" className="menu-item" to="/#home">
            <div
              role="link"
              className="anchor-div"
              onClick={() => {
                closeMenu();
              }}
              onKeyDown={() => {
                closeMenu();
              }}
              tabIndex={0}
            >
              {" "}
              <FormattedMessage id="nav.home" />
            </div>
          </Link>
          <hr />
          <Link className="menu-item" to="/#produktDesign">
            <div
              role="link"
              className="anchor-div"
              onClick={() => {
                closeMenu();
              }}
              onKeyDown={() => {
                closeMenu();
              }}
              tabIndex={0}
            >
              {" "}
              <FormattedMessage id="nav.mobileServices" />
            </div>
          </Link>
          <hr />
          <Link id="about" className="menu-item" to="/about">
            <div
              role="link"
              className="anchor-div"
              onClick={() => {
                closeMenu();
              }}
              onKeyDown={() => {
                closeMenu();
              }}
              tabIndex={0}
            >
              {" "}
              <FormattedMessage id="nav.about" />
            </div>
          </Link>
          <hr />
        </nav>

        <div className="language-container">
          <Language />
          <div className="contact-flex">
            <PhoneIcon />
            <a href="tel:+41313019439" rel="noreferrer" target="_blank">+41 31 301 94 39</a>
          </div>
        </div>
        
        <div className="follow-container">
          <hr />
          <h3>Folge uns</h3>
          <ul className="media-list">
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
      </Menu>
    </>
  );
};

export default injectIntl(Burger);
