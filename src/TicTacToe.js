import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TicTacToe.css';
import Board from './Board'



// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square">
//           {/* TODO */}
//         </button>
//       );
//     }
//   }
  
  
  class TicTacToe extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
export default TicTacToe;