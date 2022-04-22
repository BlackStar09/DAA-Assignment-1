import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";
let refer = [
  {
    name: "Code and Algorithm Implementation",
    comp: [
      {
        name: "DP - GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/dynamic-programming/"
      },
      {
        name: "RNA database",
        url:
          "http://ndbserver.rutgers.edu/service/ndb/atlas/gallery/rna?polType=all&rnaFunc=all&protFunc=all&strGalType=rna&expMeth=all&seqType=all&galType=table&start=0&limit=50"
      },
      {
        name: "Classroom Notes",
        url:
          "https://drive.google.com/file/d/1mL5Em6Unayv6JMA6iCh9N5ha5XWY41mT/view"
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
