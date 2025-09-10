import "./Card.css";
import React, { useState } from "react";
import { getContrastColor } from "./utils";

const Colorpallete = ({ col }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  return (
    <div
      style={{ backgroundColor: col, color: getContrastColor(col) }}
      className="color-box"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {isHovered && col}
    </div>
  );
};

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
            <Colorpallete key={index} col={col} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Card;
