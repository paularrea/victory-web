import React from "react";
import styles from "../../styles/clients.module.scss";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/carousel.css"
import { Carousel } from "react-responsive-carousel";

import britishAmericanTobacco from "../../images/logos/britishAmericanTobacco.png";
import conforama from "../../images/logos/conforama.png";
import coop from "../../images/logos/coop.png";
import denner from "../../images/logos/denner.png";

import drBahler from "../../images/logos/drBahler.png";
import dropa from "../../images/logos/dropa.png";
import galexis from "../../images/logos/galexis.png";
import globus from "../../images/logos/globus.png";

import herbaCollection from "../../images/logos/herbaColection.png";
import importe from "../../images/logos/importe.png";
import Landi from "../../images/logos/Landi.png";
import lipo from "../../images/logos/lipo.png";

import loeb from "../../images/logos/loeb.png";
import manor from "../../images/logos/manor.png";
import migros from "../../images/logos/migros.png";
import officeWorld from "../../images/logos/officeWorld.png";

import ottos from "../../images/logos/ottos.png";
import prodega from "../../images/logos/prodega.png";
import promena from "../../images/logos/promena.png";
import restoshop from "../../images/logos/restoshop.png";

import spar from "../../images/logos/spar.png";
import swidro from "../../images/logos/swidro.png";
import toppharm from "../../images/logos/toppharm.png";
import valora from "../../images/logos/valora.png";

import verbego from "../../images/logos/verbego.png";
import volg from "../../images/logos/volg.png";

const ClientsComponent = () => {
  return (
    <div className={styles.container}>
      <h2>
        <FormattedMessage id="clients.title" />
      </h2>
      <Carousel autoPlay interval={3000} stopOnHover infiniteLoop>
        <div className={styles.flex_container}>
          <div>
            <img src={britishAmericanTobacco} alt="patagonia Logo" />
          </div>
          <div>
            <img src={conforama} alt="unicef Logo" />
          </div>
          <div>
            <img src={coop} alt="greenpeace Logo" />
          </div>
          <div>
            <img src={denner} alt="greenpeace Logo"  />
          </div>
        </div>

        <div className={styles.flex_container}>
          <div>
            <img src={drBahler} alt="patagonia Logo" />
          </div>
          <div>
            <img src={dropa} alt="unicef Logo" />
          </div>
          <div>
            <img src={galexis} alt="greenpeace Logo" />
          </div>
          <div>
            <img src={globus} alt="greenpeace Logo" />
          </div>
        </div>

        <div className={styles.flex_container}>
          <div>
            <img src={herbaCollection} alt="patagonia Logo" />
          </div>
          <div>
            <img src={importe} alt="unicef Logo" />
          </div>
          <div>
            <img src={Landi} alt="greenpeace Logo" />
          </div>
          <div>
            <img src={lipo} alt="greenpeace Logo" />
          </div>
        </div>

        <div className={styles.flex_container}>
          <div>
            <img src={loeb} alt="patagonia Logo" />
          </div>
          <div>
            <img src={manor} alt="unicef Logo" />
          </div>
          <div>
            <img src={migros} alt="greenpeace Logo" />
          </div>
          <div>
            <img src={officeWorld} alt="greenpeace Logo" />
          </div>
        </div>

        <div className={styles.flex_container}>
          <div>
            <img src={ottos} alt="patagonia Logo" />
          </div>
          <div>
            <img src={prodega} alt="unicef Logo" />
          </div>
          <div>
            <img src={promena} alt="greenpeace Logo" />
          </div>
          <div>
            <img src={restoshop} alt="greenpeace Logo" />
          </div>
        </div>
        <div className={styles.flex_container}>
          <div>
            <img src={spar} alt="patagonia Logo" />
          </div>
          <div>
            <img src={swidro} alt="unicef Logo" />
          </div>
          <div>
            <img src={toppharm} alt="greenpeace Logo" />
          </div>
          <div>
            <img src={valora} alt="greenpeace Logo" />
          </div>
        </div>

        <div className={styles.flex_container}>
          <div>
            <img src={verbego} alt="patagonia Logo" />
          </div>
          <div>
            <img src={volg} alt="unicef Logo" />
          </div>
          <div className={styles.empty_div}></div>
          <div className={styles.empty_div}></div>
        </div>
      </Carousel>
    </div>
  );
};

export default injectIntl(ClientsComponent);
