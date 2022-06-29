import React from "react";
import Styles from "../styles/Header.module.css";

import loop from "../assets/header/loop.png";
import heart from "../assets/header/heart.png";
import profile from "../assets/header/profile.png";

function Header() {
  return (
    <header className={Styles.container}>
      <h1 className={Styles.logo}>
        Review<span>Book</span>
      </h1>
      <form method="post" action="/index.html" className={Styles.wrapper}>
        <input
          type="text"
          placeholder="Find the book you are looking for"
          className={Styles.input}
        />
        <button type="submit" className={Styles.btn}>
          <img src={loop} alt="search button" className={Styles.btn_img} />
        </button>
      </form>
      <div className={Styles.profile_settings}>
        <img src={heart} alt="heart" className={Styles.heart} />
        <img src={profile} alt="profile" className={Styles.profile} />
        <h2 className={Styles.language}>EN</h2>
      </div>
    </header>
  );
}

export default Header;
