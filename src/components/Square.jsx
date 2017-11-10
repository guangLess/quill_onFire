import React from 'react'
require('../helper')

var swapArrayElements = function(arr, indexA, indexB) {
    var temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  }

export default class Square extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler (evt) {
      evt.preventDefault()
      let index = this.props.part[0]
      let tempGroup = this.props.group.slice()
      this.props.updatBoard(tempGroup, index)

      this.props.onWine(this.props.part, tempGroup)//pass the data back to upstream
  }

  render(){
      let x = this.props.part
     //console.log("parts--->", x) 

    return (  
        <button className="square" onClick={this.clickHandler}>
          <p className="boardIndex">{x[0]}</p>  
          <p>{x[1]}</p>
          <p className="index">{x[0]}</p>
        </button>
    )
  }
}

