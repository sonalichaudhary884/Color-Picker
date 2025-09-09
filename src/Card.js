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
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        padding: "16px",
      }}
    >
      {colors.map((color, index) => (
        <div className="card" key={index}>
          {color.map((col, index) => (
            <div
              key={index}
              style={{ backgroundColor: col }}
              className="color-box"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Card;
