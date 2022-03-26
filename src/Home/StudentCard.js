import React from "react";
import styled from "styled-components";
import ProfielImg from "../Assets/profile.png";
class StudentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          backgroundColor: "rgb(79, 4, 109)",
          height: "400px",
          justifyContent: "center"
        }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>
          {this.props.item.name}
        </h1>
        {/* <p style={{ color: "white", fontSize: "18px" }}>
          Contribution: {this.props.item.workedOn}
        </p> */}
      </div>
    );
  }
}

export default StudentCard;
