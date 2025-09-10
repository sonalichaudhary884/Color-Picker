import React from "react";
import Header from "./Header";
import Card from "./Card";

function App() {
  return (
    <div>
      <Header />
      <main>
        <p> Trending color pallettes</p>
        <p className="quote">
          Get inspired by thousands of beautiful <br />
          color schemes and make something cool!
        </p>
      </main>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
