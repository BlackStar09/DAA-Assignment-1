import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "./Document.css";
let table = {
  Sheet1: [
    {
      "Subroutine Name": "computedp()",
      "Time Complexity": "O(n^2)",
      Explanation: ""
    },
    {
      "Subroutine Name": "findPairs()",
      "Time Complexity": "O(n)",
      Explanation: ""
    }
  ]
};
let analysis = {
  Sheet1: [
    {
      number: "10",
      measure: "0.00001"
    },
    {
      number: "50",
      measure: "0.001"
    },
    {
      number: "100",
      measure: "0.006"
    },
    {
      number: "150",
      measure: "0.018"
    },
    {
      number: "200",
      measure: "0.043"
    },
    {
      number: "250",
      measure: "0.083"
    },
    {
      number: "300",
      measure: "0.138"
    },
    {
      number: "350",
      measure: "0.218"
    },
    {
      number: "400",
      measure: "0.329"
    },
    {
      number: "450",
      measure: "0.474"
    },
    {
      number: "500",
      measure: "0.64"
    },
    {
      number: "750",
      measure: "2.156"
    },
    {
      number: "1000",
      measure: "5"
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
                Time Taken for Measure Problem (s)
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
              implementation of the RNA pair finding algorithm. The overall
              complexity is O(n^2) :
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
