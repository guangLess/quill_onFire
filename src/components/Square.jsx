import React from 'react'

export default class Square extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (evt) {
      evt.preventDefault()
      let tempGroup = this.props.group.slice()
      let index = this.props.boardIndex
      
      this.props.onWine(this.props.part, index)//pass the data back to upstream      

      //update board (action swap)
      this.props.updatBoard(tempGroup, this.props.emptyIndex, this.props.nextIndex) //update to store    
      //pass index of the click back to its parent for drawing sketch
  }

  render(){
      let x = this.props.part
      //console.log("square->", x)
    return (  
        <button className="square" onClick={this.clickHandler} disabled={this.props.disable}>
          <p className="boardIndex">{x.baseIndex}</p>  
          <p>{x.part}</p>
          <p className="index">{this.props.boardIndex}</p>
        </button>
    )
  }
}
