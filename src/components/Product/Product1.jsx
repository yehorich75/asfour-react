import React from "react";
import styles from "./Product.module.scss";
import firstProductPhoto from "./../../img/figurines.jpg";
import secondProductPhoto from "./../../img/crystal-parts.jpg";
import thirdProductPhoto from "./../../img/tile-1.jpg";
import fourProductPhoto from "./../../img/3D.jpg";
import fiveProductPhoto from "./../../img/chandeliers.jpg";
import sixProductPhoto from "./../../img/fancy-stones-2.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Figurines from "./Figurines";
import Parts from "./Parts";
import Crystail from "./Crystail";
import threeD from "./threeD";
import Chandeliers from "./Chandeliers";
import Fancy from "./Fancy";
// import Other from "./Other";

const items = [
  { id: 1, title: "Фігурки", img: firstProductPhoto, link: "/figurines" },
  { id: 1, title: "Кришталеві підвіски", img: secondProductPhoto, link: "/parts" },
  { id: 1, title: "Кришталева плитка", img: thirdProductPhoto, link: "/crys-tail" },
  { id: 1, title: "3D сувеніри", img: fourProductPhoto, link: "/3D" },
  { id: 1, title: "Світильники", img: fiveProductPhoto, link: "/chandeliers" },
  { id: 1, title: "Стрази", img: sixProductPhoto, link: "/fancy-stones" }
];

const listItems = items.map((item) =>

  <Router>
    <div className={styles.item} key={item.id}>
      <h4 className={styles.itemTitle}>{item.title}</h4>
      <div className={styles.itemMain}>
        <img src={item.img} alt={item.title} className={styles.itemImg} />
        <div className={styles.itemMore}>
          <Link to="/figurines" className={styles.itemLink}>Докладніше</Link>
          <Link to="/parts" className={styles.itemLink}>Докладніше</Link>
          <Link to="/crys-tail" className={styles.itemLink}>Докладніше</Link>
          <Link to="/3D" className={styles.itemLink}>Докладніше</Link>
          <Link to="/chandeliers" className={styles.itemLink}>Докладніше</Link>
          <Link to="/fancy-stones" className={styles.itemLink}>Докладніше</Link>
          <Switch>
            <Route exact path="/figurines" component={Figurines} />
            <Route exact path="/parts" component={Parts} />
            <Route exact path="/crys-tail" component={Crystail} />
            <Route exact path="/3D" component={threeD} />
            <Route exact path="/chandeliers" component={Chandeliers} />
            <Route exact path="/fancy-stones" component={Fancy} />
            {/* <Route component={Other} /> */}
          </Switch>
        </div>
      </div>
    </div>
  </Router>



)


function Product() {
  return (
    <Router>
      <section className={styles.product}>
        <div className="container">
          <h2>Продукція</h2>
          <div className={styles.items} id="product">
            {listItems}
          </div>
        </div>
      </section>
    </Router>
  );
}

export default Product;
