import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="site-name"> colorgenerator </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search... Mood, Emotion, Nostalgic" />
      </div>
    </>
  );
}

export default Header;
