import React from "react";
import Visualization from "./Visulaization";

import "./Card.css";
import VisCard from "./VisCard";
import ReactLoading from "react-loading";

import Modal from "react-modal";
import plot from "./plot.png";
import { Digital } from "react-activity";
import "react-activity/dist/react-activity.css";
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
      input: "2 \n 0 1 1 0 \n 0 0 1 1",
      output: [],
      loading: true
    };
  }
  async componentDidMount() {
    var input = "2 \n 0 1 1 0 \n 0 0 1 1";
    await axios.post("https://daabackend.herokuapp.com/api/sweep", {
      input: input
    });
    await axios
      .post("https://daabackend.herokuapp.com/api/sweep", {
        input: input
      })
      .then(async (res) => {
        console.log(res);
        this.setState({
          coord: JSON.parse(res.data).coords,
          output: JSON.parse(res.data).output,
          loading: false
        });
      });
  }
  openModal = () => {
    this.setState({ isOpen: true, loading: true });
  };
  runCode = async () => {
    this.setState({ loading: true });
    await axios.post("https://daabackend.herokuapp.com/api/sweep", {
      input: this.state.input
    });
    await axios
      .post("https://daabackend.herokuapp.com/api/sweep", {
        input: this.state.input
      })
      .then(async (res) => {
        console.log(res);
        this.setState({
          coord: JSON.parse(res.data).coords,
          output: JSON.parse(res.data).output,
          loading: false
        });
      });
  };
  render() {
    return (
      <div
        class="conatiner"
        style={{
          alignSelf: "center",
          marginLeft: "0px",
          color: "white",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>
          Run and Visualize the Algorithm
        </h1>
        {/* <div
          class="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            alignSelf: "center",
            marginLeft: "0px",
            marginTop: "20px"
          }}
        >
          <div class="col-10" style={{ alignSelf: "flex-start" }}>
            <VisCard
              measure={this.state.measure}
              openModal={this.openModal}
            ></VisCard>
          </div>
        </div> */}
        <div
          class="row"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignSelf: "center",
            marginLeft: "0px",
            marginTop: "20px"
          }}
        >
          <div
            class="col-7"
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
            </div>
          </div>
          <div
            class="col-5"
            style={{
              display: "flex",
              height: "fill",
              justifyContent: "space-between",
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
            <div class="row">
              <h1
                style={{ textAlign: "center", width: "-webkit-fill-available" }}
              >
                {" "}
                Output
              </h1>
              {this.state.loading == false ? (
                <h3
                  style={{
                    textAlign: "center",
                    width: "-webkit-fill-available"
                  }}
                >
                  {" "}
                  The intersecting points are
                  {this.state.output.map((item, index) => {
                    return (
                      " (" +
                      item.x +
                      " , " +
                      item.y +
                      ") " +
                      (this.state.output.length - 1 == index ? "." : ", ")
                    ).toString();
                  })}
                </h3>
              ) : (
                <div
                  style={{
                    width: "-webkit-fill-available",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <ReactLoading
                    type="bars"
                    color="rgb(79, 4, 109)"
                    height={"50%"}
                    width={"50px"}
                  />
                </div>
              )}
            </div>
            <div
              class="row"
              style={{ width: "fit-content", alignSelf: "center" }}
            >
              <button
                onClick={() => {
                  this.openModal();
                }}
                style={{
                  alignSelf: "center",
                  backgroundColor: "rgb(79, 4, 109)",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  borderRadius: "50px",
                  textAlign: "center",
                  width: "-webkit-fill-available"
                }}
                type="button"
                class="btn-lg btn-danger"
              >
                Visualize
              </button>
              <button
                onClick={() => {
                  this.runCode();
                }}
                style={{
                  alignSelf: "center",
                  backgroundColor: "rgb(79, 4, 109)",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  borderRadius: "50px",
                  textAlign: "center",
                  marginTop: "50px",
                  width: "-webkit-fill-available"
                }}
                type="button"
                class="btn-lg btn-danger"
              >
                Run
              </button>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={() => this.setState({ isOpen: false })}
          style={customStyles}
          contentLabel="Example Modal"
          onAfterOpen={() => {
            this.setState({ loading: false });
          }}
        >
          <Visualization output={this.state.output} coords={this.state.coord} />
        </Modal>
      </div>
    );
  }
}

export default VisPage;
