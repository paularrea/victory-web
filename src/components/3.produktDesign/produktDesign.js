import React from "react";
import styles from "../../styles/produktDesign.module.scss";
import PDImg from "./pdImg";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import MediaQuery from "react-responsive";
import PDDesktopImg from "./pdDesktopImg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ProduktDesign = () => {
  return (
    <div className={styles.big_container}>
      <div id="produktDesign" className={styles.container}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <h2>
            {" "}
            <FormattedMessage id="productDesign.title" />
          </h2>
          <h4>
            <FormattedMessage id="productDesign.subtitle" />
          </h4>
          <h5>
            <FormattedMessage id="productDesign.subtitle2" />
          </h5>
        </div>
        <hr />
        <div
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1000"
          data-sal-easing="ease"
          className={styles.flex_container}
        >
          <MediaQuery maxWidth={800}>
            <div>
              <PDImg />
            </div>
          </MediaQuery>
          <MediaQuery minWidth={800}>
            <div>
              <PDDesktopImg />
            </div>
          </MediaQuery>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease"
            className={styles.text_container}
          >
            <p className={styles.big_p}>
              <FormattedMessage id="productDesign.bigText" />
            </p>
            <br />
            <p>
              <FormattedMessage id="productDesign.text1" />
            </p>
            <br />
            <p>
              <FormattedMessage id="productDesign.text2" />
            </p>
            <AnchorLink to="/#contact">
              <button>
                <FormattedMessage id="productDesign.button" />
              </button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(ProduktDesign);
