import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isXNext: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const winner = calculateWinner(current.squares);

  console.log(current);

  const message = winner
    ? `Winner is ${winner}`
    : `The next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.squares[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newSquares = last.squares.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ squares: newSquares, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board squares={current.squares} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
