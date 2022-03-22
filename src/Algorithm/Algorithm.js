import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";
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
            Algorithm description
          </h1>

          <div class="container">
            <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
              Finding the set of all intersecting points would take O(n*n) time
              if done in brute force. The Bentley Ottoman algorithm, otherwise
              known as the sweep line algorithm, solves this problem in lesser
              time. Imagine a line sweeping downwards in the Y axis. The
              algorithm takes note of all points and lines that it comes across
              with this line ("The sweep line"), and performs computations at
              necessary event points to check for intersections. It does so with
              the help of two structures, an event queue, which stores the event
              points (upper endpoint or lower endpoint of segment, or
              intersection point), and a status queue, which stores the ordered
              sequence of segments intersecting the sweep line. These queues are
              implemented as self-balancing, or AVL trees.
            </h4>
          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default Algorithm;
