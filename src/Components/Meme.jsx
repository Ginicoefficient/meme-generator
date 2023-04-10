import React, { useState } from "react";
import memeData from "../Data.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function getMemeHandler() {
    setMeme((previousValue) => {
      return {
        ...previousValue,
        randomImage: getRandomImage(),
      };
    });
  }

  function getRandomImage() {
    const memesArray = allMemeImages.data.memes;
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
        {meme.randomImage && (
          <img className="meme--img" src={meme.randomImage} />
        )}
      </div>
    </div>
  );
}
