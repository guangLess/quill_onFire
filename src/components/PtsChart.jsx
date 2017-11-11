import React from 'react'
import {CanvasSpace, Pt, Group, Line, Circle, Num, Rectangle} from 'pts';


export default class PtsChart extends React.Component {

    creatChart(){        
        this.space = new CanvasSpace( this.ptsCanvas ).setup({bgcolor: "#fe3", resize: true, retina: true})
        this.form = this.space.getForm()   
        //console.log("--->PtsChart--->",this.props, this.space.size)

        this.renderChart = () => {
            let w = this.props.data * 20
            let d = this.props.data * 10
            

            // console.log("--->renderChart- index of the board-->", this.props.data)
            
            // let bar = Circle.fromCenter([w * 2, 100],  20 )       
            // this.form.fillOnly("#f6c").circle(bar)

            // draw cricle 
            // Outer C
            let outerCPoint = [this.space.pointer.x + w, this.space.pointer.y + w]  //this.space.pointer            
            let outerC = Circle.fromCenter( outerCPoint, this.space.size.y / 4 )
            //mid C
            let c2 = Circle.fromCenter( outerCPoint, this.space.size.y / 8 )
            let innerC = [this.space.center.x - d, this.space.center.y + d ]
            //inner C
            let ct = Circle.fromCenter( innerC, this.space.size.y / 5 );
            
            //set intersection
            let ins1 = Circle.intersectCircle2D( outerC, ct );
            let ins2 = Circle.intersectCircle2D( c2, ct );
            // fill C
            this.form.fillOnly( "#42dc8e" ).circle( outerC );
            this.form.fill( "#fe3" ).circle( c2 );
            this.form.fill( "rgba(50, 50, 50, .25)" ).circle( ct );
            this.form.fill( "#fff" ).points( ins1, 8, "circle" );
            this.form.fill( "#f03" ).points( ins2, 8, "circle" );
        }

          this.space.add({           
            // render
            animate:() => {
              if (this.form.ready) this.renderChart();
            }
          });

       // this.space.bindMouse().bindTouch()//.play()
        this.space.playOnce(0);        
    }

    componentDidMount(){
        this.creatChart()
    }

    componentDidUpdate(){
        console.log("updated")
        this.space.playOnce(0);        
    }

    render(){
      // console.log("--->render()--->", this.props.data)
        
        return  (
        <div className="canvas">
            <canvas ref={(canvas) => { this.ptsCanvas = canvas; }}></canvas>  
        </div>)
    }
}