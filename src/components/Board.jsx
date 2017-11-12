import React from 'react'
import Square from './Square.jsx'
import { connect } from 'react-redux'
import {getMemoryBoard, shiftMemories } from '../redux/reducer'

// try drawing stuff 
import PtsChart from './PtsChart.jsx'
let win = false

class Board extends React.Component {
  constructor(){
    super()
    this.onWine = this.onWine.bind(this)
    this.state = { move: 1 , isSorted: false , pointerState: false}
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidUpdate(prevProps){
      //check the board     
   let isSorted = this.props.parts.reduce((result, curr, i ) => {
      return result && (curr.baseIndex === i)
     }, (this.props.parts[0].baseIndex === 0) )
    if (isSorted) win = true
    console.log('win=', win)
  }

  handleClick() {
    this.setState(prevState => ({
      pointerState: !prevState.pointerState
    }));
  }

  //added selected in the store later.
  onWine(part) {
    let index = this.props.parts.indexOf(part)
    this.setState({move: index})
  }

  renderSquare(ele, index, group) {
    let locationOfempty = group.findIndex((each) => each.part === 'x')
    let locationOfnext = group.findIndex((each) => each.part === ele.part)
    let distance = Math.abs(locationOfempty - locationOfnext) 
    let disable = !( distance === 3 || (distance === 1 ))
    //check edge cases 
    if (locationOfempty % 3 === 0 && (locationOfempty - locationOfnext === 1) ) disable = true
    if (locationOfempty % 3 === 2 && ( locationOfnext - locationOfempty  === 1) ) disable = true

    return (<Square
      part={ele} boardIndex={index} onWine={this.onWine} group={group} updatBoard={this.props.updatBoard}
      disable={disable} emptyIndex={locationOfempty} nextIndex={locationOfnext}
    />)
  }

  render() {
    let group = this.props.parts
    let dataToSketch = this.state.move
    let enablePointer = this.state.pointerState

    return (
      <div>
      {/* <div className="game-board"> */}
      <div className={
       win ? 'game-board winner' : 'game-board'
      }>
        {
          group.map((ele, index) => (
            <div key={ index }>
              {this.renderSquare(ele, index, group)}
            </div>
          ))
        }
      </div>
      <div className="sketch">
         { <PtsChart data={dataToSketch} enablePointer={enablePointer} />}
      </div>
      <div className="control">
        <span className="bordIndex"> Board Index : {this.state.move} </span>
        <button onClick={this.handleClick} className="enAbleSetch">
          {enablePointer ? 'ON' : 'OFF'}
        </button>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  let values = state
  return {
    parts: values,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mountMemories: function () {
      dispatch(getMemoryBoard());
    },
    updatBoard: function (stack, emptyIndex, nextIndex) {
      dispatch(shiftMemories(stack, emptyIndex, nextIndex));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

