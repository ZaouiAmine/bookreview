import React from "react";

import Styles from "../styles/Testamony.module.css";

import comma from "../assets/testamonies/comma.png";

function Testamony(props) {
  return (
    <div className={Styles.container}>
      <img src={props.data.img} alt={props.data.name} className={Styles.img} />
      <img src={comma} alt="comma" className={Styles.comma} />
      <h1 className={Styles.name}>{props.data.name}</h1>
      <p className={Styles.testamony}>{props.data.testamony}</p>
    </div>
  );
}

export default Testamony;
