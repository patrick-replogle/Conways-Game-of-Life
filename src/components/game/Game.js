import React, { useState } from 'react';

import Board from '../board/Board';
import Buttons from '../buttons/Buttons';
import Controls from '../controls/Controls';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import { createNewBoard } from '../../functions/game';

import './game.styles.scss';

const Game = () => {
    const [genCount, setGenCount] = useState(0);
    const [isGenerating, setIsGenerating] = useState(false);
    const [gridSize, setGridSize] = useState(25);
    const [board, setBoard] = useState(createNewBoard(gridSize));
    const [intervalId, setInvertalId] = useState(null);
    const [speed, setSpeed] = useState(200);
    const [cellColor, setCellColor] = useState('random');

    return (
        <div className="container">
            <Header />
            <Controls
                setBoard={setBoard}
                gridSize={gridSize}
                setGridSize={setGridSize}
                setIsGenerating={setIsGenerating}
                setGenCount={setGenCount}
                intervalId={intervalId}
                speed={speed}
                setSpeed={setSpeed}
                cellColor={cellColor}
                setCellColor={setCellColor}
            />
            <Buttons
                board={board}
                setBoard={setBoard}
                gridSize={gridSize}
                isGenerating={isGenerating}
                setIsGenerating={setIsGenerating}
                genCount={genCount}
                setGenCount={setGenCount}
                intervalId={intervalId}
                setInvertalId={setInvertalId}
                speed={speed}
            />
            <Board
                board={board}
                isGenerating={isGenerating}
                cellColor={cellColor}
            />
            <h4 style={{ marginTop: '1%' }}>Generation: {genCount}</h4>
            <Footer />
        </div>
    );
};

export default Game;
