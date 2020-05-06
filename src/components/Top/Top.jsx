import React from "react";
// import ReactDOM from 'react-dom';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import styles from "./Top.module.scss";
import logoWhite from "../../img/asfour-logo-white.svg";
import Nav from "./Nav";
import Contacts from "./Contacts";
// import Slider from "./Slider/Slider";


function Top() {
  return (
    <header className={styles.top} id="top">
    <div className={styles.hero}>
      <div className="hero__slider">
        {/* <Slider /> */}
      </div>
      <div className="hero__controls"></div>
      <div className={styles.title}>
        <a href="/#" className={styles.logo}>
          <img src={logoWhite} alt="" className="logo__picture"/>
        </a>
        <div className="mobile__menu"></div>
        <Nav />
        <Contacts />
        <div className="socials"></div>
      </div>
    </div>
  </header>
  )
}

export default Top;
