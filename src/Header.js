import React from "react";
import "./Header.css"; // import CSS file

function Header() {
  return (
    <div className="header">
      <div className="site-name">Color Picker </div>
      <div className="search-bar">
        <input type="text" placeholder="Search... Mood, Emotion, Nostalgic" />
      </div>
    </div>
  );
}

export default Header;
