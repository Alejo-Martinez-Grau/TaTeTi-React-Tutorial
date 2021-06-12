import React, { Fragment } from "react";
import "./App.css";
import TicTacToe from "./TicTacToe";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <TicTacToe className='container' />
    </Fragment>
  );
}

export default App;
