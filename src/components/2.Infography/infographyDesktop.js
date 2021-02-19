import React from "react";
import styles from "../../styles/infography.module.scss";

import ProduktDesignIcon from "../../gif/Produktdesign.gif";
import ProduktionIcon from "../../gif/Produktion.gif";
import LogistikIcon from "../../gif/Logistik.gif";
import ImportationIcon from "../../gif/Importation.gif";
import ErfolgreichesIcon from "../../gif/Erfolgreiches.gif";

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
            <img src={ProduktDesignIcon} alt="Produktdesign icon" />
            <p>Produktdesign</p>
          </div>
          f
          <div className={styles.logo_flex}>
            <img src={ProduktionIcon} alt="Produktdesign icon" />
            <p>Produktion</p>
          </div>
          f
          <div className={styles.logo_flex}>
            <img src={ImportationIcon} alt="Produktdesign icon" />
            <p>Importieren</p>
          </div>
          f
          <div className={styles.logo_flex}>
            <img src={LogistikIcon} alt="Produktdesign icon" />
            <p>Logistik-Dienste</p>
          </div>
        </div>
        <p>f</p>
        <div className={styles.orange_container}>
          <div className={styles.logo_flex}>
            <img src={ErfolgreichesIcon} alt="Produktdesign icon" />
            <p>Erfolgreiches Unternehmen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographyDesktop;
