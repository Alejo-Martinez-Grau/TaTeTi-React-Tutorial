import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
      />
    );
  }

  render() {
    return (
      <div>
        {Array(3)
          .fill(null)
          .map((columns, i) => {
            return (
              <div className="board-row" key={i}>
                {Array(3)
                  .fill(null)
                  .map((rows, j) => {
                    return this.renderSquare(3 * i + j);
                  })}
              </div>
            );
          })}
      </div>

    );
  }
}

export default Board;
