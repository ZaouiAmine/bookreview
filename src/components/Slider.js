import React from "react";

import Book from "../components/Book";

import Styles from "../styles/Slider.module.css";

function Slider(props) {
  return (
    <div className={Styles.container}>
      <div className={Styles.heading}>
        <h1 className={Styles.mainHeading}>{props.mainHeading}</h1>
      </div>
      <div className={Styles.books}>
        {props.books.books.map((book) => {
          return <Book data={book} />;
        })}
      </div>
    </div>
  );
}

export default Slider;
