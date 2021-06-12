import React from "react";

export function Square(props) {
  return (
    <button className='square col-4 p-1' onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;
