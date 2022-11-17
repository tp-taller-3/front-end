import React, { FunctionComponent } from "react";
import { ICourse } from "../interfaces";
import { useQuestions } from "../../../../models/hooks/queries/useQuestions";
import { AnswerComponent } from "../AnswerComponent";
import { PaginationTable } from "../PaginationTable";

export const ResultsComponent: FunctionComponent<ICourse> = ({ course }) => {
  const questions = useQuestions(course);

  return (
    <>
      {questions?.map(question =>
        question.isPublic ? (
          <AnswerComponent question={question} />
        ) : (
          <PaginationTable question={question} headers={["Respuesta", "# Ocurrencias"]} />
        )
      )}
    </>
  );
};
