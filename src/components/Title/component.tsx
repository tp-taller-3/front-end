import React, { FunctionComponent } from "react";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";
import { ITitleProps } from "./interface";
import classNames from "classnames";

const Title: FunctionComponent<ITitleProps> = (
  {
    title,
    subtitle
  }
) => (
  <div className={styles.container}>
    <h1 className={classNames(styles.title, { [styles.noMargin]: !subtitle })}>{title}</h1>
    <Subtitle>{subtitle}</Subtitle>
  </div>
);

export { Title };
