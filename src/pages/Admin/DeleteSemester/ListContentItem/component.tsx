import React, { FunctionComponent } from "react";

import { TimeFormatter } from "$models/TimeFormatter";

import { IListContentItem } from "./interfaces";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Actions } from "./Actions";

export const ListContentItem: FunctionComponent<IListContentItem> = ({ semester }) => (
  <>
    <p className={styles.text}>{semester.year}</p>
    <p className={styles.text}>{semester.semesterNumber}</p>
    <div className={styles.text}>{TimeFormatter.dateTime(semester.createdAt)}</div>
    <div className={classNames(styles.text, styles.actionsContainer)}>
      <Actions semester={semester} />
    </div>
  </>
);
