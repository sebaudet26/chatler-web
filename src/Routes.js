import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent/";

const AsyncHome = asyncComponent(() => import("./containers/Home/"));
const AsyncFeatures = asyncComponent(() => import("./containers/Features/"));
const AsyncCompany = asyncComponent(() => import("./containers/Company/"));
const AsyncContact = asyncComponent(() => import("./containers/Contact/"));
const AsyncPrivacy = asyncComponent(() => import("./containers/Privacy/"));
const AsyncTerms = asyncComponent(() => import("./containers/Terms/"));
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound/"));

export default ({ childProps }) =>

<div>
  <Switch>
    <Route path={process.env.PUBLIC_URL + '/'} exact component={AsyncHome} />
    <Route path={process.env.PUBLIC_URL + '/features'} exact component={AsyncFeatures} />
    <Route path={process.env.PUBLIC_URL + '/company'} exact component={AsyncCompany} />
    <Route path={process.env.PUBLIC_URL + '/contact'} exact component={AsyncContact} />
    <Route path={process.env.PUBLIC_URL + '/privacy-policy'} exact component={AsyncPrivacy} />
    <Route path={process.env.PUBLIC_URL + '/terms'} exact component={AsyncTerms} />
    <Route component={AsyncNotFound} />
  </Switch>
</div>
