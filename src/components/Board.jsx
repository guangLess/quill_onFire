import React from 'react'
import Square from './Square.jsx'
import { connect } from 'react-redux'
import {getMemoryBoard, shiftMemories } from '../redux/reducer'

// try drawing stuff 
import PtsChart from './PtsChart.jsx'

class Board extends React.Component {
  constructor(){
    super()
    this.onWine = this.onWine.bind(this)
    this.state = { move: 1 }
  }

  setSquareNumbers(n) {
    return Array(n).fill(1)
  }

  //maybe added selected in the store later.
  onWine(part) {

    let index = this.props.parts.indexOf(part)
    // console.log('onWine function x===>', x[0], x[1], index)
    //console.log('-----parts------>',this.props.parts)
    //let locationOfempty = this.props.parts.findIndex((ele) => ele.part === 'x')
    //console.log(' now===>', part, index,locationOfempty)
    //this.props.move.setState(index);
    this.setState({move: index})
  }
  renderSquare(ele, index, group) {

    let locationOfempty = group.findIndex((each) => each.part === 'x')
    let locationOfnext = group.findIndex((each) => each.part === ele.part)
    let distance = Math.abs(locationOfempty - locationOfnext) 
    //console.log(" (locationOfnext % 3 !== 0",  (locationOfnext % 3 === 0))
   let active = !( distance === 3 ||  
    (distance === 1 ))
    
    //if(locationOfempty + 1 === )

    //console.log("--locations->", locationOfempty, locationOfnext)
    return (<Square part={ele} boardIndex={index} onWine={this.onWine} group={group} updatBoard={this.props.updatBoard} 
              active={active} emptyIndex={locationOfempty} nextIndex={locationOfnext} />)
  }

  render() {
    let group = this.props.parts
    let dataToSketch = this.state.move
    //console.log("------this.state.move->", dataToSketch)

    return (
      <div>    
      <div className="game-board">
        {
          group.map((ele, index) => (
            <div key={ index }>
              {this.renderSquare(ele, index, group)}
            </div>
          ))
        }
      </div>
      <div className="sketch">
          <PtsChart data={dataToSketch} /> 
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log("mounted starts-changed->", state)
  // trim the strct
  let values = state // Object.values(state)
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

