import React from "react";
import ReactDOM from "react-dom";

import Typography from "typography";
import altonTheme from "typography-theme-alton";
import injectFonts from "typography-inject-fonts";

import { initBlockly } from "dataland-gui";

import App from "./App";

import "bootstrap/dist/css/bootstrap.css";

initBlockly();
const typography = new Typography(altonTheme);
typography.injectStyles();
injectFonts(typography);
ReactDOM.render(<App />, document.getElementById("root"));
