import { ICareer } from "$interfaces/Applicant";

export interface ICareersEditableProps {
  allCareers: ICareer[];
  currentCareers: ICareer[];
  setCareer: (code: string, careers: ICareer[]) => void;
  onFinish: () => void;
}

export interface ICareersEditableContainerProps {
  careers?: ICareer[];
  setCareer: (career: ICareer) => void;
}
