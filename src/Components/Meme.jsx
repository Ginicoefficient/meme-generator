import React, { useState } from "react";
import memeData from "../Data.js";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
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
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="form--button" onClick={getMemeHandler}>
          Get a new meme image 🖼{" "}
        </button>
      </div>
      <div className="meme--constructor">
        <div className="meme--img-container">
          {meme.randomImage && (
            <img className="meme--img" src={meme.randomImage} />
          )}
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}
