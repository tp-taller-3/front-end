import React, { FunctionComponent, useState } from "react";
import { Dashboard } from "./component";
import { ISurvey } from "$interfaces/Survey";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { find } from "lodash";
import { useSurveys } from "../../../models/hooks/queries/useSurveys";

export const SurveysContainer: FunctionComponent = () => {
  const [selectedSurvey, setSelectedSurvey] = useState<ISurvey>();
  const { data, loading, refetch, error, fetchMore } = useSurveys();
  if (error) return <Redirect to={RoutesBuilder.public.internalServerError()} />;

  const surveys = data?.getSurveys?.results;
  const shouldFetchMore = data?.getSurveys?.shouldFetchMore;

  return (
    <Dashboard
      loading={loading}
      selectedSurvey={find(surveys, ["uuid", selectedSurvey?.uuid])}
      setSelectedSurvey={setSelectedSurvey}
      surveys={surveys}
      fetchMore={fetchMore}
      shouldFetchMore={shouldFetchMore}
      refetchSurveys={async () => {
        if (refetch) await refetch({});
      }}
    />
  );
};
