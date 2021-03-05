import React from "react";
import HomeImgDesktop from "./homeImgDesktop";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "../../styles/intro.module.scss";

const DesktopIntro = () => {
  return (
    <div className={styles.big_container}>
      <div id="home" className={styles.container}>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={styles.intro_container}
        >
          <h2>
            {" "}
            <FormattedMessage id="intro.title" />
          </h2>
          <h4>
            <FormattedMessage id="intro.subtitle" />
          </h4>
          <div
            data-sal="slide-up"
            data-sal-delay="250"
            data-sal-duration="1000"
            className={styles.btn_container}
          >
            <div>
              <a href="tel:+41313019439">
                <button>
                  <FormattedMessage id="intro.button1" />
                </button>
              </a>
            </div>

            <div>
              <a
                href="https://www.victoryshop.ch/"
                rel="noreferrer"
                target="_blank"
              >
                <button>
                  <FormattedMessage id="intro.button2" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <HomeImgDesktop />
        </div>
      </div>
    </div>
  );
};

export default injectIntl(DesktopIntro);
