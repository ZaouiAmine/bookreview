import React from "react";

import Styles from "../styles/Recommended.module.css";

function Recommended() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>
        Recommended books
        <br />
        from you to review.
      </h1>
      <form className={Styles.form}>
        <input
          type="text"
          placeholder="write your recommendation"
          className={Styles.input}
        />
        <button className={Styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Recommended;
