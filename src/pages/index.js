import React, {useState, useEffect} from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import styles from "../styles/index.module.scss";
import { injectIntl } from "gatsby-plugin-intl"
import Logo from "../gif/animation.gif"

import Intro from "../components/1.intro/intro";
import Infography from "../components/2.Infography/infography";
import ProduktDesign from "../components/3.produktDesign/produktDesign";
import Produktion from "../components/4.produktion/produktion";
import Importieren from "../components/5.importieren/importieren";
import Logistik from "../components/6.logistik/logistik";
import Fulhen from "../components/7.fuhlen/fuhlen";
import ContactForm from "../components/8.Contact/contact";
// import Blog from "../components/9.Blog/blog";

const IndexPage = ({intl}) => {
  const [lateEntry, setLateEntry] = useState(false);

  useEffect(() => {
    const entry = setTimeout(() => {
      setLateEntry(true)
    }, 2400)
    return () => clearTimeout(entry)
  }, [lateEntry])

  return(
  <div className={styles.website}>
      {!lateEntry && (
        <div className={styles.on_load}>
          <div className={styles.animation}>
            <img src={Logo} alt="Logo intro" />
          </div>
        </div>
      )}
    <Layout>
    <SEO
        title={intl.formatMessage({ id: "title" })}
      />
      <div>
        <Intro />
      </div>
      <div>
        <Infography />
      </div>
      <div>
        <ProduktDesign />
      </div>
      <div>
        <Produktion />
      </div>
      <div>
        <Importieren />
      </div>
      <div>
        <Logistik />
      </div>
      <div>
        <Fulhen />
      </div>
      <div>
        <ContactForm />
      </div>
      {/* <div>
        <Blog />
      </div> */}
    </Layout>
  </div>)
};

export default injectIntl(IndexPage);
