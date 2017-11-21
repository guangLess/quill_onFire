import React from 'react'
const { Map } = require('immutable')
import ReactQuill from 'react-quill'
import {CustomToolbar} from './QuillEditor'
import FireContainer from './FireContainer.jsx'
import fire from './fire'
import Delta from "quill-delta";
const deltas = fire.database().ref('deltas')

class Root extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = { text: this.props.startingContent, doc: new Delta, currentEditor: Map({}), speed: 1, react: '' } // You can also pass a Quill Delta here
    this.buttonHandler = this.buttonHandler.bind(this)
    this.update = this.update.bind(this)
    //Quill props
    this.quillRef = null
    this.reactQuillRef = null
    this.attachQuillRefs = this.attachQuillRefs.bind(this);
  }

  componentWillMount(){
    console.log("will mount")
    
    //retrive Data when loaded from firebase
  }

  doc = new Delta
  applyDelta(delta) {
    const {quill, editor} = this
    if (quill.isEqualValue(delta, quill.lastDeltaChangeSet)) {
      this.doc = editor.getContents()
      return
    }

    this.doc = this.doc.compose(delta)
    editor.setContents(this.doc, 'silent')
  }

  componentDidMount(){
    console.log('Quill editor:', this.editor)
    console.log('last changed delta set:', )
    deltas.on('child_added', snap => this.applyDelta(snap.val()))
    // this.attachQuillRefs()
    // const testingDelta = {
    //   ops: [
    //     { insert: 'Gandfdfdfdfdalf ', attributes: { bold: true } },
    //     { insert: 'the ' },
    //     { insert: 'White', attributes: { color: '#fff' } }
    //   ]
    // }

    // let sContent = this.reactQuillRef.getEditor()
    // sContent.setContents(testingDelta)
    // update here 
    console.log("did mount" )
  }


  componentDidUpdate(nextProps, nextState){
    // let rootRef = fire.database().ref().child('delta')
    // rootRef.on('value', snap => {
    //    console.log("get content = ", snap.val())
    //    let x = snap.val()
    //    this.setState({text: Map(x)})
    //  })
  }    

  //update 
  update(value, delta, source, editor) {
    console.log("update called")
   
    //var contents;
    //console.log("value--->", value)
    //console.log('delta-before convert to immutible js-->',  delta)
    //let change = new Delta()
    //console.log("change--->",  change)

    //console.log("value--->", source)
    //console.log('editor.getContents()--->', editor.getContents())
    //let deltaString = JSON.stringify(delta)
    //console.log("delta String--->",  deltaString)
    // const dMap = Map(delta)
    // let content = editor.getContents()
    // const currentEditor = Map(content)

    // this.setState({text: value, delta: dMap, currentEditor: currentEditor})
    deltas.push(delta)
  }
  
  // componentDidUpdate() {
  //   this.attachQuillRefs()
  // }
  
  attachQuillRefs () {
    //console.log("this.reactQuillRef",this.reactQuillRef)
    // Ensure React-Quill reference is available:
    if (typeof this.reactQuillRef.getEditor !== 'function') return
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

  quillDidMount = quill => {
    this.quill = quill
    this.editor = quill.getEditor()
  }

  render(){
    //   let quillData = this.props.startingContent
    // ? this.props.startingContent.toJS()
    // : "Loading..."
    // console.log("props----", quillData)
    
    return (
        <div>
          <button onClick={this.buttonHandler}> I am  button 👩🏻‍🌾</button>
            <h1>Hi😅👩🏻‍🌾 </h1>
          <div className="text-editor" >
          <CustomToolbar />
          <ReactQuill
            ref={this.quillDidMount}
            defaultValue=''
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
          {/* <FireContainer content={this.state.text} delta={this.state.delta} currentEditor={this.state.currentEditor}/> */}
        </div>
      );
  }
}

export default Root

