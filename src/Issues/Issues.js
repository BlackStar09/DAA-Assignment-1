import React from "react";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars";
import "../Document/Document.css";

let issues = [
  "  Understanding and figuring out notations in the paper based on a lot of references in the paper scattered throughout.",
  "Implementing C/C++ code from pseudo code in the paper because of the frequent use of set builder notations, universal and existential quantifiers.",
  "Language specific conventions and rules used in C++ and time complexity analysis",
  "Unclear diagrams and figures made understanding the working of the algorithm difficult",
  "Making the code efficient / optimizing code based on inputs from the paper.",
  "Implementing/defining and using a variety of user-defined data types / structs for every use case",
  "Checking time complexity for inbuilt C++ functions and its usage along with the overall code.",
  "Handling and incorporating visualization based on the input and output of the code",
  "Handling edge cases and building test cases to test robustness and reliability.",
  "Difficulty in debugging due to extensive use of pointers, data structures like BST, Free Subinterval Query  etc."
];

class Issues extends React.Component {
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
        <h1
          style={{
            textAlign: "center",
            alignSelf: "center",
            marginTop: "20px",
            marginBottom: "40px"
          }}
        >
          Issues in Coding
        </h1>
        <ul>
          {issues.map((item, index) => {
            return (
              <li style={{ fontSize: "20px" }} key={index}>
                <h4> {item}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Issues;
