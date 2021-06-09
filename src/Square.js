import React from "react";

export function Square(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  );
}

//boton hecho con clases
/*
export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: "X" });
        }}
      >
        {this.state.value}
      </button>
    );
  }
}
*/

export default Square;
