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
    var output = this.props.output;
    var coord = coords[0];

    b1.suspendUpdate();
    for (var i = 0; i < coords.length; i++) {
      console.log(coords[i].x1, coords[i].y1);
      var p1 = b1.create("point", [coords[i].x1, coords[i].y1], {
        size: 3,
        name: "",
        fillColor: "black",
        strokeColor: "black"
      });
      var p2 = b1.create("point", [coords[i].x2, coords[i].y2], {
        size: 3,
        name: "",
        fillColor: "black",
        strokeColor: "black"
      });
      var poly = b1.create("line", [p1, p2], {
        borders: {},
        straightLast: false,
        straightFirst: false
      });
    }

    for (var i = 0; i < output.length; i++) {
      console.log(output[i].x, output[i].y);
      var p1 = b1.create("point", [output[i].x, output[i].y], {
        size: 3,
        name: ("( " + output[i].x + " , " + output[i].y + " )").toString(),
        fillColor: "red",
        strokeColor: "red"
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
