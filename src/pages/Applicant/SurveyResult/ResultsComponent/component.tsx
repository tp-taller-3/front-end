import React, { FunctionComponent } from "react";
import { ICourse } from "../interfaces";
import { useQuestions } from "../../../../models/hooks/queries/useQuestions";
import { AnswerComponent } from "../AnswerComponent";
import { PaginationTable } from "../PaginationTable";
import { Card } from "../../../../components/Card";

import styles from "./styles.module.scss";

export const ResultsComponent: FunctionComponent<ICourse> = ({ course }) => {
  const questions = useQuestions(course);

  return (
    <>
      {questions?.map(question => (
        <Card className={styles.questionContainer} key={question.uuid}>
          {question.isPublic ? (
            <AnswerComponent question={question} />
          ) : (
            <PaginationTable question={question} headers={["Respuesta", "# Ocurrencias"]} />
          )}
        </Card>
      ))}
    </>
  );
};
