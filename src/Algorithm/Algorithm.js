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
              The task was to find the maximum number of pairs that could occur
              in given RNA strand. The catch with this problem is:
              <ul>
                <li>
                  Adenine can only pair with Uracil, Cytosine with Guanine
                </li>
                <li>There should be no knots in the pairings</li>
                <li>Each Base can only have one pairing</li>
              </ul>
              The above problem was solved through a dynamic programming
              solution
            </h4>
          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default Algorithm;
