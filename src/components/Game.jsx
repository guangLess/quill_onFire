import React from 'react'
import Board from './Board.jsx'
import P5Wrapper from 'react-p5-wrapper'
import {sketch} from './sketch'

const Game = () =>  {
    return (
      <div className="game">
        <div>
        <h1>🙈🙈Hello</h1>   
        <P5Wrapper sketch={sketch} />
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}

export default Game;