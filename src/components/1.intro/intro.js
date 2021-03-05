import React from "react";
import HomeOne from "./homeOne";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "../../styles/intro.module.scss";
import MediaQuery from "react-responsive";
import DesktopIntro from "./desktopIntro";

const Intro = () => {
  return (
    <>
      <MediaQuery maxWidth={700}>
        <div id="home" className={styles.container}>
          <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
            <HomeOne />
          </div>
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
              {" "}
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
                    {" "}
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
                    {" "}
                    <FormattedMessage id="intro.button2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={700}>
        <DesktopIntro />
      </MediaQuery>
    </>
  );
};

export default injectIntl(Intro);
