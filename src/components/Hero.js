import React from "react";

import Styles from "../styles/Hero.module.css";

import illustration from "../assets/hero/illustration.png";

function hero() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <h1 className={Styles.mainTitle}>
          Book is a<br /> window to the world.
        </h1>
        <h2 className={Styles.subTitle}>
          Wake up your dream by reading a book every day
        </h2>
        <button className={Styles.btn}>Read Now</button>
      </div>
      <div className={Styles.right}>
        <img src={illustration} alt="" className={Styles.illustration} />
      </div>
    </div>
  );
}

export default hero;
