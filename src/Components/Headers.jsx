import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header--img-container">
        <img className="header--img" src="meme.jpg" />
      </div>
      <h1 className="header--title">Meme Generator</h1>
      <h3>React Course - Project 3</h3>
    </div>
  );
}
