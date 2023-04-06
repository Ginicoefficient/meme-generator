import React, { useState } from "react";
import memeData from "../Data.js";

export default function Meme() {
  const [image, setImage] = React.useState("");

  function getMemeHandler() {
    const currentMeme = getRandomImage();
    setImage(currentMeme);
  }

  function getRandomImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    return url;
  }

  return (
    <div className="meme--container">
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button className="form--button" onClick={getMemeHandler}>
          Get a new meme image 🖼{" "}
        </button>
      </div>
      <div className="meme--img-container">
        {image && <img className="meme--img" src={image} />}
      </div>
    </div>
  );
}
