import React, { FunctionComponent } from "react";
import { IResult } from "../interfaces";

import styles from "../styles.module.scss";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const AnswerComponent: FunctionComponent<IResult> = ({ question }) => {
  const data = {
    labels: question.answers.map(answer => answer.value),
    datasets: [
      {
        label: "# de Respuestas",
        data: question.answers.map(answer => answer.count),
        backgroundColor: [
          "#e60049",
          "#0bb4ff",
          "#50e991",
          "#e6d800",
          "#9b19f5",
          "#ffa300",
          "#dc0ab4",
          "#b3d4ff",
          "#00bfa0"
        ]
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
    plugins: {
      title: {
        display: true,
        text: question.questionText,
        font: {
          size: 20
        }
      }
    },
    responsive: true
  };

  return (
    <div className={styles.doughnut}>
      <Doughnut data={data} options={options} />
    </div>
  );
};
