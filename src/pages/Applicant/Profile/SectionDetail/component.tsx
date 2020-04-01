import React, { FunctionComponent } from "react";
import { ISectionDetailProps } from "./interface";
import { Subtitle } from "$components/Subtitle";
import styles from "./styles.module.scss";

const SectionDetail: FunctionComponent<ISectionDetailProps> = (
  {
    title,
    text
  }) => (
    <>
      <Subtitle>{title}</Subtitle>
      <p className={styles.text}>{text}</p>
    </>
);

export { SectionDetail };