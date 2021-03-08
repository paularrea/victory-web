import React from "react";
import styles from "../styles/index.module.scss"
import Logo from "../gif/animation.gif";

const Animation = () => {
  return (
    <div className={styles.on_load}>
      <div className={styles.animation}>
        <img src={Logo} alt="Logo intro" />
      </div>
    </div>
  );
};

export default Animation;
