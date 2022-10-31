import React, { FunctionComponent } from "react";
import { ICourse } from "../interfaces";
import { useQuestions } from "../../../../models/hooks/queries/useQuestions";
import { AnswerComponent } from "../AnswerComponent";
import { PaginationTable } from "../PaginationTable";
import { IQuestion } from "../../../../interfaces/Question";

const isTextAnswer = (question: IQuestion) => {
  return question.answers.length > 6 || !question.answers.some(element => element.count > 1);
};

export const ResultsComponent: FunctionComponent<ICourse> = ({ course }) => {
  const questions = useQuestions(course);

  return (
    <>
      {questions &&
        questions.map(item => {
          if (isTextAnswer(item)) {
            return <PaginationTable question={item} />;
          } else {
            return <AnswerComponent question={item} />;
          }
        })}
    </>
  );
};
