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
      measure: "",
      input: "2 \n 1 2 3 4 \n 4 5 6 7",
      loading: true,
      contour: []
    };
  }
  async componentDidMount() {
    var input = "2 \n 1 2 3 4 \n 4 5 6 7";
    await axios.post("https://daabackend.herokuapp.com/api/coordinates", {
      input: input
    });
    await axios
      .post("https://daabackend.herokuapp.com/api/coordinates", {
        input: input
      })
      .then(async (res) => {
        this.setState({
          coord: JSON.parse(res.data).coords,
          measure: JSON.parse(res.data).output,
          contour: JSON.parse(res.data).contour,
          loading: false
        });
      });
    await console.log(this.state.contour);
  }
  openModal = () => {
    this.setState({ isOpen: true, loading: true });
  };
  runCode = async () => {
    this.setState({ loading: true });
    await axios.post("https://daabackend.herokuapp.com/api/coordinates", {
      input: this.state.input
    });
    await axios
      .post("https://daabackend.herokuapp.com/api/coordinates", {
        input: this.state.input
      })
      .then(async (res) => {
        this.setState({
          coord: JSON.parse(res.data).coords,
          measure: JSON.parse(res.data).output,
          contour: JSON.parse(res.data).contour,
          loading: false
        });
      });
    await console.log(this.state.contour);
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

                <h4>Rectangle Parameters </h4>
                <h4>xmin xmax ymin ymax </h4>
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
                <h2>0 10 0 5 </h2>
                <h2>15 26 0 5 </h2>
                <h2>4 20 4 14 </h2>
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
                  The solution to the measure problem is{" "}
                  {this.state.measure.slice(1)}
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
                    color="tomato"
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
                  backgroundColor: "tomato",
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
                  backgroundColor: "tomato",
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
          <Visualization
            contour={this.state.contour}
            coords={this.state.coord}
            title={
              "The solution to the measure problem is " +
              this.state.measure.slice(1)
            }
          />
        </Modal>
      </div>
    );
  }
}

export default VisPage;
