import React from "react";
import styles from "../../styles/fuhlen.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import FuhlenImgDesktop from "./fuhlenImgDesktop";
import FuhlenLogo from "./fuhlenLogo";
import gif from "../../gif/victory.gif";

const FuhlenDesktop = () => {
  return (
    <div className={styles.fulhen_container}>
      <div className={styles.img_bg_container}>
        <div
          className={styles.img_desktop}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1000"
        >
          <FuhlenImgDesktop />
        </div>
        <div
          className={styles.title_container}
          data-sal="fade"
          data-sal-delay="200"
          data-sal-duration="1000"
        >
          <h1>
            <FormattedMessage id="fuhlen.title" />
          </h1>
        </div>
      </div>
      <div className={styles.big_container}>
        <div className={styles.container}>
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
            className={styles.text_container}
          >
            <h2>
              <FormattedMessage id="fuhlen.title2" />
            </h2>
            <h5>
              <FormattedMessage id="fuhlen.subtitle" />
            </h5>
            <p style={{ color: "#1D1F2AB3", paddingTop: 0 }}>
              <FormattedMessage id="fuhlen.text1" />
            </p>
            <div>
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
        </div>
      </div>
    </div>
  );
};

export default injectIntl(FuhlenDesktop);
