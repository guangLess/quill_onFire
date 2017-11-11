import React from 'react'
require('../helper')


export default class Square extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (evt) {
      evt.preventDefault()
      let tempGroup = this.props.group.slice()





      //console.log('who got clicked ===>', this.props.part)
      let index = this.props.boardIndex


      this.props.updatBoard(tempGroup, this.props.emptyIndex, this.props.nextIndex) //update to store

      //get Index after updated 
        //logic to disable button

      //let boardIndex = this.props.group.indexOf(this.props.part[1])      
      this.props.onWine(this.props.part, index)//pass the data back to upstream
  }

  render(){
      let x = this.props.part
      //console.log("square->", x)
      //button disable check 

    return (  
        <button className="square" onClick={this.clickHandler} disabled={this.props.active}>
          <p className="boardIndex">{this.props.boardIndex}</p>  
          <p>{x.part}</p>
          <p className="index">{x.baseIndex}</p>
        </button>
    )
  }
}

