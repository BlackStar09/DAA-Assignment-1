import React from "react";
import styled from "styled-components";
import StudentCarousel from "./StudentCarousel";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: "#191414", alignItems: "center" }}>
        <h1
          style={{
            alignSelf: "center",
            textAlign: "center",
            color: "white",
            marginTop: "40px",
            marginBottom: "40px"
          }}
        >
          Design and Analysis of Algorithm Assignment
        </h1>
        <h2
          style={{
            alignSelf: "center",
            textAlign: "center",
            color: "white",
            marginTop: "40px",
            marginBottom: "40px"
          }}
        >
          This is the implementation of the the "Bentley Ottoman Line
          Intersection Problem to find all the intersecting points given a set
          of lines
        </h2>
        <StudentCarousel />
      </div>
    );
  }
}

export default Home;
