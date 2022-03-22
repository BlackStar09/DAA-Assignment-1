import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";
import AlgorithmImage from "../Assets/algorithm3.jpeg";
let common = [
  "We define a frame (rectangle) F that encloses all the iso-rectangles.",
  "For the given set of iso-rectangles, their vertical edges are extracted and stored in a sorted manner as E.",
  "Rectangle dac (E,F) calls the recursive procedure stripes and returns the final set of stripes with their x_union.",
  "We apply a divide and conquer algorithm stripes on the set of edges E, and the given frame F.",
  "When we"
];
class Algorithm extends React.Component {
  constructor() {
    super();
    this.state = {
      height: ""
    };
  }
  componentDidMount() {
    this.setState({ height: window.innerHeight });
  }
  render() {
    return (
      <Scrollbars
        disableDefaultStyles
        renderThumbHorizontal={(props) => (
          <div {...props} className="vertical" />
        )}
        renderThumbVertical={(props) => <div {...props} className="vertical" />}
        style={{ width: "fill", height: this.state.height * 0.9 }}
      >
        <div style={{ color: "white" }}>
          <h1 style={{ color: "white", textAlign: "center", margin: "20px" }}>
            General Discussion on Algorithm
          </h1>

          <div class="container">
            <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
              The algorithm aims to solve the measure and contour problems using
              the separational representation approach (divide and conquer), as
              opposed to line-sweep approach.
            </h4>
            <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
              The algorithm proposes that both the contour and measure problems
              can be solved easily once we have computed an abstract data
              structure called stripes.
            </h4>
            <div class="row">
              <div
                class="col-3"
                style={{
                  border: "solid",
                  borderColor: "tomato",
                  borderStyle: "1px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <h2 style={{ fontWeight: "bold", alignSelf: "center" }}>
                  Measure Problem :{" "}
                </h2>
              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderColor: "tomato",
                  borderStyle: "1px"
                }}
              >
                <h4 style={{}}>
                  {
                    "To find the area of the union of given iso oriented rectangles "
                  }
                </h4>
                <h4 style={{ textAlign: "left" }}>
                  {"stripe :- { x interval, y interval, integer x_union }"}
                </h4>
              </div>
            </div>
            <div class="row">
              <div
                class="col-3"
                style={{
                  border: "solid",
                  borderColor: "tomato",
                  borderStyle: "1px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <h2 style={{ fontWeight: "bold", alignSelf: "center" }}>
                  Contour Problem :{" "}
                </h2>
              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderColor: "tomato",
                  borderStyle: "1px"
                }}
              >
                <h4 style={{}}>
                  {
                    "To find the boundary between the free and covered areas of the plane defined by the union of rectangles"
                  }
                </h4>
                <h4 style={{ textAlign: "left" }}>
                  {"stripe : - {x interval, y interval,ctree* tree}"}
                </h4>
                <h4 style={{ textAlign: "left" }}>
                  {
                    "ctree : - empty | { int x, lru side, ctree *lson, ctree *rson}"
                  }
                </h4>
                <h4 style={{ textAlign: "left" }}>
                  {"lru :- { left | right | undef }"}
                </h4>
              </div>
            </div>
            <div class="row" style={{ marginTop: "40px" }}>
              <h2 style={{ fontWeight: "bold" }}>
                {" "}
                Common Approach to the Algorithms :
              </h2>
              <img
                src={AlgorithmImage}
                style={{ width: "-webkit-fill-available", marginTop: "40px" }}
              />
              {/* <ul>
                {common.map((item, index) => {
                  return (
                    <li key={index}>
                      <h3>{item}</h3>{" "}
                    </li>
                  );
                })}
              </ul> */}
            </div>
          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default Algorithm;
