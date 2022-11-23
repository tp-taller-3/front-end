import React, { Fragment, FunctionComponent } from "react";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect } from "$components/Redirect";
import { useCurrentUser } from "$hooks";

const { internalServerError, surveysResult } = RoutesBuilder.public;

const Home: FunctionComponent = () => {
  const currentUserResponse = useCurrentUser();
  if (currentUserResponse.loading) return <Fragment/>;
  if (currentUserResponse.error) return <Redirect to={internalServerError()}/>;

  return <Redirect to={surveysResult()}/>;
};

export default Home;
