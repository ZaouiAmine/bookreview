import React from "react";

import Styles from "../styles/Book.module.css";

import rating from "../assets/books/rating.png";

function Book(props) {
  return (
    <div className={Styles.container}>
      <img src={props.data.image} alt="book cover" className={Styles.img} />
      <h1 className={Styles.title}>{props.data.title}</h1>
      <img src={rating} alt="rating" className={Styles.rating} />
      <h2 className={Styles.author}>{props.data.author}</h2>
      <div className={Styles.user}>
        <img
          src={props.data.userImg}
          alt={props.data.userName}
          className={Styles.userImg}
        />
        <h3 className={Styles.userName}>{props.data.userName}</h3>
        <h3 className={Styles.date}>{props.data.date}</h3>
      </div>
    </div>
  );
}

export default Book;
