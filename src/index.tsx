import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { ConnectedRouter } from "connected-react-router";
import store, { hashHistory } from "./Store";
import { Provider } from "react-redux";

console.log("aaaa");
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ConnectedRouter history={hashHistory}>
        <Routes />
      </ConnectedRouter>
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);
