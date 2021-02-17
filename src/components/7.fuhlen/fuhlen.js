import React from "react";
import styles from "../../styles/fuhlen.module.scss";
import MediaQuery from "react-responsive";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import FuhlenDesktop from "./fuhlenDesktop";
import FuhlenImg from "./fuhlenImg";
import FuhlenLogo from "./fuhlenLogo";
import gif from "../../gif/victory.gif";

const Fuhlen = () => {
  return (
    <>
      <MediaQuery maxWidth={870}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <FuhlenImg />
        </div>
        <div className={styles.fulhen_container}>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
          >
            <h1>
              <FormattedMessage id="fuhlen.title" />
            </h1>
          </div>
          <div
            className={styles.img_container}
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
          >
            <div className={styles.logo}>
              <FuhlenLogo />
            </div>
            <img src={gif} alt="macbook gif" />
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            className={styles.container}
          >
            <h2>
              <FormattedMessage id="fuhlen.title2" />
            </h2>
            <h5>
              <FormattedMessage id="fuhlen.subtitle" />
            </h5>
            <h5 style={{ color: "#1D1F2AB3", paddingTop: 0 }}>
              <FormattedMessage id="fuhlen.text1" />
            </h5>
            <a
              href="https://www.victoryshop.ch/"
              rel="noreferrer"
              target="_blank"
            >
              <button>
                <FormattedMessage id="fuhlen.button" />
              </button>
            </a>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={870}>
        <FuhlenDesktop />
      </MediaQuery>
    </>
  );
};

export default injectIntl(Fuhlen);
