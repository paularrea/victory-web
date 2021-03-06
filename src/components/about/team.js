import React from "react";
import styles from "../../styles/about.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import DanielImg from "./teamImages/daniel";
import ChristinaImg from "./teamImages/christina";
import OsmelImg from "./teamImages/osmel";
import IsalineImg from "./teamImages/isaline";
import NehatImg from "./teamImages/nehat";
import SivanImg from "./teamImages/sivan";
import YanickImg from "./teamImages/yanick";
import BrunoImg from "./teamImages/bruno";

const TeamList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex_list}>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={styles.team_member}
        >
          <DanielImg />
          <h4>Daniel Gerber Sommer</h4>
          <p>
            <FormattedMessage id="about.position1" />
          </p>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-duration="1000"
          className={styles.team_member}
        >
          <ChristinaImg />
          <h4>Christina Stuerchler</h4>
          <p>
            <FormattedMessage id="about.position2" />
          </p>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-duration="1000"
          className={styles.team_member}
        >
          <OsmelImg />
          <h4>Osmel Teran</h4>
          <p>
            <FormattedMessage id="about.position3" />
          </p>
        </div>
      </div>
      <div className={styles.flex_list}>
        <div
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration="1000"
          className={styles.team_member}
        >
          <IsalineImg />
          <h4>Isaline Salomon</h4>
          <p>
            <FormattedMessage id="about.position4" />
          </p>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration="1000"
          className={styles.team_member}
        >
          <NehatImg />
          <h4>Nehat Shalaku</h4>
          <p>
            <FormattedMessage id="about.position5" />
          </p>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="600"
          data-sal-duration="1000"
          className={styles.team_member}
        >
          <SivanImg />
          <h4>Sivan Sanjayanan</h4>
          <p>
            <FormattedMessage id="about.position6" />
          </p>
        </div>
      </div>
      <div className={styles.flex_list}>
        <div
          data-sal="slide-up"
          data-sal-delay="700"
          data-sal-duration="1000"
          className={styles.team_member}
        >
          <YanickImg />
          <h4>Yanick Zahnd</h4>
          <p>
            <FormattedMessage id="about.position7" />
          </p>
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="800"
          data-sal-duration="1000"
          className={styles.team_member}
        >
          <BrunoImg />
          <h4>Bruno</h4>
          <p>
            <FormattedMessage id="about.position8" />
          </p>
        </div>
        <div className={styles.team_member_none}></div>
      </div>
    </div>
  );
};

export default injectIntl(TeamList);
