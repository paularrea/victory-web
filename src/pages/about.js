import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import DesktopImage from "../components/about/DesktopImage";

import styles from "../styles/about.module.scss";
import TeamList from "../components/about/team";
import ContactAbout from "../components/about/contactAbout";
import VideoComponent from "../components/about/video";
import BlogAbout from "../components/9.Blog/blogAbout";

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className={styles.video}>
        <VideoComponent />
      </div>
      <div className={styles.big_container}>
        <div id="id" className={styles.container}>
          <div
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <h2>
              <FormattedMessage id="about.title" />
            </h2>
            <h5>
              <FormattedMessage id="about.subtitle" />
            </h5>
          </div>
        </div>
        <div className={styles.flex_container}>
          <div
            data-sal="fade"
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            <DesktopImage />
          </div>

          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
            data-sal-easing="ease"
            className={styles.text_container}
          >
            <p className={styles.big_p}>
            <FormattedMessage id="about.text1" />
            </p>
            <br />
            <p>
            <FormattedMessage id="about.text2" />
            </p>
          </div>
        </div>
        <div id="id" className={styles.container}>
          <hr className={styles.hr} />
        </div>
        <TeamList />
        <ContactAbout />
        <BlogAbout />
      </div>
    </Layout>
  );
};

export default injectIntl(About);
