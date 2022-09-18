import { ISurvey } from "$interfaces/Survey";

interface IBaseDetailInfoProps {
  onStatusUpdate?: () => void;
  setLoadingStatusUpdate?: (loading: boolean) => void;
}

export interface ISurveyDetailProps extends IBaseDetailInfoProps {
  selectedSurvey?: ISurvey;
}
