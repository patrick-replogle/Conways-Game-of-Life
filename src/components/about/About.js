import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import StillLife1 from '../../assets/still_life1.png';
import StillLife2 from '../../assets/still_life2.png';
import StillLife3 from '../../assets/still_life3.png';
import StillLife4 from '../../assets/still_life4.png';
import StillLife5 from '../../assets/still_life5.png';

import Oscillator1 from '../../assets/oscillator1.gif';
import Oscillator2 from '../../assets/oscillator2.gif';
import Oscillator3 from '../../assets/oscillator3.gif';
import Oscillator4 from '../../assets/oscillator4.gif';
import Oscillator5 from '../../assets/oscillator5.gif';

import Spaceship1 from '../../assets/spaceship1.gif';
import Spaceship2 from '../../assets/spaceship2.gif';
import Spaceship3 from '../../assets/spaceship3.gif';
import Spaceship4 from '../../assets/spaceship4.gif';

import './about.styles.scss';

const About = () => {
    return (
        <div className="aboutPageContainer">
            <Header />
            <div className="aboutTextContainer">
                <p>
                    Invented by Cambridge mathematician John Conway in the late
                    1960's, the Game of Life is a cellular automaton played on a
                    two dimensional grid of cells. The first generation of cells
                    is constructed by the user, however the game evolves
                    naturally based off of a set of rules without further user
                    input, classifying the Game of Life as a zero-player-game.
                </p>

                <p>
                    A cell can only exist within two states, or respectively
                    alive or dead. Which of the two states a cell will be in the
                    next iteration of the board will be determined by the eight
                    neighboring horizontal, vertical and diagonal cells that
                    directly touch the cell.
                </p>

                <p>
                    Activate cells on the board at will, select a pattern from
                    one of the presets, or click the random button to
                    autopopulate the board and watch the Game of Life unfold.
                    Other user controls include the ability to adjust the
                    generation cycle speed, change the cell color, and adjust
                    the board size. The user can either watch the cycles play
                    through in real time or click to view each cycle one at a
                    time.
                </p>

                <p>
                    This implementation of the Game of Life was created by
                    Patrick Replogle using React.
                </p>
            </div>

            <div className="aboutTextContainer">
                <h3>Rules of the Game:</h3>
                <ul>
                    <li>
                        Any live cell with two or three live neighbours
                        survives.
                    </li>
                    <li>
                        Any dead cell with three live neighbours becomes a live
                        cell.
                    </li>
                    <li>
                        All other live cells die in the next generation.
                        Similarly, all other dead cells stay dead.
                    </li>
                </ul>
            </div>

            <div className="aboutTextContainer">
                <h3>Example Patterns:</h3>
                <div className="exampleTextContainer">
                    <p>
                        A <strong>still life</strong> is a pattern that does not
                        change from one generation to the next.
                    </p>
                    <div className="exampleContainer">
                        <img src={StillLife1} alt="block" className="img" />
                        <img src={StillLife2} alt="bee-hive" className="img" />
                        <img src={StillLife3} alt="loaf" className="img" />
                        <img src={StillLife4} alt="boat" className="img" />
                        <img src={StillLife5} alt="tub" className="img" />
                    </div>
                </div>
                <div className="exampleTextContainer">
                    <p>
                        An <strong>oscillator</strong> is a pattern that is a
                        predecessor of itself. That is, it is a pattern that
                        repeats itself after a fixed number of generations
                    </p>
                    <div className="exampleContainer">
                        <img src={Oscillator1} alt="blinker" className="img" />
                        <img src={Oscillator2} alt="toad" className="img" />
                        <img src={Oscillator3} alt="beacon" className="img" />
                        <img src={Oscillator4} alt="pulsar" className="img" />
                        <img src={Oscillator5} alt="penta" className="img" />
                    </div>
                </div>
                <div className="exampleTextContainer">
                    <p>
                        A <strong>spaceship</strong> is a finite pattern that
                        returns to its initial state after a number of
                        generations, but in a different location
                    </p>
                    <div className="exampleContainer">
                        <img src={Spaceship1} alt="glidar" className="img" />
                        <img src={Spaceship2} alt="light" className="img" />
                        <img src={Spaceship3} alt="middle" className="img" />
                        <img src={Spaceship4} alt="heavy" className="img" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
