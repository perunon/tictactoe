import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.squares.every(element => element != null);
  //   const message = winner
  //     ? `Winner is ${winner}`
  //     : `The next player is ${current.isXNext ? 'X' : 'O'}`;

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `The next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && `X and O tied`}
    </h2>
  );
};

export default StatusMessage;
