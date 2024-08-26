import React, { useEffect, useState } from 'react';
import "./tic-tact-toe.css"
import Square from './Square';

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const getWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }
  const handleClick = (getCurrentSquare) => {
    let copySquares = [...squares];
    if (getWinner(copySquares) || copySquares[getCurrentSquare]) return;
    copySquares[getCurrentSquare] = isXTurn ? 'X' : '0';
    setIsXTurn(!isXTurn);
    setSquares(copySquares);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every(el => el !== '')) {
      setStatus('This is a draw ! Please restart the game');
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`)
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`)
    }
  }, [squares]);

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setStatus('');
    setIsXTurn(true);
  }

  return (
    <main>
      <div className="tic-tac-toe-container">
        {squares.map((_, index) => (
          <Square key={index} value={squares[index]} onClick={() => handleClick(index)} />
        ))}
      </div>
      <h1>{status}</h1>
      <button className='restart' onClick={handleRestart}>Restart</button>
    </main>
  )
}

export default TicTacToe