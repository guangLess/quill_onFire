import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root.jsx'
import ReactQuill from 'react-quill'
import fire from './fire'

const { Map } = require('immutable')

//import { insertStar } from './quillEditor'


// const Quill = ReactQuill.Quill
// const Font = Quill.import('formats/font')
// Font.whitelist = ['fira code', 'Ubuntu']
// Quill.register(Font, true)

// const app = document.getElementById('app')
// ReactDOM.render(Root, app);

function insertStar () {
  const cursorPosition = this.quill.getSelection().index
  this.quill.insertText(cursorPosition,  "💩 ")
  this.quill.setSelection(cursorPosition + 1)
}

Root.modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      "insertStar": insertStar,      
    },
    theme: 'snow'
  }
}

Root.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'color',
]



const testingDelta = {
  ops: [
    { insert: 'Gandalf ', attributes: { bold: true } },
    { insert: 'the ' },
    { insert: 'White', attributes: { color: '#fff' } }
  ]
}

// need to turn this into a promise
let tDelta = Map(testingDelta)

// const getContentFromFire = () => {
//    let rootRef = fire.database().ref().child('delta')
//    rootRef.once('value', snap => {
//       console.log("getAll content first=", snap.val())
//       tDelta = Map(snap.val())
//     })
// }


ReactDOM.render(
    <Root placeholder={'Write something...'} startingContent={''} />,
    document.getElementById('app')
  )
