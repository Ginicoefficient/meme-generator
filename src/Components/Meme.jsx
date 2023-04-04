import React from "react";

export default function Meme() {
  return (
    <div className="<Meme--container">
      <form className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </div>
  );
}