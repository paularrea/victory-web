import React from "react";
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
  return (
    <>
      <MediaQuery maxWidth={870}>
        <div className={styles.container}>
          <div className={styles.infography_container}>
            <div className={styles.grey_container}>
              <div className={styles.logo_flex}>
                <img src={ProduktDesignIcon} alt="Produktdesign icon" />
                <p>
                  <FormattedMessage id="seo.productDesign" />
                </p>
              </div>
              <Separador />
              <div className={styles.logo_flex}>
                <img src={ProduktionIcon} alt="Produktion icon" />
                <p>
                  <FormattedMessage id="seo.production" />
                </p>
              </div>
              <Separador />
              <div className={styles.logo_flex}>
                <img src={ImportationIcon} alt="Importation icon" />
                <p>
                  <FormattedMessage id="seo.import" />
                </p>
              </div>
              <Separador />
              <div className={styles.logo_flex}>
                <img src={LogistikIcon} alt="Logistic icon" />
                <p>
                  <FormattedMessage id="seo.logistic" />
                </p>
              </div>
              <Separador />
              <div className={styles.logo_flex_last}>
                <div>
                  <img src={ErfolgreichesIcon} alt="success icon" />
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
