import React from 'react'
import fire from './fire'

export default class Root extends React.Component {
    constructor(props) {
        super(props)
        this.state = { text: '', delta: { }, speed: 1, react: '' } // You can also pass a Quill Delta here
        this.updateDB = this.updateDB.bind(this)
        //firebase props
        this.rootRef = fire.database().ref().child('react');
        this.speedRef = this.rootRef.child('speed')  
      }

      componentDidMount(){
        console.log('props --->', this.props)
        
      this.speedRef.on('value', snap => {
          console.log('snap.val() --->', snap.val())
          this.setState({
            speed: snap.val()
          })
        }, errorObject => {
           console.log(errorObject.code)
        })
      }
      componentWillUpdate(nextProps, nextState){

        console.log('update --->', nextProps.delta.toJS())
        //let x = JSON.parse(nextProps.delta)
        
      }
      

      updateDB(e) {
        e.preventDefault();
        let x = this.state.speed
        x++

        this.rootRef.set({
          speed: x
        });
    
        this.rootRef.on('value', snap => {
          this.setState({react: JSON.stringify(snap)})
        })
      }

      render(){
        return (
            <div className="firebaseOutPut">
             <p> this is coming from fire base🔥🔥 </p>
             <h2>{this.state.speed}: {this.state.react}</h2>
             <h3>quill value: {this.props.content}</h3>
             <h4>delta: {this.props.delta.join(' ')}</h4>
             <button onClick={this.updateDB}> I am  button 👩🏻‍🌾</button>
            </div>
        )
    }
}
