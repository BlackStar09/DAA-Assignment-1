import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";
import test0 from "../Assets/testcase/case1.png";
import test1 from "../Assets/testcase/case2.png";
import test2 from "../Assets/testcase/case3.png";
import test3 from "../Assets/testcase/case4.png";
import test4 from "../Assets/testcase/case5.png";
import test5 from "../Assets/testcase/case6.png";
import test6 from "../Assets/testcase/case7.png";
import test7 from "../Assets/testcase/case8.png";
import test8 from "../Assets/testcase/case9.png";
import test9 from "../Assets/testcase/test9.png";
import test10 from "../Assets/testcase/case11.png";
import test11 from "../Assets/testcase/case10.png";
const results = {
  Sheet1: [
    {
      INPUT: "ACCGCUAGU",
      OUTPUT: "2  \n0 8\n2 7",
      Image: test0
    },
    {
      INPUT: "UCUCUGGUUA\nGGAAACUAAC\nUAGGGA",
      OUTPUT: "9\n0 25\n1 23\n3 22\n4 21\n6 19\n7 18\n8 17\n9 16\n10 15",
      Image: test1
    },
    {
      INPUT:
        "GGUCUGCUAU\nUUCUAUUUACG\nUUUUAGUACU\nCUGGAAAC\nAGAAUCUA\nCUAAAACA\nAGGCAAAA\nUGC\nCGUGUUUC",
      OUTPUT:
        "25\n0 73\n59 72\n1 58\n2 55\n4 54\n20 53\n5 19\n7 18\n8 15\n9 14\n21 52\n22 51\n23 50\n24 49\n25 48\n26 47\n27 46\n28 43\n30 41\n31 40\n32 39\n33 38\n60 71\n61 70\n62 68",
      Image: test2
    },
    // {
    //   INPUT: "4\n1 3 2 1 \n0 0 0 0 \n0 3 3 3 \n3 1 0 1 ",
    //   OUTPUT: "The intersecting points are (2 , 1) .",
    //   Image: test3
    // },
    {
      INPUT:
        "GGUCUGCUA\nUUUCUAUU\nUACGUUUUAG\nUACUCUGGA\nAACAGAAUCU\nACUAAAACAA\nGGCAAAAUGC\nCGUGUUUAUC\nUCGUCAACUU\nGUUGGCGAG\nAUC ",
      OUTPUT:
        "34\n0 97\n73 96\n59 72\n1 58\n2 55\n4 54\n20 53\n5 19\n7 18\n8 15\n9 14\n21 52\n22 51\n23 50\n24 49\n25 48\n26 47\n27 46\n28 43\n30 41\n31 40\n32 39\n33 38\n60 71\n61 70\n62 68\n74 95\n75 94\n76 93\n77 92\n78 91\n80 89\n81 88\n82 87",
      Image: test4
    },
    {
      INPUT: "GCCUGGAGCGC ",
      OUTPUT: "3\n0 10\n1 9\n2 7",
      Image: test5
    },
    {
      INPUT: "GGGGACUGC\nGUUCGCGCU\nUUCCCC",
      OUTPUT: "8\n0 23\n1 22\n2 21\n3 20\n4 17\n5 15\n7 14\n8 13\n",
      Image: test6
    },
    {
      INPUT: "GGGUGUAGA\nAAAGUAAGG\nGAAACUCAAA\nCCCCUUUCU\nACACCC",
      OUTPUT:
        "15\n0 42\n1 41\n2 40\n3 39\n4 38\n5 37\n6 36\n7 35\n9 34\n10 33\n11 32\n12 28\n13 25\n15 23\n17 22",
      Image: test7
    },
    {
      INPUT: "UUCUGC",
      OUTPUT: "0",
      Image: test8
    },
    {
      INPUT: "CAGCAGGCU\nAAGGCAUG\nAAA",
      OUTPUT: "4\n3 16\n4 15\n6 13\n7 12",
      Image: test10
    },
    {
      INPUT: "GGACUCGACUCC",
      OUTPUT: "3\n0 11\n1 10\n2 9",
      Image: test11
    }
  ]
};
function NewlineText(props) {
  const text = props.text;
  const newText = text.split("\n").map((str) => <h2>{str}</h2>);

  return newText;
}
class Result extends React.Component {
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
        style={{ position: "absolute" }}
        disableDefaultStyles
        renderThumbHorizontal={(props) => <div {...props} class="vertical" />}
        renderThumbVertical={(props) => <div {...props} class="vertical" />}
        style={{ width: "fill", height: this.state.height * 0.93 }}
      >
        <div
          class="container"
          style={{
            color: "white",
            alignSelf: "center",
            minWidth: "-webkit-fill-available",
            marginRight: "10px",
            marginLeft: "10px"
          }}
        >
          <h1 style={{ textAlign: "center", marginTop: 10 }}>
            Result of our Code
          </h1>
          <div class="row">
            <div
              class="col-2"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "rgb(79, 4, 109)",
                fontWeight: "bold"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Input</h2>
            </div>
            <div
              class="col-4"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "rgb(79, 4, 109)",
                fontWeight: "bold"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Output</h2>
            </div>
            {/* <div
              class="col"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "rgb(79, 4, 109)",
                fontWeight: "bold"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Visualize</h2>
            </div> */}
          </div>
          {results.Sheet1.map((item, index) => {
            var imgPath = "../Assets/testcase/test" + index.toString() + ".png";
            return (
              <div key={index} class="row">
                <div
                  class="col-2"
                  style={{
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "rgb(79, 4, 109)",
                    fontWeight: "bold"
                  }}
                >
                  <NewlineText text={item.INPUT} />
                </div>
                <div
                  class="col-4"
                  style={{
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "rgb(79, 4, 109)",
                    fontWeight: "bold"
                  }}
                >
                  <NewlineText text={item.OUTPUT} />
                </div>
                {/* <div
                  class="col"
                  style={{
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "rgb(79, 4, 109)",
                    fontWeight: "bold"
                  }}
                >
                  <img
                    src={item.Image}
                    style={{ width: "inherit", margin: 10 }}
                    alt="Image"
                  />
                </div> */}
              </div>
            );
          })}
        </div>
      </Scrollbars>
    );
  }
}

export default Result;
