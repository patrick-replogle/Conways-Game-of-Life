import React from 'react';

import { createNewBoard, updateBoard } from '../functions/game';
import { generateRandomBoard } from '../functions/presets';

const Buttons = ({
    board,
    setBoard,
    gridSize,
    isGenerating,
    setIsGenerating,
    genCount,
    setGenCount,
    intervalId,
    setInvertalId,
    speed,
}) => {
    const startGame = () => {
        let intId = setInterval(() => {
            let newBoard = updateBoard(board);
            board = newBoard;
            setBoard(newBoard);
            setGenCount(genCount++);
        }, speed);
        setInvertalId(intId);
    };

    const pauseGame = () => {
        setIsGenerating(false);
        clearInterval(intervalId);
    };

    const clearBoard = () => {
        setIsGenerating(false);
        setBoard(createNewBoard(gridSize));
        setGenCount(0);
        clearInterval(intervalId);
    };

    const nextGeneration = (currBoard) => {
        let newBoard = updateBoard(currBoard);
        board = newBoard;
        setBoard(newBoard);
        setGenCount((genCount += 1));
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
        >
            <button
                onClick={() => {
                    if (!isGenerating) {
                        setIsGenerating(true);
                        startGame();
                    } else {
                        pauseGame();
                    }
                }}
                className="gameButton"
                style={{ background: '#03DAC6' }}
            >
                Start
            </button>

            <button
                onClick={pauseGame}
                className="gameButton"
                style={{ background: '#FF8C00' }}
            >
                Pause
            </button>

            <button
                onClick={clearBoard}
                className="gameButton"
                style={{ background: '#B00020' }}
            >
                Clear
            </button>

            <button
                onClick={() => {
                    setGenCount(0);
                    clearInterval(intervalId);
                    setIsGenerating(false);
                    setBoard(generateRandomBoard(gridSize));
                }}
                className="gameButton"
                style={{ background: '#2069E0' }}
            >
                Random
            </button>

            <button
                onClick={() => {
                    nextGeneration(board);
                }}
                className="gameButton"
                style={{ background: '#BB86FC' }}
            >
                Next Generation
            </button>
        </div>
    );
};

export default Buttons;
