import React, { FunctionComponent } from "react";
import { IResult } from "../interfaces";
import { Subtitle } from "../../../../components/Subtitle";

import classNames from "classnames";

import styles from "../styles.module.scss";

export const QuestionText: FunctionComponent<IResult> = ({ question }) => {
  return (
    <Subtitle className={classNames(styles.title)}>
      {`${question.questionText}${question.teacherName ? ` — ${question.teacherName}` : ""}`}
    </Subtitle>
  );
};
