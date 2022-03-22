import React from "react";
import Visualization from "./Visulaization";

import "./Card.css";
import VisCard from "./VisCard";
import Modal from "react-modal";
import plot from "./plot.png";
const axios = require("axios");
const csv = require("csvtojson");

const customStyles = {
  content: {}
};
class VisPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: [1, 2, 3, 4],
      rectangleArray: [[]],
      coord: [],
      isOpen: false,
      measure: "",
      input: "2 \n 1 2 3 4 \n 4 5 6 7"
    };
  }
  componentDidMount() {
    var input = "2 \n 1 2 3 4 \n 4 5 6 7";
    axios
      .post("https://daabackend.herokuapp.com/api/coordinates", {
        input: input
      })
      .then(async (res) => {
        this.setState({
          coord: JSON.parse(res.data).coords,
          measure: JSON.parse(res.data).output
        });
      });
  }
  openModal = () => {
    this.setState({ isOpen: true });
  };
  runCode = () => {
    axios
      .post("https://daabackend.herokuapp.com/api/coordinates", {
        input: this.state.input
      })
      .then(async (res) => {
        this.setState({
          coord: JSON.parse(res.data).coords,
          measure: JSON.parse(res.data).output
        });
      });
  };
  render() {
    return (
      <div
        class="conatiner"
        style={{ alignSelf: "center", marginLeft: "0px", color: "white" }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>
          Run and Visualize the Algorithm
        </h1>

        <div className="midContainer">
          <VisCard
            measure={this.state.measure}
            openModal={this.openModal}
          ></VisCard>
          <Modal
            isOpen={this.state.isOpen}
            onRequestClose={() => this.setState({ isOpen: false })}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <Visualization coords={this.state.coord} />
          </Modal>
        </div>
        <div
          class="row"
          style={{ alignSelf: "center", marginLeft: "0px", marginTop: "20px" }}
        >
          <div
            class="col-10"
            style={{
              display: "flex",

              flexDirection: "column"
            }}
          >
            <div class="row" style={{ width: "inherit", alignSelf: "center" }}>
              <textarea
                style={{ width: "100%", height: "100px" }}
                value={this.state.input}
                onChange={(event) => {
                  console.log(event.target.value);
                  this.setState({ input: event.target.value });
                }}
              />
            </div>
            <div class="row">
              <div class="col">
                <h2 style={{ alignSelf: "flex-start", height: "100px" }}>
                  Example for Input:
                </h2>
              </div>
              <div
                class="col"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <h2> No. of Rectangles</h2>
                <div style={{ height: "20px" }} />

                <h2>Coordinated of </h2>
                <h2>x1 x2 y1 y2 </h2>
              </div>
              <div
                class="col "
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  flexDirection: "column"
                }}
              >
                <h2>3</h2>
                <div style={{ height: "20px" }} />

                <h2>4 1 2 6 </h2>
                <h2>2 6 7 5 </h2>
                <h2>8 5 4 7 </h2>
              </div>
            </div>
          </div>
          <div
            class="col-2"
            style={{
              display: "flex",
              height: "100px",

              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            {/* <h1
              onClick={this.runCode}
              style={{
                alignSelf: "center",
                backgroundColor: "tomato",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "20px",
                paddingLeft: "20px",
                borderRadius: "50px",
                textAlign: "center"
              }}
            >
              Run
            </h1> */}
            <button
              onClick={() => {
                this.runCode();
              }}
              style={{
                alignSelf: "center",
                backgroundColor: "tomato",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "20px",
                paddingLeft: "20px",
                borderRadius: "50px",
                textAlign: "center"
              }}
              type="button"
              class="btn-lg btn-danger"
            >
              Run
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VisPage;

import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";
import Visualization from "./Visulaization";
import "./Card.css";
import VisCard from "./VisCard";
import Modal from "react-modal";
import plot from "./plot.png";
const axios = require("axios");
const csv = require("csvtojson");

const customStyles = {
  content: {}
};
class VisPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: [1, 2, 3, 4],
      rectangleArray: [[]],
      coord: [],
      isOpen: false,
      measure: "",
      input: "2 \n 1 2 3 4 \n 4 5 6 7"
    };
  }
  componentDidMount() {
    var input = "2 \n 1 2 3 4 \n 4 5 6 7";
    axios
      .post("https://daabackend.herokuapp.com/api/coordinates", {
        input: input
      })
      .then(async (res) => {
        this.setState({
          coord: JSON.parse(res.data).coords,
          measure: JSON.parse(res.data).output
        });
      });
  }
  openModal = () => {
    this.setState({ isOpen: true });
  };
  runCode = () => {
    axios
      .post("https://daabackend.herokuapp.com/api/coordinates", {
        input: this.state.input
      })
      .then(async (res) => {
        this.setState({
          coord: JSON.parse(res.data).coords,
          measure: JSON.parse(res.data).output
        });
      });
  };
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
        <div
          class="conatiner"
          style={{ alignSelf: "center", marginLeft: "0px", color: "white" }}
        >
          <h1 style={{ textAlign: "center", color: "white" }}>
            Run and Visualize the Algorithm
          </h1>

          <div className="midContainer">
            <VisCard
              measure={this.state.measure}
              openModal={this.openModal}
            ></VisCard>
            <Modal
              isOpen={this.state.isOpen}
              onRequestClose={() => this.setState({ isOpen: false })}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <Visualization coords={this.state.coord} />
            </Modal>
          </div>
          <div
            class="row"
            style={{
              alignSelf: "center",
              marginLeft: "0px",
              marginTop: "20px"
            }}
          >
            <div
              class="col-10"
              style={{
                display: "flex",

                flexDirection: "column"
              }}
            >
              <div
                class="row"
                style={{ width: "inherit", alignSelf: "center" }}
              >
                <textarea
                  style={{ width: "100%", height: "100px" }}
                  value={this.state.input}
                  onChange={(event) => {
                    console.log(event.target.value);
                    this.setState({ input: event.target.value });
                  }}
                />
              </div>
              <div class="row">
                <div class="col">
                  <h2 style={{ alignSelf: "flex-start", height: "100px" }}>
                    Example for Input:
                  </h2>
                </div>
                <div
                  class="col"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <h2> No. of Rectangles</h2>
                  <div style={{ height: "20px" }} />

                  <h2>Coordinated of </h2>
                  <h2>x1 x2 y1 y2 </h2>
                </div>
                <div
                  class="col "
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    flexDirection: "column"
                  }}
                >
                  <h2>3</h2>
                  <div style={{ height: "20px" }} />

                  <h2>4 1 2 6 </h2>
                  <h2>2 6 7 5 </h2>
                  <h2>8 5 4 7 </h2>
                </div>
              </div>
            </div>
            <div
              class="col-2"
              style={{
                display: "flex",
                height: "100px",

                justifyContent: "center",
                flexDirection: "column"
              }}
            >
              {/* <h1
              onClick={this.runCode}
              style={{
                alignSelf: "center",
                backgroundColor: "tomato",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "20px",
                paddingLeft: "20px",
                borderRadius: "50px",
                textAlign: "center"
              }}
            >
              Run
            </h1> */}
              <button
                onClick={() => {
                  this.runCode();
                }}
                style={{
                  alignSelf: "center",
                  backgroundColor: "tomato",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  borderRadius: "50px",
                  textAlign: "center"
                }}
                type="button"
                class="btn-lg btn-danger"
              >
                Run
              </button>
            </div>
          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default VisPage;
