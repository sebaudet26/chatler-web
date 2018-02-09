import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent/";

const AsyncHome = asyncComponent(() => import("./containers/Home/"));
const AsyncFeatures = asyncComponent(() => import("./containers/Features/"));
const AsyncCompany = asyncComponent(() => import("./containers/Company/"));
const AsyncContact = asyncComponent(() => import("./containers/Contact/"));
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound/"));

export default ({ childProps }) =>
  <Switch>
    <Route path="/" exact component={AsyncHome} />
    <Route path="/features" exact component={AsyncFeatures} />
    <Route path="/company" exact component={AsyncCompany} />
    <Route path="/contact" exact component={AsyncContact} />

    <Route component={AsyncNotFound} />
  </Switch>;
