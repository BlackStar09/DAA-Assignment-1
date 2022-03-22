import React from "react";
import styled from "styled-components";
import JXGBoard from "jsxgraph-react-js";

class Visualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logicJS = (b1) => {
    var coords = this.props.coords;
    var coord = coords[0];

    b1.suspendUpdate();
    for (var i = 0; i < coords.length; i++) {
      if (i == 0) {
        var p1 = b1.create("point", [coords[i].y1, coords[i].x1], {
          size: 0,
          name: ""
        });
        var p2 = b1.create("point", [coords[i].y1, coords[i].x2], {
          size: 0,
          name: ""
        });
        var poly = b1.create("line", [p1, p2, p3, p4], {
          borders: { strokeColor: "black" },
          fillColor: "#4287f5"
        });
      } else {
        var p1 = b1.create("point", [coords[i].y1, coords[i].x1], {
          size: 0,
          name: ""
        });
        var p2 = b1.create("point", [coords[i].y1, coords[i].x2], {
          size: 0,
          name: ""
        });
        var p3 = b1.create("point", [coords[i].y2, coords[i].x2], {
          size: 0,
          name: ""
        });
        var p4 = b1.create("point", [coords[i].y2, coords[i].x1], {
          size: 0,
          name: ""
        });
        var poly = b1.create("polygon", [p1, p2, p3, p4], {
          borders: { strokeColor: "black" }
        });
      }
    }

    var contour = this.props.contour;
    for (var i = 0; i < contour.length; i++) {
      var p1 = b1.create("point", [contour[i].x1, contour[i].y1], {
        size: 0,
        name: ""
      });
      var p2 = b1.create("point", [contour[i].x2, contour[i].y2], {
        size: 0,
        name: ""
      });
      var li = b1.create("line", [p1, p2], {
        straightFirst: false,
        straightLast: false,
        strokeColor: "#ff0000",
        strokeWidth: 2
      });
    }

    b1.unsuspendUpdate();
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{this.props.title} </h1>
        <JXGBoard
          logic={this.logicJS}
          boardAttributes={{
            axis: true,
            boundingbox: [-12, 10, 12, -10],
            zoom: {
              factorX: 1.25,
              factorY: 1.25,
              wheel: true,
              needshift: true,
              eps: 0.1
            }
          }}
          style={{
            border: "3px solid tomato",
            height: "1000px",
            width: "fill",
            fontSize: "30px"
          }}
        />
      </div>
    );
  }
}

export default Visualization;
