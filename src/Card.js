import React from "react";
import "./Card.css";

const colors = ["#FF6B6B", "#6BCB77", "#4D96FF", "#FFC300", "#C74B50"];
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
