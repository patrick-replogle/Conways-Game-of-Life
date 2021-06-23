import React, { useState, useEffect } from 'react';

import { togglePresets } from '../../functions/presets';

import './controls.styles.scss';

const Controls = ({
    gridSize,
    setGridSize,
    setBoard,
    setIsGenerating,
    intervalId,
    setGenCount,
    speed,
    setSpeed,
    cellColor,
    setCellColor,
}) => {
    const [input, setInput] = useState('');

    useEffect(() => {
        togglePresets(input, setBoard, gridSize);
    }, [setInput, input, setBoard, gridSize]);

    const handlePreset = (e) => {
        setInput(e.target.value);
        setIsGenerating(false);
        clearInterval(intervalId);
        setGenCount(0);
    };

    const handleSpeed = (e) => {
        setSpeed(e.target.value);
    };

    const handleBoardSize = (e) => {
        setIsGenerating(false);
        clearInterval(intervalId);
        setGridSize(Number(e.target.value));
        setGenCount(0);
        setInput('')
    };

    const handleCellColor = (e) => {
        setCellColor(e.target.value);
    };

    return (
        <div className="controlsContainer">
            <div className="inputDiv">
                <label>Presets</label>
                {gridSize === 25 ? (
                <select
                    onChange={handlePreset}
                    value={input}
                    className="inputField"
                >
                    <option value="none">Choose a Preset</option>
                    <option value="square">Square</option>
                    <option value="cross">Cross</option>
                    <option value="horizontal line">Horizontal Line</option>
                    <option value="acorn">Acorn</option>
                    <option value="flower of eden">Flower of Eden</option>
                    <option value="pulsar">Pulsar</option>
                    <option value="spaceship">Spaceship</option>
                    <option value="circle of fire">Circle of Fire</option>
                    <option value="glidar">Glidar</option>
                    <option value="still life">Still Life</option>
                    <option value="pulsar generator">Pulsar Generator</option>
                    <option value="r-pentomino">R-Pentomino</option>
                    <option value="pentadecatchlon">Pentadecathlon</option>
                    <option value="queen bee shuttle">Queen Bee Shuttle</option>
                </select>
                ) : (
                    <select
                    onChange={handlePreset}
                    value={input}
                    className="inputField"
                >
                    <option value="none">Choose a Preset</option>
                    <option value="square">Square</option>
                    <option value="cross">Cross</option>
                    <option value="horizontal line">Horizontal Line</option>
                </select> 
                )}
            </div>

            <div className="inputDiv">
                <label>Speed</label>
                <input
                    className="speed"
                    onChange={handleSpeed}
                    value={speed}
                />
            </div>

            <div className="inputDiv">
                <label>Board Size</label>
                <select
                    onChange={handleBoardSize}
                    value={gridSize}
                    className="inputField"
                >
                    <option value={25}>Normal</option>
                    <option value={35}>Larger</option>
                    <option value={40}>Largest</option>
                </select>
            </div>

            <div className="inputDiv">
                <label>Cell Color</label>
                <select
                    onChange={handleCellColor}
                    value={cellColor}
                    className="inputField"
                >
                    <option value="random">Random</option>
                    <option value="black">Black</option>
                    <option value="#03DAC6">Teal</option>
                    <option value="#FF8C00">Orange</option>
                    <option value="#2069E0">Blue</option>
                    <option value="#BB86FC">Purple</option>
                </select>
            </div>
        </div>
    );
};

export default Controls;
