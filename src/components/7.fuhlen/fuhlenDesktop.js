import React from "react";
import styles from "../../styles/fuhlen.module.scss";

import FuhlenImgDesktop from "./fuhlenImgDesktop";
import FuhlenLogo from "./fuhlenLogo";
import gif from "../../gif/victory.gif";

const FuhlenDesktop = () => {
  return (
    <div className={styles.fulhen_container}>
      <div className={styles.img_bg_container}>
       <div className={styles.img_desktop} data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
        <FuhlenImgDesktop />
      </div> 
      <div className={styles.title_container} data-sal="fade" data-sal-delay="200" data-sal-duration="1000">
        <h1>FÜHLEN DEN SIEG</h1>
      </div>
      </div>
      <div className={styles.big_container}>
      <div className={styles.container}>
        <div
          className={styles.img_container}
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1000"
        >
          <div className={styles.logo}>
            <FuhlenLogo />
          </div>
          <img src={gif} alt="macbook gif" />
        </div>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={styles.text_container}
        >
          <h2>DAS KRONJUWEL</h2>
          <h5>
            Für Kunden, die keine eigenen Kollektionen entwickeln wollen, haben
            wir ebenfalls eine Lösung.
          </h5>
          <p style={{ color: "#1D1F2AB3", paddingTop: 0 }}>
            Victory Shop ist eine digitale Zentrale, in der die wichtigsten
            europäischen Grosshändlernzusammenleben. Das Beste aus ihren
            Produkten in einem einzigen Warenkorb. Sie benötigen nur ein paar
            Klicks.
          </p>
          <button>
            <a
              href="https://www.victoryshop.ch/en/"
              rel="noreferrer"
              target="_blank"
            >
              VICTORY SHOP
            </a>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FuhlenDesktop;
