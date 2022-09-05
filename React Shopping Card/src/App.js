import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import products from "./products.json";
import "./index.css";
import Product from "./components/Product";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    console.log(basket);
  }, [basket]);
  return (
    <div className="App">
      <Header money={money} />
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
        />
      ))}
    </div>
  );
}
export default App;
