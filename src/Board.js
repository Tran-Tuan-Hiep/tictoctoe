import { useState } from "react";
import Square from "./Square";

function Board() {
  const [status, setStatus] = useState("Next Player X");
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    //dat lai gia tri cua square = X hoac O
    let s = squares[i];
    s = status === "Next Player: X" ? 'X' :'O';
    let copy = [...squares]; //copy ra 1 mang khac
    copy[i] = s; //thay doi gia tri cua 1 ptu trong mang
    setSquares(copy); //set squares = mang moi
    setStatus(
      status === "Next Player: X" ? "Next Player: O" : "Next Player: X"
    );
    //check winner
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          alert('win');
        }
      }
      return null;
    
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={(e) => handleClick(i)} />;
  };
  
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;