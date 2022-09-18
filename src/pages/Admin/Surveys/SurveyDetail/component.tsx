import React, { FunctionComponent, ReactNode } from "react";
import { ISurveyDetailProps } from "./interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { EmptyDetail } from "../../Home/Dashboard/TaskDetail/EmptyDetail";
import { Card } from "$components/Card";

export const SurveyDetail: FunctionComponent<ISurveyDetailProps> = ({ selectedSurvey }) => {
  let children: ReactNode;

  if (selectedSurvey) {
    children = (
      <Card>{`PLACEHOLDER: editor de preguntas para la encuesta: "${selectedSurvey.name}"`}</Card>
    );
  } else {
    children = <EmptyDetail />;
  }

  return (
    <div className={styles.surveyDetailContainer}>
      <div className={classNames(styles.surveyDetail)}>{children}</div>
    </div>
  );
};
