import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent/";

const AsyncHome = asyncComponent(() => import("./containers/Home/"));
const AsyncCompany = asyncComponent(() => import("./containers/Company/"));
const AsyncContact = asyncComponent(() => import("./containers/Contact/"));
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound/"));

export default ({ childProps }) =>
  <Switch>
    <Route path={process.env.PUBLIC_URL + '/'} exact component={AsyncHome} />
    <Route path={process.env.PUBLIC_URL + '/company'} exact component={AsyncCompany} />
    <Route path={process.env.PUBLIC_URL + '/contact'} exact component={AsyncContact} />

    <Route component={AsyncNotFound} />
  </Switch>;
