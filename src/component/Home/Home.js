import React, { useState } from "react";
import useTShirts from "../../hooks/useTshirt";
import Cart from "../Cart/Cart";
import Tshart from "../Tshart/Tshart";
import "./Home.css";
const Home = () => {
  const [tShart, useTshirt] = useTShirts();
  const [cart, setCart] = useState([]);
  const handaleAddToCart = (product) => {
    const exist = cart.find((c) => c._id === product._id);
    if (!exist) {
      const addedProdcut = [...cart, product];
      setCart(addedProdcut);
    } else {
      alert("hey alrady added");
    }
  };
  const handaleRemoveFromCart = (product) => {
    const rest = cart.filter((tshart) => tshart._id !== product._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshart-container">
        {tShart.map((tshart) => (
          <Tshart
            key={tshart._id}
            tShart={tshart}
            handaleAddToCart={handaleAddToCart}
          ></Tshart>
        ))}
      </div>
      <div className="cart-container">
        <Cart handaleRemoveFromCart={handaleRemoveFromCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
