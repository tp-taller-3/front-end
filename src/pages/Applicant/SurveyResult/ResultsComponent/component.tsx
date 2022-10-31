import React, { FunctionComponent } from "react";
import { ICourse } from "../interfaces";
import { useQuestions } from "../../../../models/hooks/queries/useQuestions";
import { AnswerComponent } from "../AnswerComponent";

export const ResultsComponent: FunctionComponent<ICourse> = ({ course }) => {
  const questions = useQuestions(course);

  return <>{questions && questions.map(item => <AnswerComponent question={item} />)}</>;
};
