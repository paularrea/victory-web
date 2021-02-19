import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import MediaQuery from "react-responsive";
import DesktopHeader from "./components/desktopHeader";

import styles from "../../styles/header.module.scss";
import Logo from "./components/logo";
import Burger from "./components/burger";

const Header = () => (
  <>
    <MediaQuery maxWidth={870}>
      <header>
        <div className={styles.navBar}>
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className={styles.burger}>
            <Burger />
          </div>
        </div>
      </header>
    </MediaQuery>
    <MediaQuery minWidth={870}>
      <div className={styles.big_container}>
          <DesktopHeader />
      </div>
    </MediaQuery>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
