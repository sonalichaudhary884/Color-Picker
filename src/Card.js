import React from "react";
import "./Card.css";

const colors = [
  ["red", "yellow", "green", "purple", "brown"],
  ["teal", "blue", "green", "black", "brown"],
  ["cyan", "yellow", "blue", "gray", "brown"],
  ["cyan", "yellow", "brown", "red", "brown"],
];
const Card = () => {
  return (
    <div className="card">
      {colors.map((color, index) => (
        <div
          key={index}
          style={{ backgroundColor: color }}
          className="color-box"
        ></div>
      ))}
    </div>
  );
};

export default Card;
