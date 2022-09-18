import { ISurvey } from "$interfaces/Survey";

export interface ITranslations {
  title: string;
  confirm: string;
  cancel: string;
  name: string;
  create: string;
}

export interface IAddSurveyButtonProps {
  onSelectSurvey: (survey: ISurvey) => void;
  loading: boolean;
  refetchSurveys: () => Promise<void>;
}

export interface IValues {
  name: string;
}
