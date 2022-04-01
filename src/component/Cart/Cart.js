import React from "react";
import "./Cart.css";
const Cart = ({ cart, handaleRemoveFromCart }) => {
  console.log(cart.length);
  return (
    <div>
      <h2>Items selected {cart.length}</h2>
      {cart.map((tShart) => (
        <p>
          {tShart.name}{" "}
          <button onClick={() => handaleRemoveFromCart(tShart)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
