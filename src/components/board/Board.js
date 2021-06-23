import React from 'react';

import Cell from '../cell/Cell';

import './board.styles.scss';

const Board = ({ board, isGenerating, cellColor }) => {
    return (
        <div className="mainContainer">
            {board.map((arr, index) => {
                return (
                    <div className="cellContainer" key={index}>
                        {arr.map((square, index) => {
                            return (
                                <Cell
                                    board={board}
                                    square={square}
                                    key={index}
                                    isGenerating={isGenerating}
                                    cellColor={cellColor}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Board;
