import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";
import test0 from "../Assets/testcase/test0.png";
import test1 from "../Assets/testcase/test1.png";
import test2 from "../Assets/testcase/test2.png";
import test3 from "../Assets/testcase/test3.png";
import test4 from "../Assets/testcase/test4.png";
import test5 from "../Assets/testcase/test5.png";
import test6 from "../Assets/testcase/test6.png";
import test7 from "../Assets/testcase/test7.png";
import test8 from "../Assets/testcase/test8.png";
import test9 from "../Assets/testcase/test9.png";
import test10 from "../Assets/testcase/test10.png";
import test11 from "../Assets/testcase/test11.png";
const results = {
  Sheet1: [
    {
      INPUT: "2\n 0 2 0 2\n 1 4 1 4",
      OUTPUT:
        "Measure: 12 \n Contour: \nHorizontal Contours\n0 0 2 0\n2 1 4 1\n0 2 1 2\n1 4 4 4\nVertical Contours\n0 0 0 2\n1 2 1 4\n2 0 2 1\n4 1 4 4",
      Image: test0
    },
    {
      INPUT:
        "10\n0 1 0 1\n1 2 1 2\n2 3 2 3\n3 4 3 4\n4 6 4 6\n6 8 6 8\n8 10 8 10\n10 13 10 13\n13 16 13 16\n16 20 16 20",
      OUTPUT:
        "Measure: 50\nContour: \nHorizontal Contours\n0 0 1 0\n0 1 2 1\n1 2 3 2\n2 3 4 3\n3 4 6 4\n4 6 8 6\n6 8 10 8\n8 10 13 10\n10 13 16 13\n13 16 20 16\n16 20 20 20\nVertical Contours\n0 0 0 1\n1 0 1 2\n2 1 2 3\n3 2 3 4\n4 3 4 6\n6 4 6 8\n8 6 8 10\n10 8 10 13\n13 10 13 16\n16 13 16 20\n20 16 20 20",
      Image: test1
    },
    {
      INPUT:
        "15\n0 1 0 1\n0 2 0 2\n0 3 0 3\n0 4 0 4\n0 5 0 5\n0 7 0 7\n0 9 0 9\n0 11 0 11\n0 13 0 13\n0 16 0 16\n0 19 0 19\n0 22 0 22\n0 26 0 26\n0 30 0 30\n0 35 0 35",
      OUTPUT:
        "Measure: 1225\nContour: \nHorizontal Contours\n0 0 35 0\n0 35 35 35\nVertical Contours\n0 0 0 35\n35 0 35 35",
      Image: test2
    },
    {
      INPUT: "4\n0 100 0 10\n0 10 0 100\n0 100 90 100\n90 100 0 100",
      OUTPUT:
        "Measure: 3600\nContour: \nHorizontal Contours\n0 0 100 0\n10 10 90 10\n10 90 90 90\n0 100 100 100\nVertical Contours\n0 0 0 100\n10 10 10 90\n90 10 90 90\n100 0 100 100",
      Image: test3
    },
    {
      INPUT: "5\n0 4 0 1\n4 8 0 1\n4 11 1 3\n4 6 1 2\n0 4 1 2",
      OUTPUT:
        "Measure: 26\nContour: \nHorizontal Contours\n0 0 8 0\n8 1 11 1\n0 2 4 2\n4 3 11 3\nVertical Contours\n0 0 0 2\n4 2 4 3\n8 0 8 1\n11 1 11 3",
      Image: test4
    },
    {
      INPUT: "3\n1 10 1 10\n5 50 5 50\n10 100 10 100",
      OUTPUT:
        "Measure: 8581\nContour: \nHorizontal Contours\n1 1 10 1\n10 5 50 5\n1 10 5 10\n50 10 100 10\n5 50 10 50\n10 100 100 100\nVertical Contours\n1 1 1 10\n5 10 5 50\n10 1 10 5\n10 50 10 100\n50 5 50 10\n100 10 100 100",
      Image: test5
    },
    {
      INPUT: "4\n5 20 1 4\n10 30 1 5\n5 15 -21 1\n0 10 0 2",
      OUTPUT:
        "Measure: 325\nContour:\nHorizontal Contours\n5 -21     15 -21\n0 0     5 0\n15 1     30 1\n0 2     5 2\n5 4     10 4\n10 5     30 5\nVertical contours\n0 0     0 2\n5 -21     5 0\n5 2     5 4\n10 4     10 5\n15 -21     15 1\n30 1     30 5",
      Image: test6
    },
    {
      INPUT: "3\n0 10 0 5\n15 26 0 5\n4 20 4 14",
      OUTPUT:
        "Measure 254\n\nHorizontal Contours\n0 0 10 0\n15 0 26 0\n10 4 15 4\n0 5 4 5\n20 5 26 5\n4 14 20 14\nVertical Contours\n0 0 0 5\n4 5 4 14\n10 0 10 4\n15 0 15 4\n20 5 20 14\n26 0 26 5",
      Image: test7
    },
    {
      INPUT: "5\n17 30 19 24\n21 34 10 38\n3 47 18 34 \n2 29 7 41\n11 42 23 38",
      OUTPUT:
        "Measure:1298\n\nHorizontal Contours\n2 7 29 7\n29 10 34 10\n34 18 47 18\n42 34 47 34\n29 38 42 38\n2 41 29 41\nVertical Contours\n2 7 2 41\n29 7 29 10\n29 38 29 41\n34 10 34 18\n42 34 42 38\n47 18 47 34",
      Image: test8
    },
    {
      INPUT:
        "5\n6 46 2 37 \n17 30 4 35 \n2 36 33 35 \n7 45 30 44 \n17 24 18 32",
      OUTPUT:
        "Measure 1674\n\nHorizontal Contours\n6 2 46 2\n2 33 6 33\n2 35 6 35\n6 37 7 37\n45 37 46 37\n7 44 45 44\nVertical Contours\n2 33 2 35\n6 2 6 33\n6 35 6 37\n7 37 7 44\n45 37 45 44\n46 2 46 37",
      Image: test9
    },
    {
      INPUT: "5\n0 6 4 10\n4 9 5 6\n5 8 0 7\n7 10 8 9\n2 3 1 3",
      OUTPUT:
        "Measure:60\n\nHorizontal Contours\n\n5 0 8 0\n2 1 3 1\n2 3 3 3\n0 4 5 4\n8 5 9 5\n8 6 9 6\n6 7 8 7\n7 8 10 8\n7 9 10 9\n0 10 6 10\nVertical contours\n\n0 4 0 10\n2 1 2 3\n3 1 3 3\n5 0 5 4\n6 7 6 10\n7 8 7 9\n8 0 8 5\n8 6 8 7\n9 5 9 6\n10 8 10 9",
      Image: test10
    },
    {
      INPUT:
        "100\n9 35 2 21\n4 42 13 32\n12 29 0 20\n19 23 39 42\n27 49 28 37\n34 43 14 23\n2 40 38 43\n11 15 12 24\n37 63 8 19\n9 35 12 23\n16 56 7 22\n3 24 28 36\n2 10 1 18\n14 42 32 39\n8 15 33 45\n12 45 6 14\n23 56 15 31\n4 13 29 35\n32 39 33 42\n21 30 17 34\n116 117 19 53\n96 112 0 40\n107 110 20 30\n96 100 31 47\n93 111 11 15\n108 122 37 58\n108 112 37 40\n109 128 16 27\n115 135 12 21\n91 104 3 23\n91 111 30 36\n90 101 16 45\n98 110 20 31\n93 103 9 25\n119 125 38 65\n98 111 11 42\n83 90 21 43\n103 122 3 32\n89 108 0 25\n118 124 12 49\n17 46 106 142\n8 47 107 137\n26 50 106 145\n17 26 97 98\n0 26 89 93\n39 72 95 98\n13 31 112 113\n12 49 81 84\n23 52 112 113\n29 65 92 122\n38 72 119 123\n3 9 112 137\n7 32 106 137\n15 38 87 88\n11 47 89 107\n34 70 85 118\n24 37 102 110\n17 19 95 114\n34 74 92 124\n13 48 108 135\n91 109 99 119\n98 107 94 117\n99 125 115 134\n90 112 89 122\n97 113 112 113\n89 104 96 112\n96 119 81 112\n91 106 81 108\n98 112 91 130\n97 118 105 132\n86 87 115 146\n86 100 82 87\n96 112 102 123\n81 116 115 154\n85 116 98 123\n83 101 117 143\n83 106 83 104\n84 124 104 125\n88 89 100 136\n90 122 86 121\n69 79 48 65\n64 75 53 87\n77 87 45 68\n41 55 42 43\n70 72 49 88\n71 77 45 48\n77 78 49 55\n77 96 41 48\n78 92 48 80\n59 77 56 90\n73 77 50 54\n42 56 40 67\n69 71 48 87\n74 89 43 78\n50 55 44 60\n57 68 50 53\n63 83 41 74\n68 69 41 46\n51 59 43 80\n51 55 52 92",
      OUTPUT:
        "Measure:12337\nHorizontal Contours\n12 0 29 0\n89 0 112 0\n2 1 10 1\n10 2 12 2\n29 2 35 2\n112 3 122 3\n35 6 45 6\n45 7 56 7\n56 8 63 8\n122 12 135 12\n2 18 4 18\n56 19 63 19\n83 21 89 21\n128 21 135 21\n124 27 128 27\n3 28 4 28\n49 31 56 31\n112 32 116 32\n117 32 118 32\n3 36 8 36\n42 37 49 37\n112 37 116 37\n117 37 118 37\n2 38 8 38\n124 38 125 38\n40 39 42 39\n42 40 56 40\n63 41 83 41\n41 42 42 42\n101 42 108 42\n2 43 8 43\n15 43 40 43\n41 43 42 43\n56 43 59 43\n8 45 15 45\n100 45 101 45\n96 47 100 47\n92 48 96 48\n59 50 63 50\n59 53 63 53\n59 56 63 56\n108 58 119 58\n119 65 125 65\n42 67 51 67\n77 78 78 78\n55 80 59 80\n78 80 92 80\n12 81 49 81\n91 81 119 81\n86 82 91 82\n83 83 86 83\n12 84 49 84\n34 85 51 85\n55 85 59 85\n119 86 122 86\n15 87 34 87\n15 88 34 88\n0 89 34 89\n70 90 77 90\n70 92 74 92\n0 93 11 93\n83 104 84 104\n122 104 124 104\n7 106 11 106\n3 112 7 112\n81 115 84 115\n124 115 125 115\n50 124 74 124\n116 134 125 134\n3 137 17 137\n17 142 26 142\n26 145 50 145\n81 154 116 154\nVertical contours\n0 89 0 93\n2 1 2 18\n2 38 2 43\n3 28 3 36\n3 112 3 137\n4 18 4 28\n7 106 7 112\n8 36 8 38\n8 43 8 45\n10 1 10 2\n11 93 11 106\n12 0 12 2\n12 81 12 84\n15 43 15 45\n15 87 15 88\n17 137 17 142\n26 142 26 145\n29 0 29 2\n34 85 34 87\n34 88 34 89\n35 2 35 6\n40 39 40 43\n41 42 41 43\n42 37 42 39\n42 40 42 42\n42 43 42 67\n45 6 45 7\n49 31 49 37\n49 81 49 84\n50 124 50 145\n51 67 51 85\n55 80 55 85\n56 7 56 8\n56 19 56 31\n56 40 56 43\n59 43 59 50\n59 53 59 56\n59 80 59 85\n63 8 63 19\n63 41 63 50\n63 53 63 56\n70 90 70 92\n74 92 74 124\n77 78 77 90\n78 78 78 80\n81 115 81 154\n83 21 83 41\n83 83 83 104\n84 104 84 115\n86 82 86 83\n89 0 89 21\n91 81 91 82\n92 48 92 80\n96 47 96 48\n100 45 100 47\n101 42 101 45\n108 42 108 58\n112 0 112 3\n112 32 112 37\n116 32 116 37\n116 134 116 154\n117 32 117 37\n118 32 118 37\n119 58 119 65\n119 81 119 86\n122 3 122 12\n122 86 122 104\n124 27 124 38\n124 104 124 115\n125 38 125 65\n125 115 125 134\n128 21 128 27\n135 12 135 21",
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
          <h3 style={{ textAlign: "center", marginTop: 5 }}>
            Blue colour has been used to represent the frame enclosing all the
            input rectangles
          </h3>
          <h3 style={{ textAlign: "center", marginTop: 5 }}>
            Green colour has been used to represent the union of the input
            rectangles
          </h3>
          <h3 style={{ textAlign: "center", marginTop: 5 }}>
            Red coloured lines are used to represent the Contour lines for the
            union of the input rectangles
          </h3>
          <div class="row">
            <div
              class="col-2"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "tomato",
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
                borderColor: "tomato",
                fontWeight: "bold"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Output</h2>
            </div>
            <div
              class="col"
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "tomato",
                fontWeight: "bold"
              }}
            >
              <h2 style={{ fontWeight: "bold" }}>Visualize</h2>
            </div>
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
                    borderColor: "tomato",
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
                    borderColor: "tomato",
                    fontWeight: "bold"
                  }}
                >
                  <NewlineText text={item.OUTPUT} />
                </div>
                <div
                  class="col"
                  style={{
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "tomato",
                    fontWeight: "bold"
                  }}
                >
                  <img
                    src={item.Image}
                    style={{ width: "inherit", margin: 10 }}
                    alt="Image"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Scrollbars>
    );
  }
}

export default Result;
