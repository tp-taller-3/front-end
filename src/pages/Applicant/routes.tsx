import React, { FunctionComponent } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SignUp from "./SignUp";
import Profile from "./Profile";
import { EditableProfile } from "./EditableProfile";
import { List } from "./List";


const ApplicantRoutes: FunctionComponent = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/`}>
        <List />
      </Route>
      <Route exact path={`${path}/sign-up`}>
        <SignUp />
      </Route>
      <Route exact path={`${path}/:id`}>
        <Profile />
      </Route>
      <Route exact path="/applicants/:id/edit">
        <EditableProfile />
      </Route>
    </Switch>
  );
};

export default ApplicantRoutes;
