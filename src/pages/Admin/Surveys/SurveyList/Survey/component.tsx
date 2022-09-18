import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { TimeHumanizer } from "$components/TimeHumanizer";
import { ISurvey } from "$interfaces/Survey";

export const Survey: FunctionComponent<ISurvey> = ({ name, updatedAt }) => (
  <div className={styles.adminTask}>
    <div className={styles.info}>
      <div className={styles.name}>{name}</div>
      <TimeHumanizer since={updatedAt} />
    </div>
  </div>
);
