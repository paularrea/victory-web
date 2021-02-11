import React, { useState } from "react";
import styles from "../../styles/about.module.scss";
// import BackGroundVideoImg from "./BackgroundVideoImg";
// import BackGroundImgMobile from "./BackgroundImgMobile";
// import MediaQuery from "react-responsive";
import video from "../../components/video/JOSIE.mp4";
import PlayIcon from "../../images/svg/play_video.svg";

const VideoComponent = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const clickToPlay = () => {
    setPlayVideo(true);
  };

  return (
    <div style={{ position: "relative", backgroundColor: "#1D1F2A" }}>
      {playVideo ? (
        <div className={styles.video_window}>
          <video controls autoPlay className={styles.video} >
          <source src={video} type="video/mp4"/>
          <source src={video} type="video/ogg"/>
          <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions"/>
          </video>
        </div>
      ) : (
        <div className={styles.video_window_img}>
            <div className={styles.flex_video_container}>
              <div className={styles.video_text}>
                <h2>WIR VERKAUFEN KUNDENSPEZIFISCHE B2B-LÖSUNGEN.</h2>
                <h5>Lassen Sie Ihr Unternehmen wachsen.</h5>
              </div>
              <div>
                <PlayIcon className={styles.play_icon} onClick={clickToPlay} />
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
