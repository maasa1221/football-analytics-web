import * as React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import App from "./Pages/App/Container";

export const Routes: React.FC = () => {
  console.log("aaaa");
  return (
    <>
      <App />
      <Switch>
        <Route exact path={`/app`} component={App} />
      </Switch>
    </>
  );
};
