
export const sketch = (p) => {
    //let rotation = 10;
      p.setup = function () {
        p.createCanvas(600, 400, p.WEBGL);
      };
    
      p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        if (props.rotation){
          rotation = props.rotation * Math.PI / 180;
        }
      };
    
      p.draw = function () {
        p.background(100);
        p.noStroke();
        p.push();
        //p.rotateY(p.mouseX);
        p.box(100);
        p.pop();
      };
  }