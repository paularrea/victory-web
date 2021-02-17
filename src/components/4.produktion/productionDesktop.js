import React from "react";
import styles from "../../styles/produktion.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import ProduktionImg from "./productionImg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ProduktionDesktop = () => {
  return (
    <div className={styles.big_container}>
      <div id="produktion" className={styles.container}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <h2>
            <FormattedMessage id="production.title" />
          </h2>
          <h5>
            <FormattedMessage id="production.subtitle" />
          </h5>
          <hr className={styles.hr} />
        </div>
        <div className={styles.flex_container}>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease"
            className={styles.text_container}
          >
            <p>
              <FormattedMessage id="production.text1" />
            </p>
            <br />
            <p>
              <FormattedMessage id="production.text2" />
            </p>
            <br />
            <br />
            <p style={{ color: "#FFFFFFB3", opacity: "60%" }}>
              <FormattedMessage id="production.text3" />
            </p>
            <AnchorLink to="/#contact">
              <button>
                <FormattedMessage id="production.button" />
              </button>
            </AnchorLink>
          </div>
          <div
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease"
            className={styles.img_container}
          >
            <ProduktionImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(ProduktionDesktop);
