import React from "react";
import Square from "./Square";

class Board extends React.Component {
   playerColors(i){
    
     if(this.props.winner){
      return this.props.winner.winnerArray.includes(i);
  }
}

  renderSquare(i) {
    // let playerColor;

    // if(this.props.winner){
    //   console.log(this.props.winner.winnerArray)
    //   for (let i=0; i<3; i++){
    //     if (this.props.winner.winnerArray === i){
          
    //       return playerColor = 'winnerSquare';
    //     }else return playerColor = '';
    //   }
    // }
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
        winnerSquare = {this.playerColors(i)}
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
