import React from "react";
import HomeImgDesktop from "./homeImgDesktop";
import styles from "../../styles/intro.module.scss";

const DesktopIntro = () => {
  return (
    <div className={styles.big_container}>
      <div id="home" className={styles.container}>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={styles.intro_container}
        >
          <h2>B2B Unternehmen auf dem schweizer Markt</h2>
          <h4>Wir verkaufen spezifische Lösungen.</h4>
          <div
            data-sal="slide-up"
            data-sal-delay="250"
            data-sal-duration="1000"
            className={styles.btn_container}
          >
            <div>
              <a
                href="https://www.victoryshop.ch/"
                rel="noreferrer"
                target="_blank"
              >
                <button>RUFEN SIE UNS AN</button>
              </a>
            </div>

            <div>
              <a
                href="https://www.victoryshop.ch/"
                rel="noreferrer"
                target="_blank"
              >
                <button>DEN SHOP BESUCHEN</button>
              </a>
            </div>
          </div>
        </div>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <HomeImgDesktop />
        </div>
      </div>
    </div>
  );
};

export default DesktopIntro;
