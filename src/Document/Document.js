import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "./Document.css";
let table = {
  Sheet1: [
    {
      "Subroutine Name": "FindIntersections()",
      "Time Complexity": "O(n*logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "findNewEvent()",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "contains()",
      "Time Complexity": "O(n+k)",
      Explanation: ""
    },
    {
      "Subroutine Name": "handleEventPoint()",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "maxValueEvent",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "inserti",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "deleteNode()",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "deleteSegment()",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "minValueEvent",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "getNextEvent",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "minValueSegement",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "getLeftNeighbor",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "getRightNeighbor",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "getNeighbors()",
      "Time Complexity": "O(logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "runAlgorithm()",
      "Time Complexity": "O((n+k)logn)",
      Explanation: ""
    },
    {
      "Subroutine Name": "All other functions",
      "Time Complexity": "O(1)",
      Explanation: ""
    }
  ]
};
let analysis = {
  Sheet1: [
    {
      number: "2",
      measure: "0.136"
    },
    {
      number: "10",
      measure: "0.176"
    },
    {
      number: "50",
      measure: "1.046"
    },
    {
      number: "100",
      measure: "1.992"
    },
    {
      number: "500",
      measure: "12.904"
    },
    {
      number: "1000",
      measure: "27.353"
    },
    {
      number: "5000",
      measure: "110.155"
    },
    {
      number: "10000",
      measure: "220.92"
    },
    {
      number: "20000",
      measure: "758.741"
    },
    {
      number: "50000",
      measure: "1555.092"
    },
    {
      number: "100000",
      measure: "3118.105"
    },
    {
      number: "200000",
      measure: "5505.140"
    },
    {
      number: "500000",
      measure: "14322.371"
    },
    {
      number: "1000000",
      measure: "27711.165"
    }
  ]
};
class Document extends React.Component {
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
            Timing Analysis{" "}
          </h1>

          <div class="container">
            <div class="row">
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "rgb(79, 4, 109)",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Number of Lines{" "}
              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "rgb(79, 4, 109)",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Time Taken for Measure Problem (ms)
              </div>
            </div>
            {analysis.Sheet1.map((item, index) => {
              return (
                <div class="row">
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "rgb(79, 4, 109)",
                      textAlign: "center"
                    }}
                  >
                    {item.number}
                  </div>
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "rgb(79, 4, 109)",
                      textAlign: "center"
                    }}
                  >
                    {item.measure}
                  </div>
                </div>
              );
            })}
          </div>
          {/* <h1 style={{ color: "white", textAlign: "center", margin: "20px" }}>
            Calculating the Time Complexity{" "}
          </h1> */}

          <div class="container">
            <h2 style={{ margin: "20px" }}>
              The Complexity Analysis for the common subroutines involved in our
              implementation of the Bentley Ottoman algorithm for finding the
              intersecting points. Let k be the number of intersections of the
              line segments. The overall complexity is O((n+k)logn) :
            </h2>
            <div class="row">
              <div
                class="col-3"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "rgb(79, 4, 109)",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Subroutine Name
              </div>
              <div
                class="col-3"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "rgb(79, 4, 109)",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Time Complexity
              </div>
              {/* <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "rgb(79, 4, 109)",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Explanation
              </div> */}
            </div>
            {table.Sheet1.map((item, index) => {
              return (
                <div class="row">
                  <div
                    class="col-3"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "rgb(79, 4, 109)"
                    }}
                  >
                    {item["Subroutine Name"]}
                  </div>
                  <div
                    class="col-3"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "rgb(79, 4, 109)"
                    }}
                  >
                    {item["Time Complexity"]}
                  </div>
                  {/* <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "rgb(79, 4, 109)"
                    }}
                  >
                    {item.Explanation}
                  </div> */}
                </div>
              );
            })}
            {/* <div
              style={{
                marginTop: "40px",
                marginBottom: "40px"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>
                Additional Subroutine for Measure problem:-
              </h2>
              <h5>
                <span style={{ fontWeight: "bold" }}>measure() - O(n) -</span>{" "}
                iterates through all the stripes and computes the total
              </h5>
            </div> */}
            {/* <div
              style={{
                fontWeight: "bold",
                marginTop: "40px",
                marginBottom: "40px"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>
                Overall Time Complexity for Measure Problem:-
              </h2>
              <h5>
                = Taking input from user + findFrame() + rectangle_DAC() +
                measure()
              </h5>
              <h5>= O(n) + O(n) + O(n*logn*logn) + O(n)</h5>
              <h5>= O(n*logn*logn)</h5>
            </div> */}
            {/* <div
              style={{
                marginTop: "40px",
                marginBottom: "40px"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>
                Additional Subroutine for Contour problem:-
              </h2>
              <h5>
                <span style={{ fontWeight: "bold" }}>
                  contour() - O(n^2) -{" "}
                </span>
                iterates through all the horizontal edges and for each edge and
                the set of stripes calls contour_pieces (O(n)) to get a set of
                line segments, each of which is used to generate the horizontal
                contours (O(n)).
              </h5>

              <h5>
                <span style={{ fontWeight: "bold" }}>
                  contour_pieces() - O(n) -
                </span>
                There are multiple O(n) operations (iterate through all stripes,
                ctree nodes, set of intervals J) along with a call to
                inorder_find() which takes O(logn) time, but all of them occur
                in parallel and hence overall complexity is O(n)
              </h5>
              <h5>
                <span style={{ fontWeight: "bold" }}>
                  inorder_find() - O(logn) -
                </span>
                It is a recursive function with the recurrence relation given by
                T(n) = 2T(n/2) + O(1). The solution to this recurrence relation
                is T(n) = O(logn).
              </h5>
            </div> */}
            {/* <div
              style={{
                fontWeight: "bold",
                marginTop: "40px",
                marginBottom: "40px"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>
                Overall Time Complexity for Contour Problem:-
              </h2>
              <h5>
                = Taking input from user + findFrame() + rectangle_DAC() +
                contour()
              </h5>
              <h5>= O(n) + O(n) + O(n*logn*logn) + O(n^2)</h5>
              <h5>= O(n^2)</h5>
            </div> */}
          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default Document;
