import React from "react";
import styles from "./Contacts.module.scss";

function Contacts() {
  return (
<div className={styles.contacts}>
    <div className={`${styles.item} ${styles.address}`}>
        <span>Украина,&nbsp; г.Киев</span>
        <span>&nbsp;пр-т Лобановского,&nbsp;126г</span>
        <span>&nbsp;пр-т Победы,&nbsp;20</span>
    </div>
    <div className={`${styles.item} ${styles.phone}`}>
        
    </div>
    <a className={`${styles.item} ${styles.mailItem}`} href="mailto:asfour@asfour.com.ua">
        <span> asfour@asfour.com.ua</span>
    </a>
    <a className={`${styles.item} ${styles.mailItem}`} href="mailto:asfour@asfour.com.ua">
        <span> crystal@asfour.com.ua</span>
    </a>
</div>
  );
}

export default Contacts;