import React from "react";
import styles from "./Nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <a
        href="index.html"
        className={`${styles.navLink} ${styles.navLinkActive}`}
      >
        Головна
      </a>
      <a href="#product" className={styles.navLink} data-scroll>
        Продукція
      </a>
      <a href="#video" className={styles.navLink} data-scroll>
        Відео
      </a>
      <a href="#certificate" className={styles.navLink} data-scroll>
        Сертифікати
      </a>
      <a href="#map" className={styles.navLink} data-scroll>
        Карта
      </a>
      <a href="#contacts" className={styles.navLink} data-scroll>
        Контакти
      </a>
    </nav>
  );
}

export default Nav;
