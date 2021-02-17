import React from "react";
import styles from "../../styles/importieren.module.scss";
import ImportierenImg from "./importierenImg";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Importieren = () => {
  return (
    <div className={styles.big_container}>
      <div id="importieren" className={styles.container}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <h2>
            <FormattedMessage id="import.title" />
          </h2>
          <h5>
            <FormattedMessage id="import.subtitle" />
          </h5>
        </div>
        <div
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className={styles.flex_container}
        >
          <ImportierenImg />
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease"
            className={styles.text_container}
          >
            <p className={styles.big_p}>
              <FormattedMessage id="import.text1" />
            </p>
            <br />
            <p>
              <FormattedMessage id="import.text2" />
            </p>
            <AnchorLink to="/#contact">
              <button>
                <FormattedMessage id="import.button" />
              </button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Importieren);
