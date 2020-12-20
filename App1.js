import React from "react";
import "./styles.css";
import { useState } from "react";

const songDB = {
  Pop: [
    { name: "Tum se hi", rating: "4/5" },
    { name: "Phir Le aya Dil", rating: "3.5/5" }
  ],

  Classical: [
    {
      name: "Ud ja hans akela",
      rating: "4.5/5"
    },
    {
      name: "Kaha se aaye badara",
      rating: "4.5/5"
    }
  ],
  Dance: [
    {
      name: "Ghoongro",
      rating: "3.5/5"
    },
    {
      name: "Saturday Saturday",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Dance");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 class="header">Musify</h1>
      <p style={{ fontSize: "large", color: "white" }}>
        {" "}
        Here are my favourite songs. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(songDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              color: "white",
              background: "#1db954",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "0px ",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songDB[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "3rem 1rem",
                textAlign: "center",
                display: "block ",
                backgroundColor: "#1db954",
                color: "white",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}