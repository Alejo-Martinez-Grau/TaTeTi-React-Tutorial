import React from "react";

export function Square(props) {

  return (
    <button className={`square col-4 p-1 ${props.winnerSquare ? 'winnerSquare' : null}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;

//className='square col-4 p-1'