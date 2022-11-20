import React, { FunctionComponent } from "react";
import { IResult } from "../interfaces";

import styles from "../styles.module.scss";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import classNames from "classnames";
import { Subtitle } from "../../../../components/Subtitle";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const AnswerComponent: FunctionComponent<IResult> = ({ question }) => {
  const data = {
    labels: question.answers.map(answer => answer.value),
    datasets: [
      {
        label: "# de Respuestas",
        data: question.answers.map(answer => answer.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  question.answers.map(answer => {
    return {
      name: answer.value,
      value: answer.count
    };
  });

  const options = {
    responsive: true
  };

  return (
    <div className={classNames(styles.answerHeader)}>
      <div className={styles.subtitleContainer}>
        <Subtitle className={classNames(styles.title)}>{question.questionText}</Subtitle>
      </div>
      <div className={styles.doughnut}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};
