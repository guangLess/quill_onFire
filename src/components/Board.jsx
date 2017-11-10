import React from 'react'
import Square from './Square.jsx'
import { connect } from 'react-redux'
import {getMemoryBoard, shiftMemories } from '../redux/reducer'


class Board extends React.Component {
  constructor(){
    super()
    this.onWine = this.onWine.bind(this.onWine)
  }

  setSquareNumbers(n) {
    return Array(n).fill(1)
  }

  onWine(x, group) {
    //let temp = this.props.parts
    //console.log("lift state to Board with data of x and group, why do you need those data?")
     console.log('onWine function x===>', x[0],x[1])
    // this.props.mountMemories(group)

  }
  renderSquare(ele, index, group) {
    return <Square part={[index, ele]} onWine={this.onWine} group={group} updatBoard={this.props.updatBoard} />;
  }

  render() {
    //console.log("board.props === ", this.props.parts)
    
    let group = this.props.parts
    return (
      <div className="game-board">
        {
          group.map((ele, index) => (
            <div key={index}>
              {this.renderSquare(ele, index, group)}
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log("mounted starts-changed->", state[0])
  return {
    parts: state
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    mountMemories: function () {
      dispatch(getMemoryBoard());
    },
    updatBoard: function (stack, index) {
      dispatch(shiftMemories(stack, index));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

//export default Board;
