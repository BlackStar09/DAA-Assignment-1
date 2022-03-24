import { Fragment, StrictMode } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
Modal.setAppElement(document.getElementById("root"));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  rootElement
);
