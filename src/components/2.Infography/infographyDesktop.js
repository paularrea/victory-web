import React, {useState, useEffect} from "react";
import styles from "../../styles/infography.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";

import ProduktDesignIcon from "../../gif/Produktdesign.gif";
import ProduktionIcon from "../../gif/Produktion.gif";
import LogistikIcon from "../../gif/Logistik.gif";
import ImportationIcon from "../../gif/Importation.gif";
import ErfolgreichesIcon from "../../gif/Erfolgreiches.gif";
import Separador from "../../images/svg/flechas.svg";

const InfographyDesktop = () => {
const [start1, setStart1] = useState(false);
const [start2, setStart2] = useState(false);
const [start3, setStart3] = useState(false);
const [start4, setStart4] = useState(false);

useEffect(() => {
setTimeout(() => {
  setStart1(true)
}, 1000);
setTimeout(() => {
  setStart2(true)
}, 1300);
setTimeout(() => {
  setStart3(true)
}, 1600);
setTimeout(() => {
  setStart4(true)
}, 1900);
}, [])

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
          <Separador className={start1 && styles.fade_infinite} />
          <div className={styles.logo_flex}>
            <img src={ProduktionIcon} alt="production icon" />
            <p>
              {" "}
              <FormattedMessage id="seo.production" />
            </p>
          </div>
          <Separador className={start2 && styles.fade_infinite} />
          <div className={styles.logo_flex}>
            <img src={ImportationIcon} alt="importation icon" />
            <p>
              {" "}
              <FormattedMessage id="seo.import" />
            </p>
          </div>
          <Separador className={start3 && styles.fade_infinite} />
          <div className={styles.logo_flex}>
            <img src={LogistikIcon} alt="logistic icon" />
            <p>
              {" "}
              <FormattedMessage id="seo.logistic" />
            </p>
          </div>
        </div>
        <Separador className={start4 && styles.fade_infinite} />
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
