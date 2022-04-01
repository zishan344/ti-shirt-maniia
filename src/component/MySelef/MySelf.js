import React from "react";
import Special from "../Special/Special";
const MySelf = ({ house }) => {
  return (
    <div>
      <h2>My Self</h2>
      <p>
        <small>house {house}</small>
      </p>
      <Special />
    </div>
  );
};

export default MySelf;
