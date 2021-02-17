import React from "react";
import styles from "../../styles/logistik.module.scss";
import LogistikImg from "./logistikImg";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Masonry from "react-masonry-css";
import "./masonry.css";

import LogistikOne from "../icons/logistic-icons/logistikOne";
import LogistikTwo from "../icons/logistic-icons/logistikTwo";
import LogistikThree from "../icons/logistic-icons/logistikThree";
import LogistikFour from "../icons/logistic-icons/logistikFour";
import LogistikFive from "../icons/logistic-icons/logistikFive";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const LogistikDesktop = () => {
  return (
    <div className={styles.big_container}>
      <div id="logistik" className={styles.container}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <h2>
            <FormattedMessage id="logistic.title" />
          </h2>
          <h5>
            <FormattedMessage id="logistic.subtitle" />
          </h5>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <h4><FormattedMessage id="logistic.container.title" /></h4>
        </div>
        <div className={styles.bullet_container}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              className={styles.bullet}
            >
              <LogistikOne />
              <h5><FormattedMessage id="logistic.container.bullet1.title" /></h5>
              <p>
              <FormattedMessage id="logistic.container.bullet1.description" />
              </p>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="1000"
              className={styles.bullet}
            >
              <LogistikTwo />
              <h5><FormattedMessage id="logistic.container.bullet2.title" /></h5>
              <p>
              <FormattedMessage id="logistic.container.bullet2.description" />
              </p>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="1000"
              className={styles.bullet}
            >
              <LogistikThree />
              <h5><FormattedMessage id="logistic.container.bullet3.title" /></h5>
              <p>
              <FormattedMessage id="logistic.container.bullet3.description" />
              </p>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="400"
              data-sal-duration="1000"
              className={styles.bullet}
            >
              <LogistikFour />
              <h5><FormattedMessage id="logistic.container.bullet4.title" /></h5>
              <p>
              <FormattedMessage id="logistic.container.bullet4.description" />
              </p>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="1000"
              className={styles.bullet}
            >
              <LogistikFive />
              <h5><FormattedMessage id="logistic.container.bullet5.title" /></h5>
              <p>
              <FormattedMessage id="logistic.container.bullet5.description" />
              </p>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-duration="1000"
              className={styles.img_btn}
            >
              <LogistikImg />
              <div className={styles.button}>
                <AnchorLink to="/#contact">
                  <button><FormattedMessage id="logistic.button" /></button>
                </AnchorLink>
              </div>
            </div>
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(LogistikDesktop);
