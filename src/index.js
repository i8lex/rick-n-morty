import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheet/index.css";
import { Application } from "./Application";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GoogleOAuthProvider clientId="1080447652459-o93tdb54332e6ud6h7rc9n7rd971fgvp.apps.googleusercontent.com">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Application />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </React.StrictMode>
  </Provider>
);
