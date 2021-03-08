import React, { useState, useEffect } from "react";
import styles from "../../styles/about.module.scss";
import videoFr from "../../video/presentationFR.mp4"
import videoDe from "../../video/presentationDE.mp4"
import videoEn from "../../video/presentationEN.mp4"

const LanguageVideo = () => {
  const [french, setFrench] = useState(false);
  const [english, setEnglish] = useState(false);
  const [deuch, setDeuch] = useState(false);

  useEffect(() => {
    if (window.location.href.indexOf("fr") > -1) {
      setFrench(true);
    } else if (window.location.href.indexOf("en") > -1) {
      setEnglish(true);
    } else if (window.location.href.indexOf("de") > -1) {
      setDeuch(true);
    }
  }, []);
  return (
    <div>
      {french && (
 <video controls autoPlay className={styles.video}>
 <source src={videoFr} type="video/mp4" />
 <source src={videoFr} type="video/ogg" />
 <track
   src="captions_en.vtt"
   kind="captions"
   srclang="en"
   label="english_captions"
 />
</video>
      )}
      {english && (
 <video controls autoPlay className={styles.video}>
 <source src={videoEn} type="video/mp4" />
 <source src={videoEn} type="video/ogg" />
 <track
   src="captions_en.vtt"
   kind="captions"
   srclang="en"
   label="english_captions"
 />
</video>
      )}
      {deuch && (
 <video controls autoPlay className={styles.video}>
 <source src={videoDe} type="video/mp4" />
 <source src={videoDe} type="video/ogg" />
 <track
   src="captions_en.vtt"
   kind="captions"
   srclang="en"
   label="english_captions"
 />
</video>
      )}
    </div>
  );
};

export default LanguageVideo;
