import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

let refer = [
  {
    name: "Code and Algorithm Implementation",
    comp: [
      {
        name: "Binary Search Tree - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/binary-search-tree-data-structure/"
      },
      {
        name: "Containers - C++ Reference (cplusplus.com)",
        url: "https://www.cplusplus.com/reference/stl/"
      },
      {
        name: "(Optional) C++ Sets with Custom Comparators · USACO Guide",
        url:
          "https://www.geeksforgeeks.org/comparator-class-in-c-with-examples/"
      },
      {
        name: "CSV file management using C++ - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/csv-file-management-using-c/"
      },
      {
        name: "https://code.visualstudio.com/docs/editor/debugging",
        url: "https://code.visualstudio.com/docs/editor/debugging"
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

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { name: "Home", href: "/" },
        { name: "Algorithm", href: "/algorithm" },
        { name: "Analysis", href: "/analysis" },
        { name: "Result", href: "/result" },
        { name: "Visualization", href: "/visualization" },
        { name: "Documentation", href: "/documentation" },

        { name: "References", href: "/references" }
      ],
      active: this.props.active
    };
  }
  updateCSS = (param) => {
    this.setState({ active: param });
  };
  render() {
    const TabButton = styled.a.attrs((props) => ({ tab: props.tab }))`
      color: red;
      padding-top: 15px;
      padding-bottom: 15px;
      background-color: ${(props) =>
        props.tab == this.state.active ? "rgb(79, 4, 109)" : "#333"};
      &:hover {
        color: blue;
        background-color: ${(props) =>
          props.tab == this.state.active
            ? "orange"
            : "rgb(79, 4, 109)"}; // <Thing> when hovered
      }
    `;
    return (
      <div class="topnav">
        {this.state.tabs.map((item, index) => {
          return (
            <TabButton
              key={index}
              tab={item.name}
              onClick={() => {
                this.updateCSS(item.name);
              }}
              onMouseOver={() => {}}
              href={item.href}
            >
              {" "}
              <Link
                style={{
                  backgroundColor: "transparent",
                  paddingTop: "15px",
                  paddingBottom: "15px"
                }}
                to={item.href}
              >
                {item.name}{" "}
              </Link>
            </TabButton>
          );
        })}
      </div>
    );
  }
}

export default NavBar;
