import React, { useState, useEffect } from "react";
import styles from "../../styles/infography.module.scss";
import MediaQuery from "react-responsive";
import InfographyDesktop from "./infographyDesktop";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import ProduktDesignIcon from "../../gif/Produktdesign-mobile.gif";
import ProduktionIcon from "../../gif/Produktion-mobile.gif";
import LogistikIcon from "../../gif/Logistik-mobile.gif";
import ImportationIcon from "../../gif/Importation-mobile.gif";
import ErfolgreichesIcon from "../../gif/Erfolgreiches-mobile.gif";
import Separador from "../../images/svg/separador_mobile.svg";

const Infography = () => {
  const [start1, setStart1] = useState(false);
  const [start2, setStart2] = useState(false);
  const [start3, setStart3] = useState(false);
  const [start4, setStart4] = useState(false);
  const [iconsStart, setIconsStart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStart1(true);
    }, 1000);
    setTimeout(() => {
      setStart2(true);
    }, 1300);
    setTimeout(() => {
      setStart3(true);
    }, 1600);
    setTimeout(() => {
      setStart4(true);
    }, 1900);
    setTimeout(() => {
      setIconsStart(true);
    }, 2000);
  }, []);
  return (
    <>
      <MediaQuery maxWidth={870}>
        <div className={styles.container}>
          <div className={styles.infography_container}>
            <div className={styles.grey_container}>
              <div className={styles.logo_flex}>
                <img src={iconsStart && ProduktDesignIcon} alt="Produktdesign icon" />
                <p>
                  <FormattedMessage id="seo.productDesign" />
                </p>
              </div>
              <Separador className={start1 && styles.fade_infinite} />
              <div className={styles.logo_flex}>
                <img src={iconsStart && ProduktionIcon} alt="Produktion icon" />
                <p>
                  <FormattedMessage id="seo.production" />
                </p>
              </div>
              <Separador className={start2 && styles.fade_infinite} />
              <div className={styles.logo_flex}>
                <img src={iconsStart && ImportationIcon} alt="Importation icon" />
                <p>
                  <FormattedMessage id="seo.import" />
                </p>
              </div>
              <Separador className={start3 && styles.fade_infinite} />
              <div className={styles.logo_flex}>
                <img src={iconsStart && LogistikIcon} alt="Logistic icon" />
                <p>
                  <FormattedMessage id="seo.logistic" />
                </p>
              </div>
              <Separador className={start4 && styles.fade_infinite} />
              <div className={styles.logo_flex_last}>
                <div>
                  <img src={iconsStart && ErfolgreichesIcon} alt="success icon" />
                  <p>
                    <FormattedMessage id="seo.success" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={870}>
        <InfographyDesktop />
      </MediaQuery>
    </>
  );
};

export default injectIntl(Infography);
