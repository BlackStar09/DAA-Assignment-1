import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";

class Issues extends React.Component {
  constructor() {
    super();
    this.state = {};
    console.log(__dirname);
  }

  render() {
    return (
      <div
        class="container"
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            alignSelf: "center",
            marginTop: "20px",
            marginBottom: "40px"
          }}
        >
          Documentation{" "}
        </h1>
        <div class="row">
          <div
            class="col"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h3>Measure Problem </h3>
            <h5>
              <a href="https://thealchemist1307.github.io/measure-problem-documentation/">
                Go to Documentation
              </a>
            </h5>
          </div>
          <div
            class="col"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h3>Contour Problem</h3>
            <h5>
              <a href="https://thealchemist1307.github.io/contour-documentation/documentation/html/">
                Go to Documentation
              </a>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Issues;
