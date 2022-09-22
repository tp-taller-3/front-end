import React, { FunctionComponent } from "react";
import { ISurveyListContainerProps, ISurveyListTranslations } from "./interfaces";
import { useTranslations } from "$hooks/queries";
import { SurveyList } from "./component";

export const SurveyListContainer: FunctionComponent<ISurveyListContainerProps> = ({
  loading,
  surveys,
  selectedSurvey,
  onSelectSurvey,
  fetchMore,
  shouldFetchMore,
  refetchSurveys
}) => {
  const translations = useTranslations<ISurveyListTranslations>("surveyList");

  return (
    <SurveyList
      loading={loading}
      surveys={surveys}
      onSelectSurvey={onSelectSurvey}
      selectedSurvey={selectedSurvey}
      translations={translations}
      fetchMore={fetchMore}
      shouldFetchMore={shouldFetchMore}
      refetchSurveys={refetchSurveys}
    />
  );
};
