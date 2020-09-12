import { ApplicantType } from "$interfaces/Applicant";

export interface IContainerProps {
  value: ApplicantType | "";
  error?: string;
}

export interface ITranslations {
  title: string;
  graduate: string;
  student: string;
  both: string;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
}
