import React from 'react'
import Board from './Board.jsx'
// /* eslint-disable */

// class Square extends React.Component {
//   render() {
//     let x = 'x'
//     return (
//       <button className="square" onClick={this.props.onClick}>
//         {x}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//   setSquareNumbers(n){
//     return Array(n).fill(1)
//   }
  

//   clickHandler(){
//     console.log("clicked add selected index after")
//   }

 
//   renderSquare(i) {
//     return <Square onClick={this.clickHandler}/ >;
//   }

//   render() {
//     const status = 'Next player: X';
//     let size = this.setSquareNumbers(9)
//     return (
//       <div>
//       {
//           size.map(ele => (
//             <div className="board-row"> 
//             {this.renderSquare(0)}
//             </div> 
//           ))
//       }
//       </div>
//     );
//   }
// }

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div>
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
  
export default Game;

