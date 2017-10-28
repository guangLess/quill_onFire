import React from 'react'


 /* eslint-disable */

class Square extends React.Component {
  render() {
    let x = 'x'
    return (
      <button className="square" onClick={this.props.onClick}>
        {x}
      </button>
    );
  }
}

class Board extends React.Component {
  setSquareNumbers(n) {
    return Array(n).fill(1)
  }


  clickHandler() {
    console.log("clicked add selected index after")
  }


  renderSquare(i) {
    return <Square onClick={this.clickHandler} />;
  }

  render() {
    const status = 'Next player: X';
    let size = this.setSquareNumbers(9)
    return (
      <div className="game-board">
        {
          size.map(ele => (
            <div >
              {this.renderSquare(0)}
            </div>
          ))
        }
      </div>
    );
  }
}

export default Board;
