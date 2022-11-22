import React, { FunctionComponent } from "react";
import { IAdmin } from "$interfaces/Admin";
import { ListPageContainer } from "$components/ListPageContainer";
import { ListHeader } from "../Admins/ListHeader";
import { ListContentItem } from "../Admins/ListContentItem";
import styles from "../Admins/styles.module.scss";
import { usePaginatedSemester } from "../../../models/hooks/queries/usePaginatedSemester";

export const DeleteSemester: FunctionComponent = () => {
  const response = usePaginatedSemester();
  const admins = response?.data?.getSemestersPaginated.results;

  return (
    <ListPageContainer
      titleTranslationPath={"adminAdminListMainTitle"}
      listHeader={<ListHeader />}
      listContentItem={(admin: IAdmin) => <ListContentItem admin={admin} />}
      listHeaderClassName={styles.tableDisplay}
      rowClassName={styles.tableDisplay}
      items={admins}
      fetchMore={response.fetchMore}
      shouldFetchMore={response.data?.getSemestersPaginated.shouldFetchMore}
      loading={response.loading}
    />
  );
};
