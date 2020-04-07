import React from "react";
import "./App.scss";
import Top from "./components/Top/Top";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="wrapper">
      <Top />
      <Product />
    </div>
  );
}

export default App;
