import React from 'react'
import {CanvasSpace, Pt, Group, Line, Circle, Num, Rectangle} from 'pts';
import {chartElement} from './chartElement'


export default class PtsChart extends React.Component {
     
    componentDidMount(){
        this.creatChart()
    }

    creatChart(){        
        this.space = new CanvasSpace( this.ptsCanvas ).setup({bgcolor: "#fe3", resize: true, retina: true})
        this.form = this.space.getForm()
        //chartElement(this)
        console.log("updated---->", this.props.enablePointer)

          // with pointer 
         // /*
        const chartElementPointer = () => {
          this.space.add( (time, ftime) => {
            
            let c1 = Circle.fromCenter( this.space.pointer, this.space.size.y/4 );
            let c2 = Circle.fromCenter( this.space.pointer, this.space.size.y/8 );
            let ct = Circle.fromCenter( this.space.center, this.space.size.y/5 );
        
            let ins1 = Circle.intersectCircle2D( c1, ct );
            let ins2 = Circle.intersectCircle2D( c2, ct );
        
            this.form.fillOnly( "#42dc8e" ).circle( c1 );
            this.form.fill( "#fe3" ).circle( c2 );
            this.form.fill( "rgba(50,50,50,.25)" ).circle( ct );
            this.form.fill( "#fff" ).points( ins1, 5, "circle" );
            this.form.fill( "#f03" ).points( ins2, 5, "circle" );
        
          });
        }


        this.props.enablePointer
        ? chartElementPointer()
        : chartElement(this)

        //this.space.bindMouse().bindTouch().play();
          
         // this.space.bindMouse().bindTouch().play();
         
          //*/
}



    componentDidUpdate(){
        //console.log("updated---->", this.props.enablePointer)
        this.creatChart()
        
        
        //console.log("updated", this.props)
        this.props.enablePointer 
        ? this.space.bindMouse().bindTouch().play()
        : this.space.playOnce(0)
        
        
        //this.disAblePointer()
        //this.enablePointer()
       //this.space.playOnce(0)     
        //this.space.bindMouse().bindTouch().play();
    }

    render(){        
        return  (
        <div className="canvas">
            <canvas ref={(canvas) => { this.ptsCanvas = canvas; }}></canvas>  
        </div>)
    }
}

// how to disable a searies of functions / call back with another function 
// if situation A: then Do not use call back, if situation B: use call back? 