import React from "react";
import memeData from "../Data.js";

export default function Meme() {
  function getMemeHandler() {
    console.log(getRandomImage());
  }

  function getRandomImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(randomNumber);
    const url = memesArray[randomNumber].url;
    return url;
  }

  return (
    <div className="<Meme--container">
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button" onClick={getMemeHandler}>
          Get a new meme image 🖼{" "}
        </button>
      </div>
    </div>
  );
}
