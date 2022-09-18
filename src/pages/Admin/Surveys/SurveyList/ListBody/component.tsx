import React, { FunctionComponent } from "react";
import { Card } from "$components/Card";
import { List } from "$components/List";
import styles from "./styles.module.scss";
import { ISurvey } from "../../../../../interfaces/Survey";
import { Survey } from "../Survey";

export const ListBody: FunctionComponent<IListBodyProps> = ({
  loading,
  surveys,
  onSelectSurvey,
  selectedSurvey,
  fetchMore,
  shouldFetchMore,
  emptyListMessage
}) => (
  <List
    list={surveys}
    fetchMoreClassName={styles.fetchMore}
    fetchMore={fetchMore}
    shouldFetchMore={shouldFetchMore}
    loading={loading}
    emptyListComponent={emptyListMessage}
    emptyListClassName={styles.emptyListMessage}
  >
    {survey => (
      <Card
        hoverable
        key={survey.uuid}
        className={styles.card}
        onClick={() => onSelectSurvey(survey)}
        selected={survey.uuid === selectedSurvey?.uuid}
      >
        <Survey {...survey} />
      </Card>
    )}
  </List>
);

interface IListBodyProps {
  loading: boolean;
  surveys: ISurvey[];
  onSelectSurvey: (task: ISurvey) => void;
  selectedSurvey?: ISurvey;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  emptyListMessage?: string;
}
