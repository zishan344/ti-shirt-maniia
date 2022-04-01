import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelef/MySelf";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h2>Father</h2>
      <p>House: {house}</p>
      <div style={{ display: "flex" }}>
        <MySelf house={house} />
        <Brother house={house} />
        <Sister house={house} />
      </div>
    </div>
  );
};

export default Father;
