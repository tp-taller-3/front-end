import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useCompanyByUuid } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Redirect } from "$components/Redirect";
import { CompanyProfile } from "./component";

export const CompanyProfileContainer: FunctionComponent = () => {
  const { uuid } = useParams();
  const response = useCompanyByUuid(uuid);

  if (response.error || response.loading) return <LoadingSpinner/>;

  return <CompanyProfile company={response.data.getCompanyByUuid}/>;
};
