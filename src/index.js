import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheet/index.css";
import { Application } from "./Application";
import { HashRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Application />
    </Router>
  </React.StrictMode>
);
