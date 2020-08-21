import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import StillLife1 from "../assets/still_life1.png";
import StillLife2 from "../assets/still_life2.png";
import StillLife3 from "../assets/still_life3.png";
import StillLife4 from "../assets/still_life4.png";
import StillLife5 from "../assets/still_life5.png";

import Oscillator1 from "../assets/oscillator1.gif";
import Oscillator2 from "../assets/oscillator2.gif";
import Oscillator3 from "../assets/oscillator3.gif";
import Oscillator4 from "../assets/oscillator4.gif";
import Oscillator5 from "../assets/oscillator5.gif";

import Spaceship1 from "../assets/spaceship1.gif";
import Spaceship2 from "../assets/spaceship2.gif";
import Spaceship3 from "../assets/spaceship3.gif";
import Spaceship4 from "../assets/spaceship4.gif";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />

      <div style={{ width: "90%", textAlign: "left" }}>
        <p>
          Invented by Cambridge mathematician John Conway in the late 1960's,
          the Game of Life is a cellular automaton played on a two dimensional
          grid of cells. The first generation of cells is constructed by the
          user, however the game evolves naturally based off of a set of rules
          without user input henceforth, classifying the Game of Life as a
          zero-player-game.
        </p>

        <p>
          A cell can only exist within two states, or respectively alive or
          dead. Which of the two states a cell will be in the next iteration of
          the board will be determined by the eight neighboring alive or dead
          cells that directly touch the cell.
        </p>
      </div>

      <div
        style={{
          width: "90%",
          textAlign: "left",
        }}
      >
        <h4>Rules of the Game</h4>
        <ul>
          <li>Any live cell with two or three live neighbours survives.</li>
          <li>Any dead cell with three live neighbours becomes a live cell.</li>
          <li>
            All other live cells die in the next generation. Similarly, all
            other dead cells stay dead.
          </li>
        </ul>
      </div>

      <div style={{ width: "90%", textAlign: "left" }}>
        <h4>Still lifes:</h4>
        <p>
          A still life is a pattern that does not change from one generation to
          the next.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <img src={StillLife1} alt="block" />
          <img src={StillLife2} alt="bee-hive" />
          <img src={StillLife3} alt="loaf" />
          <img src={StillLife4} alt="boat" />
          <img src={StillLife5} alt="tub" />
        </div>
      </div>

      <div style={{ width: "90%", textAlign: "left" }}>
        <h4>Oscillators:</h4>
        <p>
          An oscillator is a pattern that is a predecessor of itself. That is,
          it is a pattern that repeats itself after a fixed number of
          generations
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <img src={Oscillator1} alt="blinker" />
          <img src={Oscillator2} alt="toad" />
          <img src={Oscillator3} alt="beacon" />
          <img src={Oscillator4} alt="pulsar" />
          <img src={Oscillator5} alt="penta" />
        </div>
      </div>

      <div style={{ width: "90%", textAlign: "left" }}>
        <h4>Spaceships:</h4>
        <p>
          A spaceship is a finite pattern that returns to its initial state
          after a number of generations, but in a different location
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <img src={Spaceship1} alt="glidar" />
          <img src={Spaceship2} alt="light" />
          <img src={Spaceship3} alt="middle" />
          <img src={Spaceship4} alt="heavy" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;