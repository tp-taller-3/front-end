import { IApplicantCareerInput } from "$interfaces/Applicant";
import { ICareer } from "$interfaces/Career";

export interface IContainerProps {
  index: number;
  value: IApplicantCareerInput;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
  options: ICareer[];
}

export interface ITranslations {
  career: string;
  isGraduate: string;
  approvedSubjectCount: string;
  currentCareerYear: string;
  withoutCBC: string;
}