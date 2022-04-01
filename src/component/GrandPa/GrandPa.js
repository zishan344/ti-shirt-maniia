import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";
export const RingContaxt = createContext("ring");
const GrandPa = () => {
  const [house, setHouse] = useState(1);
  const handaleByHouse = () => {
    const by = house + 1;
    setHouse(by);
  };

  return (
    <RingContaxt.Provider value={[house, setHouse]}>
      <div className="grandPa">
        <button onClick={handaleByHouse}>By house</button>
        <h4>Grand pa</h4>
        <p>HOUSE: {house}</p>
        <section style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house} />
          <Aunty house={house}></Aunty>
        </section>
      </div>
    </RingContaxt.Provider>
  );
};

export default GrandPa;
