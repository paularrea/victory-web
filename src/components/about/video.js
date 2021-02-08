import React from "react";
import styles from "../../styles/about.module.scss";
import BackGroundVideoImg from "./BackgroundVideoImg";
import BackGroundImgMobile from "./BackgroundImgMobile"
import MediaQuery from "react-responsive"

const VideoComponent = () => {
  return (
    <div style={{position:'relative', backgroundColor:'transparent'}}>
      <div className={styles.background_img}>
      <MediaQuery maxWidth={700}>
        <BackGroundImgMobile/>
      </MediaQuery>
      <MediaQuery minWidth={700}>
        <BackGroundVideoImg />
      </MediaQuery>
      </div>
      <div className={styles.video_container}>
        <div className={styles.video_text}>
          <h2>WIR VERKAUFEN KUNDENSPEZIFISCHE B2B-LÖSUNGEN.</h2>
          <h5>Lassen Sie Ihr Unternehmen wachsen.</h5>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
