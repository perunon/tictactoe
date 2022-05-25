import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const winner = calculateWinner(squares);

  console.log(winner);

  const message = winner
    ? `Winner is ${winner}`
    : `The next player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (squares[position] || winner) {
      return;
    }

    setSquares(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });
    setIsXNext(!isXNext);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
