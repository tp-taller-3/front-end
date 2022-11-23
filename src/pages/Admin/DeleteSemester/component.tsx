import React, { FunctionComponent } from "react";
import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import styles from "./styles.module.scss";
import { usePaginatedSemester } from "../../../models/hooks/queries/usePaginatedSemester";
import { ISemester } from "../../../interfaces/Semester";

export const DeleteSemester: FunctionComponent = () => {
  const response = usePaginatedSemester();
  const semesters = response?.data?.getSemestersPaginated.results;

  return (
    <ListPageContainer
      titleTranslationPath={"adminDeleteSemesterListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(semester: ISemester) => <ListContentItem semester={semester} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={semesters}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getSemestersPaginated.shouldFetchMore}
      loading={response.loading}
    />
  );
};
