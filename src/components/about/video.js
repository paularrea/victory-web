import React, { useState } from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import styles from "../../styles/about.module.scss";
import video from "../../video/presentation.mp4";
import PlayIcon from "../../images/svg/play_video.svg";
import classNames from "classnames";

const VideoComponent = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const clickToPlay = () => {
    setPlayVideo(true);
  };

  return (
    <div
      data-sal="fade"
      data-sal-delay="100"
      data-sal-duration="1000"
      style={{ position: "relative", backgroundColor: "#1D1F2A" }}
    >
      {playVideo ? (
        <div
          className={classNames(styles.video_window, styles.video_window_show)}
        >
          <video controls autoPlay className={styles.video}>
            <source src={video} type="video/mp4" />
            <source src={video} type="video/ogg" />
            <track
              src="captions_en.vtt"
              kind="captions"
              srclang="en"
              label="english_captions"
            />
          </video>
        </div>
      ) : (
        <div className={styles.video_window_img}>
          <div className={styles.flex_video_container}>
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-duration="1000"
              className={styles.video_text}
            >
              <h2>
                <FormattedMessage id="about.videoText" />
              </h2>
              <h5>
                <FormattedMessage id="about.videoSubtext" />
              </h5>
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

export default injectIntl(VideoComponent);
