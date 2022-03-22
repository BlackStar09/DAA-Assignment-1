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
          backgroundColor: "tomato",
          height: "400px",
          justifyContent: "center"
        }}
      >
        <img
          src={ProfielImg}
          style={{
            height: 100,
            width: 100,
            borderRadius: 50,
            alignSelf: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: 10
          }}
          alt="Img"
        />
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
