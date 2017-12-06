import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent/";

const AsyncHome = asyncComponent(() => import("./containers/Home/"));
const AsyncAbout = asyncComponent(() => import("./containers/About/"));
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound/"));

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={AsyncHome} />
    <Route path="/about" exact component={AsyncAbout} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={AsyncNotFound} />
  </Switch>;
