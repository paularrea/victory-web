import React from "react";
import styles from "../../styles/fuhlen.module.scss";
import MediaQuery from "react-responsive";

import FuhlenDesktop from "./fuhlenDesktop";
import FuhlenImg from "./fuhlenImg";
import FuhlenLogo from "./fuhlenLogo";
import gif from "../../gif/victory.gif";

const Fuhlen = () => {
  return (
    <>
      <MediaQuery maxWidth={870}>
        <div data-sal="fade" data-sal-delay="100" data-sal-duration="1000">
          <FuhlenImg />
        </div>
        <div className={styles.fulhen_container}>
          <div
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-duration="1000"
          >
            <h1>FÜHLEN DEN SIEG</h1>
          </div>
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
            className={styles.container}
          >
            <h2>DAS KRONJUWEL</h2>
            <h5>
              Für Kunden, die keine eigenen Kollektionen entwickeln wollen,
              haben wir ebenfalls eine Lösung.
            </h5>
            <h5 style={{ color: "#1D1F2AB3", paddingTop: 0 }}>
              Victory Shop ist eine digitale Zentrale, in der die wichtigsten
              europäischen Grosshändlernzusammenleben. Das Beste aus ihren
              Produkten in einem einzigen Warenkorb. Sie benötigen nur ein paar
              Klicks.
            </h5>
            <a
              href="https://www.victoryshop.ch/"
              rel="noreferrer"
              target="_blank"
            >
              <button>VICTORY SHOP</button>
            </a>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={870}>
        <FuhlenDesktop />
      </MediaQuery>
    </>
  );
};

export default Fuhlen;
