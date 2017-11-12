import { Circle} from 'pts';

export const chartElement = (pts) => {

        pts.renderChart = () => {
            let w = pts.props.data * 20
            let d = pts.props.data * 10

            // let bar = Circle.fromCenter([w * 2, 100],  20 )       
            // pts.form.fillOnly("#f6c").circle(bar)
            // draw cricle 
            // Outer C
            let outerCPoint = [pts.space.pointer.x + w, pts.space.pointer.y + w]  //pts.space.pointer            
            let outerC = Circle.fromCenter(outerCPoint, pts.space.size.y / 4)
            //mid C
            let c2 = Circle.fromCenter(outerCPoint, pts.space.size.y / 8)
            let innerC = [pts.space.center.x + d, pts.space.center.y]
            //inner C
            let ct = Circle.fromCenter(innerC, pts.space.size.y / 5);

            //set intersection
            let ins1 = Circle.intersectCircle2D(outerC, ct);
            let ins2 = Circle.intersectCircle2D(c2, ct);
            // fill C
            pts.form.fillOnly("#42dc8e").circle(outerC);
            pts.form.fill("#fe3").circle(c2);
            pts.form.fill("rgba(50, 50, 50, .25)").circle(ct);
            pts.form.fill("#fff").points(ins1, 8, "circle");
            pts.form.fill("#f03").points(ins2, 8, "circle");
    }
    pts.space.add({           
        animate: () => {
          if (pts.form.ready) pts.renderChart();
        }
      })
    }