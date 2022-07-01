import React from "react";

import Styles from "../styles/Footer.module.css";

import fb from "../assets/footer/facebook.png";
import ig from "../assets/footer/instagram.png";

function Footer() {
  return (
    <footer className={Styles.container}>
      <div className={Styles.all}>
        <div className={Styles.up}>
          <div className={Styles.left}>
            <h1 className={Styles.logo}>
              Book<span>review</span>
            </h1>
            <h2 className={Styles.subLogo}>
              is the best place to review a logo
            </h2>
          </div>
          <div className={Styles.right}>
            <ul className={Styles.nav}>
              <li className={Styles.mainNavItem}>Navigation</li>
              <li className={Styles.navItem}>Home</li>
              <li className={Styles.navItem}>Bestseller</li>
              <li className={Styles.navItem}>Category</li>
              <li className={Styles.navItem}>Community</li>
              <li className={Styles.navItem}>Blog</li>
            </ul>
            <ul className={Styles.nav}>
              <li className={Styles.mainNavItem}>Company</li>
              <li className={Styles.navItem}>admin@gmail.com</li>
              <li className={Styles.navItem}>Jln. Stiabudhi No. 193 </li>
              <li className={Styles.navItem}>Bandung Indonesia</li>
            </ul>
          </div>
        </div>
        <div className={Styles.down}>
          <h2 className={Styles.copyright}>
            © 2021 ReviewBook. All rights reserved.
          </h2>
          <div className={Styles.social}>
            <img src={fb} alt="facebook" className={Styles.fb} />
            <img src={ig} alt="instagram" className={Styles.ig} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
