import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterCompat } from "./RouterCompat";
import { Routes } from "./Routes";
import { browserHistory } from "./Store";

ReactDOM.render(
  // <Provider store={store}>
  <RouterCompat history={browserHistory}>
    <Routes />
  </RouterCompat>,
  // </Provider>,
  document.getElementById("app")
);
