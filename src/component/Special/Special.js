import React, { useContext } from "react";
import { RingContaxt } from "../GrandPa/GrandPa";

const Special = () => {
  const [house, setHouse] = useContext(RingContaxt);

  return (
    <div>
      <h4>special</h4>
      <p>House:{house}</p>
      <button onClick={() => setHouse(house + 1)}>By house</button>
    </div>
  );
};

export default Special;
