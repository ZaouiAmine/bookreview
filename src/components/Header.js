import React from "react";
import Styles from "../styles/Header.module.css";

import loop from "../assets/header/loop.png";
import heart from "../assets/header/heart.png";
import profile from "../assets/header/profile.png";

function Header() {
  const hamBtnHandler = () => {
    let slice1 = document.getElementById("slice1");
    let slice2 = document.getElementById("slice2");
    let slice3 = document.getElementById("slice3");
    let navigation = document.getElementById("navigation");
    let search_bar = document.getElementById("search_bar");
    let profile_settings = document.getElementById("profile_settings");

    slice1.classList.toggle(Styles.slice1rotation);
    slice2.classList.toggle(Styles.slice2gone);
    slice3.classList.toggle(Styles.slice3rotation);
    navigation.classList.toggle(Styles.hide);
    search_bar.classList.toggle(Styles.hide);
    profile_settings.classList.toggle(Styles.hide);
  };
  return (
    <>
      <header className={Styles.container}>
        <h1 className={Styles.logo}>
          Review<span>Book</span>
        </h1>
        <div className={Styles.hamBtn} id="hamBtn" onClick={hamBtnHandler}>
          <div className={Styles.slice} id="slice1"></div>
          <div className={Styles.slice} id="slice2"></div>
          <div className={Styles.slice} id="slice3"></div>
        </div>
        <form
          method="post"
          action="/index.html"
          className={`${Styles.wrapper} ${Styles.hide}`}
          id="search_bar"
        >
          <input
            type="text"
            placeholder="Find the book you are looking for"
            className={Styles.input}
          />
          <button type="submit" className={Styles.btn}>
            <img src={loop} alt="search button" className={Styles.btn_img} />
          </button>
        </form>
        <div
          id="profile_settings"
          className={`${Styles.profile_settings} ${Styles.hide}`}
        >
          <img src={heart} alt="heart" className={Styles.heart} />
          <img src={profile} alt="profile" className={Styles.profile} />
          <h2 className={Styles.language}>EN</h2>
        </div>
      </header>
    </>
  );
}

export default Header;
