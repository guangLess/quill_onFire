import React from 'react'
import Board from './Board.jsx'
//import P5Wrapper from 'react-p5-wrapper'
//import {sketch} from './sketch'
import { connect } from 'react-redux'
import {getMemoryBoard } from '../redux/reducer'


class Game extends React.Component {
  componentDidMount(){
    this.props.mountMemories()
  }

  render() {
    //console.log("props === ", this.props.parts)
    let parts = this.props.parts || [1,2,3]

    return (
      <div className="game">
        <div>
        <h1>🙈🙈Hello</h1>   
          <Board parts={parts}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

const memoryStack = [ '🌳',' ', '☘',
'🌲', '🌱', '🍀', 
'🌵', '🌿', '️🍃' ]

const mapStateToProps = state => {
  return {
    parts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mountMemories: function () {
      dispatch(getMemoryBoard());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

/*
<P5Wrapper sketch={sketch} />
*/