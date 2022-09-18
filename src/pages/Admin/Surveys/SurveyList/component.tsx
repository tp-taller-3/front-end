import React, { FunctionComponent } from "react";
import { ListBody } from "./ListBody";
import { ISurveyListProps } from "./interfaces";
import styles from "./styles.module.scss";
import { CreateSurveyButton } from "./CreateSurveyButton";

export const SurveyList: FunctionComponent<ISurveyListProps> = ({
  surveys,
  translations,
  ...props
}) => (
  <div className={styles.surveyList}>
    <div className={styles.createSurvey}>
      <CreateSurveyButton
        onSelectSurvey={props.onSelectSurvey}
        loading={props.loading}
        refetchSurveys={props.refetchSurveys}
      />
    </div>
    <div className={styles.content}>
      <ListBody emptyListMessage={translations?.emptyList} surveys={surveys || []} {...props} />
    </div>
  </div>
);
