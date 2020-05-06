import React from 'react';
import firstProductPhoto from "./../../../img/figurines.jpg";
import secondProductPhoto from "./../../../img/crystal-parts.jpg";
import thirdProductPhoto from "./../../../img/tile-1.jpg";
import fourProductPhoto from "./../../../img/3D.jpg";
import fiveProductPhoto from "./../../../img/chandeliers.jpg";
import sixProductPhoto from "./../../../img/fancy-stones-2.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";
// import Figurines from "../Figurines";
// import Parts from "../Parts";
// import Crystail from "../Crystail";
// import threeD from "../threeD";
// import Chandeliers from "../Chandeliers";
// import Fancy from "../Fancy";
import Button from "../../Button";
// import PropTypes from 'prop-types';
import Modal from './../../Modal/Modal'

import styles from "./Card.module.scss";

function Card() {
  useState = {
    isModalOpen: false
  };
  toggleModal = () => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));
  };


  return (
    items.map((item) =>
      <div className={styles.item} key={item.id}>
        <h4 className={styles.itemTitle}>{item.title}</h4>
        <div className={styles.itemMain}>
          <img src={item.img} alt={item.title} className={styles.itemImg} />
          <div className={styles.itemMore}>
            <div>
              <Button onClick={this.toggleModal} className={styles.itemLink}>Open</Button>
              {this.state.isModalOpen && (
                <Modal onClose={this.toggleModal}>
                  <h1>Modal</h1>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  )


  const items = [
    { id: 1, title: "Фігурки", img: firstProductPhoto, link: "/figurines" },
    { id: 1, title: "Кришталеві підвіски", img: secondProductPhoto, link: "/parts" },
    { id: 1, title: "Кришталева плитка", img: thirdProductPhoto, link: "/crys-tail" },
    { id: 1, title: "3D сувеніри", img: fourProductPhoto, link: "/3D" },
    { id: 1, title: "Світильники", img: fiveProductPhoto, link: "/chandeliers" },
    { id: 1, title: "Стрази", img: sixProductPhoto, link: "/fancy-stones" }
  ];
};




export default Card;