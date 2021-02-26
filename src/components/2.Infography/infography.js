import React, { useState, useEffect } from "react";
import styles from "../../styles/infography.module.scss";
import MediaQuery from "react-responsive";
import InfographyDesktop from "./infographyDesktop";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import ProduktDesignIcon from "../../images/pngs/Produktdesign.png";
import ProduktionIcon from "../../images/pngs/Produktion.png";
import LogistikIcon from "../../images/pngs/Logistik-Dienste.png";
import ImportationIcon from "../../images/pngs/Importation.png";
import ErfolgreichesIcon from "../../images/pngs/Erfolgreiches  Unternehmen.png";

import ProduktDesignGif from "../../gif/Produktdesign-mobile.gif";
import ProduktionGif from "../../gif/Produktion-mobile.gif";
import LogistikGif from "../../gif/Logistik-mobile.gif";
import ImportationGif from "../../gif/Importation-mobile.gif";
import ErfolgreichesGif from "../../gif/Erfolgreiches-mobile.gif";
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
    }, 1100);
    setTimeout(() => {
      setStart2(true);
    }, 1200);
    setTimeout(() => {
      setStart3(true);
    }, 1300);
    setTimeout(() => {
      setStart4(true);
    }, 1400);
    setTimeout(() => {
      setIconsStart(true);
    }, 5000);
  }, []);
  
  return (
    <>
      <MediaQuery maxWidth={870}>
        <div className={styles.container}>
          <div className={styles.infography_container}>
            <div className={styles.grey_container}>
              <div className={styles.logo_flex}>
                <img src={iconsStart ? ProduktDesignGif : ProduktDesignIcon} alt="Produktdesign icon" />
                <p>
                  <FormattedMessage id="seo.productDesign" />
                </p>
              </div>
              <Separador className={start1 && styles.fade_infinite} />
              <div className={styles.logo_flex}>
                <img src={iconsStart ? ProduktionGif : ProduktionIcon} alt="Produktion icon" />
                <p>
                  <FormattedMessage id="seo.production" />
                </p>
              </div>
              <Separador className={start2 && styles.fade_infinite} />
              <div className={styles.logo_flex}>
                <img src={iconsStart ? ImportationGif : ImportationIcon} alt="Importation icon" />
                
                <p>
                  <FormattedMessage id="seo.import" />
                </p>
              </div>
              <Separador className={start3 && styles.fade_infinite} />
              <div className={styles.logo_flex}>
                <img src={iconsStart ? LogistikGif : LogistikIcon} alt="Logistic icon" />
                <p>
                  <FormattedMessage id="seo.logistic" />
                </p>
              </div>
              <Separador className={start4 && styles.fade_infinite} />
              <div className={styles.logo_flex_last}>
                <div>
                  <img src={iconsStart ? ErfolgreichesGif : ErfolgreichesIcon} alt="success icon" />
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
