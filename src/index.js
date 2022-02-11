import React from "react";
import ReactDOM from "react-dom";

import { initBlockly } from "dataland-gui";

import App from "./App";

import "bootstrap/dist/css/bootstrap.css";

initBlockly();
ReactDOM.render(<App />, document.getElementById("root"));
