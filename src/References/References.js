import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";
let refer = [
  {
    name: "Code and Algorithm Implementation",
    comp: [
      {
        name: "AVL tree implementation - Programiz",
        url: "https://www.programiz.com/dsa/avl-tree"
      },
      {
        name: "AVL tree implementation - GeekForGeeks",
        url: "https://www.geeksforgeeks.org/avl-tree-set-1-insertion/"
      },
      {
        name: "PDF uploaded in classroom",
        url:
          "https://drive.google.com/file/d/1mL5Em6Unayv6JMA6iCh9N5ha5XWY41mT/view"
      },
      {
        name:
          "Algorithms for Reporting and Counting Geometric Intersections - Bentley; Ottoman",
        url:
          "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=1675432&tag=1"
      }
    ]
  },
  {
    name: "Documentation",
    comp: [
      {
        name: "Doxygen: Main Page",
        url: "https://www.doxygen.nl/index.html"
      }
    ]
  },
  {
    name: "Visualization",
    comp: [
      {
        name: "Matplotlib: Python plotting — Matplotlib 3.3.4 documentation",
        url: "https://matplotlib.org/"
      },
      {
        name: "Getting Started – React (reactjs.org)",
        url: "https://reactjs.org/docs/getting-started.html"
      },
      {
        name: "JSXGraph - JSXGraph (uni-bayreuth.de)",
        url: "https://jsxgraph.uni-bayreuth.de/wp/index.html"
      }
    ]
  }
];
class References extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div
        class="container"
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <h1 style={{ textAlign: "center" }}>References</h1>
        {refer.map((item, index) => {
          return (
            <div
              style={{ marginTop: "20px", marginBottom: "20px" }}
              key={index}
            >
              <h3>{item.name} </h3>
              {item.comp.map((child, ind) => {
                return (
                  <h5 key={ind}>
                    <a href={child.url}>{child.name}</a>
                  </h5>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default References;
