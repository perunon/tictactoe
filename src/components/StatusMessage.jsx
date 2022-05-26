import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.squares.every(element => element != null);
  //   const message = winner
  //     ? `Winner is ${winner}`
  //     : `The next player is ${current.isXNext ? 'X' : 'O'}`;

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          The next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange"> O</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
