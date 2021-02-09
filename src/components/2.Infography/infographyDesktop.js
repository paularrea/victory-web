import React from "react";
import DesktopImage from "./DesktopImage";
import styles from "../../styles/infography.module.scss"

const InfographyDesktop = () => {
  return (
    <div className={styles.infography_img_container}>
      <div className={styles.infography_img}>
        <DesktopImage />
      </div>
    </div>
  );
};

export default InfographyDesktop;
