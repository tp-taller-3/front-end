import { ISurvey } from "$interfaces/Survey";

export interface ISurveyListContainerProps {
  loading: boolean;
  surveys?: ISurvey[];
  selectedSurvey?: ISurvey;
  onSelectSurvey: (survey: ISurvey) => void;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  refetchSurveys: () => Promise<void>;
}

export interface ISurveyListProps extends ISurveyListContainerProps {
  translations?: ISurveyListTranslations;
}

export interface ISurveyListTranslations {
  emptyList: string;
}
