import React from "react";
import "./Tshart.css";
const Tshart = ({ tShart, handaleAddToCart }) => {
  const { name, picture, price } = tShart;
  return (
    <div className="T-Shart">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>price: {price}</p>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => handaleAddToCart(tShart)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Tshart;
