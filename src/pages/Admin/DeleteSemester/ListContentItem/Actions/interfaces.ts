import { ISemester } from "../../../../../interfaces/Semester";

export interface ITranslations {
  deleteSemesterLinkTooltipMessage: string;
}

export interface IContainerProps {
  className?: string;
  semester: ISemester;
}

export interface IComponentProps extends IContainerProps {
  translations: ITranslations;
  deleteSemesterLink: string;
}
