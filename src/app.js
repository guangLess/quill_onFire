import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root.jsx'
import ReactQuill from 'react-quill'
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


ReactDOM.render(
    <Root placeholder={'Write something...'} />,
    document.getElementById('app')
  )
