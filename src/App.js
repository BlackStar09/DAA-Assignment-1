import "./styles.css";
import React from "react";
import styled from "styled-components";
import Document from "./Document/Document";
import Home from "./Home/Home";
import Result from "./Result/Result";
import Visualization from "./Visulaization/VisPage";
import NavBar from "./NavBar/NavBar";
import Issues from "./Issues/Issues";
import Algorithm from "./Algorithm/Algorithm";
import VisualizationComp from "./VisualizationComp.js";
import References from "./References/References";
import Documentation from "./Documentation/Documentaiton";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Modal from "react-modal";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tabs: [
        { name: "Home", href: "/" },
        { name: "Visualization", href: "/visualization" },
        { name: "Result", href: "/result" },

        { name: "Issues", href: "/issues" },
        { name: "Algorithm", href: "/algorithm" },
        { name: "Analysis", href: "/analysis" },
        { name: "Refrences", href: "/reference" }
      ],
      active: "Home",
      style: {}
    };
  }
  updateCss = (param) => {
    this.setState({ active: param });
  };
  render() {
    const TabButton = styled.a.attrs((props) => ({ tab: props.tab }))`
      color: red;
      background-color: ${(props) =>
        props.tab == this.state.active ? "red" : "black"};
      &:hover {
        color: blue;
        background-color: ${(props) =>
          props.tab == this.state.active
            ? "blue"
            : "red"}; // <Thing> when hovered
      }
    `;

    return (
      <Router>
        <header className="App-header">
          <NavBar active={this.state.active} />
        </header>
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => {
              return <Home />;
            }}
          ></Route>
          <Route exact path="/analysis" component={Document}></Route>
          <Route exact path="/result" component={Result}></Route>
          <Route exact path="/visualization" component={Visualization}></Route>
          <Route exact path="/algorithm" component={Algorithm}></Route>
          <Route exact path="/issues" component={Issues}></Route>
          <Route exact path="/references" component={References}></Route>
          <Route exact path="/documentation" component={Documentation}></Route>
          <Route
            exact
            path="/measure_problem"
            render={() => {
              window.location.href = "/documentation/html1/index.html";
            }}
          />
        </Switch>
      </Router>
    );
  }
}
const styles = () => ({
  heading: ({ context, state }) => ({
    backgroundColor: "red",

    ...(context.panel.isOpen && {
      backgroundColor: "blue"
    }),

    ":hover": {
      backgroundColor: "purple"
    },

    // ...or alternatively:
    ...(state.isHovered && {
      backgroundColor: "purple"
    })
  }),

  content: ({ context }) => ({
    display: context.panel.isOpen ? "block" : "none"
  })
});
export default App;
