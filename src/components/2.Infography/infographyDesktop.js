import React from "react";
import styles from "../../styles/infography.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import ProduktDesignIcon from "../../gif/Produktdesign.gif";
import ProduktionIcon from "../../gif/Produktion.gif";
import LogistikIcon from "../../gif/Logistik.gif";
import ImportationIcon from "../../gif/Importation.gif";
import ErfolgreichesIcon from "../../gif/Erfolgreiches.gif";
import Separador from "../../images/svg/flechas.svg";

const InfographyDesktop = () => {
  return (
    <div
      data-sal="fade"
      data-sal-delay="100"
      data-sal-duration="1000"
      data-sal-easing="ease"
      className={styles.infography_img_container}
    >
      <div className={styles.infography_img}>
        <div className={styles.grey_container}>
          <div className={styles.logo_flex}>
            <img src={ProduktDesignIcon} alt="product design icon" />
            <p>
              {" "}
              <FormattedMessage id="seo.productDesign" />
            </p>
          </div>
          <Separador />
          <div className={styles.logo_flex}>
            <img src={ProduktionIcon} alt="production icon" />
            <p>
              {" "}
              <FormattedMessage id="seo.production" />
            </p>
          </div>
          <Separador />
          <div className={styles.logo_flex}>
            <img src={ImportationIcon} alt="importation icon" />
            <p>
              {" "}
              <FormattedMessage id="seo.import" />
            </p>
          </div>
          <Separador />
          <div className={styles.logo_flex}>
            <img src={LogistikIcon} alt="logistic icon" />
            <p>
              {" "}
              <FormattedMessage id="seo.logistic" />
            </p>
          </div>
        </div>
        <Separador />
        <div className={styles.orange_container}>
          <div className={styles.logo_flex}>
            <img src={ErfolgreichesIcon} alt="Produktdesign icon" />
            <p>
              {" "}
              <FormattedMessage id="seo.success" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(InfographyDesktop);
