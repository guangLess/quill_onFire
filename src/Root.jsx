import React from 'react'
const { Map } = require('immutable')
import ReactQuill from 'react-quill'
import {CustomToolbar} from './QuillEditor'
import FireContainer from './FireContainer.jsx'


class Root extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = { text: '', delta: Map({}), speed: 1, react: '' } // You can also pass a Quill Delta here
    this.buttonHandler = this.buttonHandler.bind(this)
    this.update = this.update.bind(this)
    //Quill props
    this.quillRef = null
    this.reactQuillRef = null
    this.attachQuillRefs = this.attachQuillRefs.bind(this);
  }

  componentDidMount(){
    this.attachQuillRefs()
  }

  //update 
  update(value, delta, source, editor) {
    //var contents;
    //console.log("value--->", value)
    console.log('delta-before convert to immutible js-->',  delta)
    //let change = new Delta()
    //console.log("change--->",  change)

    //console.log("value--->", source)
    //console.log("editor--->", editor.getContents())
    //let deltaString = JSON.stringify(delta)
    //console.log("delta String--->",  deltaString)
    const dMap = Map(delta)
    this.setState({text: value, delta: dMap})
  }
  
  componentDidUpdate() {
    this.attachQuillRefs()
  }
  
  attachQuillRefs () {
    //console.log("this.reactQuillRef",this.reactQuillRef)
    // Ensure React-Quill reference is available:
    if (typeof this.reactQuillRef.getEditor !== 'function') return;  
    const quillRef = this.reactQuillRef.getEditor();
    if (quillRef) this.quillRef = quillRef;
  }


  buttonHandler(e) {

    console.log("clicked button", this)
    //this.rootRef.push({text: "roof roof"})
    var range = this.quillRef.getSelection();
    let position = range ? range.index : 0;
    this.quillRef.insertText(position, 'Hello, World!')

  }

  render(){
    return (
        <div>
          <button onClick={this.buttonHandler}> I am  button 👩🏻‍🌾</button>
            <h1>Hi😅👩🏻‍🌾 </h1>
          <div className="text-editor" >
          <CustomToolbar />
          <ReactQuill
            ref={(el) => this.reactQuillRef = el}
            value={this.state.text}
            onChange={this.update}
            modules={Root.modules}
            formats={Root.formats}
            bounds={'.app'}
            placeholder={this.props.placeholder}
          />
          <div
            key="editor"              
            ref="editor"
            className="quill-contents"                
          />
          </div>
          <FireContainer content={this.state.text} delta={this.state.delta} />
        </div>
      );
  }
}

export default Root

