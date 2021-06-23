import React, { useState } from 'react';

import './cell.styles.scss';

const Cell = ({ square, board, isGenerating, cellColor }) => {
    const [, setBox] = useState(square.status);

    const toggleStatus = (square) => {
        const { status, location } = square;

        if (!isGenerating && status === 0) {
            board[location[0]][location[1]]['status'] = 1;
            setBox(square.status);
        } else if (!isGenerating && status === 1) {
            board[location[0]][location[1]]['status'] = 0;
            setBox(square.status);
        }
    };

    const generateRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const pickCellColor = (color) => {
        if (color === 'random') {
            return generateRandomColor();
        } else {
            return color;
        }
    };

    return (
        <div
            className="cell"
            style={{
                background:
                    square.status === 0 ? 'white' : pickCellColor(cellColor),
            }}
            onClick={() => toggleStatus(square)}
        ></div>
    );
};

export default Cell;
