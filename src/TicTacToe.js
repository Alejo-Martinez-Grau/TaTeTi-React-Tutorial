import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TicTacToe.css";
import Board from "./Board";
import calculateWinner from "./helper";
import HistoryPlays from "./HistoryPlays";
class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];

    //create a new copy of the squares array
    const squares = current.squares.slice();
    //ignores a click if someone has won the game or if there is already an X or O in the square
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]), //stores the state of the board, will allow to determine who is the winner
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext, //switch turn
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    //pasar a HistoryPlays ?
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
          className="game-board"
        />
        <HistoryPlays 
          status={status}
          moves={moves}
          className="game-info" />
      </div>
    );
  }
}

export default TicTacToe;
