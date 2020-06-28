import React, { FunctionComponent } from "react";
import { CompanyDetailContent } from "./CompanyDetailContent";
import { CompanyDetailInfo } from "./CompanyDetailInfo";
import { EmptyDetail } from "./EmptyDetail";
import { IApprovable } from "$interfaces/Approvable";

import styles from "./styles.module.scss";

export const TaskDetail: FunctionComponent<ITaskDetailProps> = (
  {
    selectedTask,
    onStatusUpdate
  }
) => {
  let children = <EmptyDetail/>;
  if (selectedTask) {
    children = (
      <>
        <div className={styles.info}>
          {
            selectedTask.__typename === "Company" &&
            <CompanyDetailInfo selectedCompany={selectedTask} onStatusUpdate={onStatusUpdate}/>
          }
        </div>
        <div className={styles.content}>
          {
            selectedTask.__typename === "Company" &&
            <CompanyDetailContent selectedCompany={selectedTask}/>
          }
        </div>
      </>
    );
  }
  return <div className={styles.taskDetail}>{children}</div>;
};

interface ITaskDetailProps {
  selectedTask?: IApprovable;
  onStatusUpdate: () => void;
}
