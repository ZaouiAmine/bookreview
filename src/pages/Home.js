import React from "react";
import Header from "../components/Header";
import Styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={Styles.container}>
      <Header />
    </div>
  );
}

export default Home;
