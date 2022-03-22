import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "./Document.css";
import Plot from "../Assets/plot.png";
let table = {
  Sheet1: [
    {
      "Subroutine Name": "y_set()",
      "Time Complexity": "O(n*logn)",
      Explanation:
        "iterating through the set of rectangles of size n, and insertion of each of them takes O(logn) time"
    },
    {
      "Subroutine Name": "Y_partition()",
      "Time Complexity": "O(n*logn)",
      Explanation:
        "Iteration through all y_cordinates takes O(n) and in each iteration we insert into a priority queue O(logn)"
    },
    {
      "Subroutine Name": "findFrame()",
      "Time Complexity": "O(n)",
      Explanation:
        "iterates through all the rectangles and finds the minimum and maximum y and x coordinates"
    },
    {
      "Subroutine Name": "set_intersection()",
      "Time Complexity": "O(n)",
      Explanation:
        "Exploits the fact that the sets are in sorted order, and uses the two pointer approach to find intersection"
    },
    {
      "Subroutine Name": "set_difference()",
      "Time Complexity": "O(n)",
      Explanation:
        "Exploits the fact that the sets are in sorted order, and uses the two pointer approach to find intersection"
    },
    {
      "Subroutine Name": "set_union()",
      "Time Complexity": "O(n)",
      Explanation: "Adds all elements excluding the duplicates"
    },
    {
      "Subroutine Name": "copy()",
      "Time Complexity": "O(n*logn)",
      Explanation:
        "Takes the intervals(sorted) and the stripes(sorted) and uses two pointer O(n) to find the optimum stripe and then insert into set in O(logn)"
    },
    {
      "Subroutine Name": "blacken()",
      "Time Complexity": "O(n*logn)",
      Explanation:
        "Takes the intervals(sorted) and the stripes(sorted) and uses two pointer O(n) to find the optimum stripe to update x_union and then insert into set in O(logn)"
    },
    {
      "Subroutine Name": "concat()",
      "Time Complexity": "O(n*logn)",
      Explanation:
        "Takes advantage of the ordering of stripes and partitions to update the x_union in O(n) and insert in O(logn),"
    },
    {
      "Subroutine Name": "stripes()",
      "Time Complexity": "O(n*logn*logn)",
      Explanation:
        "T(n)= 2*T(n/2) + O(n*logn)\n2*T(n/2) - call for stripes for left and right vertical edges\nO(n*logn) - bottleneck caused due to concat() / blacken() / copy() . All are O(n*logn) operations."
    },
    {
      "Subroutine Name": "rectangle_DAC()",
      "Time Complexity": "O(n*logn) + O(n*logn*logn)",
      Explanation:
        "Divides the set of vertical edges of the rectangle into two equal sets L and R O(nlogn), and calls the stripes algorithm on this initial division of vertices. The stripes algorithm called inside will take O(nlogn *logn). Returns the final set of vertices to the main function."
    }
  ]
};
let analysis = {
  Sheet1: [
    {
      number: "10",
      measure: "2.9",
      contour: "4.18"
    },
    {
      number: "100",
      measure: "34.91",
      contour: "47.11"
    },
    {
      number: "1000",
      measure: "314.96",
      contour: "403.73"
    },
    {
      number: "10000",
      measure: "2151.77",
      contour: "2876.42"
    },
    {
      number: "100000",
      measure: "4038.07",
      contour: "4932.81"
    },
    {
      number: "200000",
      measure: "4649.62",
      contour: "5394.12"
    },
    {
      number: "500000",
      measure: "5752.18",
      contour: "6594.72"
    },
    {
      number: "1000000",
      measure: "6901.01",
      contour: "8368.35"
    },
    {
      number: "2000000",
      measure: "10020.13",
      contour: "13579.42"
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
                  borderColor: "tomato",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Number of Rectangles{" "}
              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "tomato",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Time Taken for Measure Problem (ms)
              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "tomato",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                Time Taken for Contour Problem (ms)
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
                      borderColor: "tomato",
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
                      borderColor: "tomato",
                      textAlign: "center"
                    }}
                  >
                    {item.measure}
                  </div>
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "tomato",
                      textAlign: "center"
                    }}
                  >
                    {item.contour}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              marginTop: 20
            }}
          >
            <img
              src={Plot}
              alt="Image"
              style={{
                background: "white",
                alignSelf: "center",
                width: "50%",
                marginBottom: 10
              }}
            />
          </div>
          <h1 style={{ color: "white", textAlign: "center", margin: "20px" }}>
            Calculating the Time Complexity{" "}
          </h1>

          <div class="container">
            <h2 style={{ margin: "20px" }}>
              The Complexity Analysis for the common subroutines involved in our
              implementation of Guting’s algorithm for the Measure problem and
              Contour problem:
            </h2>
            <div class="row">
              <div
                class="col-3"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "tomato",
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
                  borderColor: "tomato",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Time Complexity
              </div>
              <div
                class="col"
                style={{
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "tomato",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Explanation
              </div>
            </div>
            {table.Sheet1.map((item, index) => {
              return (
                <div class="row">
                  <div
                    class="col-3"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "tomato"
                    }}
                  >
                    {item["Subroutine Name"]}
                  </div>
                  <div
                    class="col-3"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "tomato"
                    }}
                  >
                    {item["Time Complexity"]}
                  </div>
                  <div
                    class="col"
                    style={{
                      border: "solid",
                      borderWidth: "1px",
                      borderColor: "tomato"
                    }}
                  >
                    {item.Explanation}
                  </div>
                </div>
              );
            })}
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
            <div
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
            </div>
          </div>
        </div>
      </Scrollbars>
    );
  }
}

export default Document;
