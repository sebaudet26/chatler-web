import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent/";

const AsyncHome = asyncComponent(() => import("./containers/Home/"));
const AsyncCompany = asyncComponent(() => import("./containers/Company/"));
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound/"));

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={AsyncHome} />
    <Route path="/company" exact component={AsyncCompany} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={AsyncNotFound} />
  </Switch>;
