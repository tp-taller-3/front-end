import { IQuestion } from "../../../interfaces/Question";

export interface ISemester {
  semester: string;
}

export interface ICourse {
  course: string;
}

export interface IResult {
  question: IQuestion;
  headers?: string[];
}
