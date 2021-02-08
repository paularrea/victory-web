import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
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
   
      <div id="id" className={styles.container}>
        <div
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1000"
          data-sal-easing="ease"
        >
          <h2>ÜBER UNS</h2>
          <h5>
            Sehr geehrte Kunden möchten wir Ihnen einen Überblick über unsere
            Aktivitäten und unser Leistungsspektrum geben.
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
              Victory Switzerland GmbH ist seit ihrer Gründung im Jahr 2012 als
              Importeur / Grosshändler tätig und kauft weltweit für ihre Kunden
              ein. Aufgrund der Vielfalt unserer Kunden wird unser Sortiment
              ständig erweitert.
            </p>
            <br />
            <p>
              Wir sind ein internationales Team, in dem verschiedene Kulturen
              zusammenfallen, die unseren Arbeitsprozess bereichern. Wir
              bekennen uns zu den ethischen und moralischen Werten, die unsere
              Arbeits- und Lebensphilosophie bestimmen.
            </p>
        </div>
      </div>
      <div id="id" className={styles.container}>
        <hr className={styles.hr} />
      </div>
      <TeamList />
      <ContactAbout />
      <BlogAbout />
    </Layout>
  );
};

export default About;
