import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { IApprovable } from "$interfaces/Approvable";
import { CompanyDetailContent } from "./CompanyDetailContent";
import { CompanyDetailInfo } from "./CompanyDetailInfo";

export const AdminTaskDetail: FunctionComponent<IAdminTaskDetailProps> = (
  { selectedTask }
) => <>
  <div className={styles.info}>
    {
      selectedTask?.__typename === "Company" &&
      <CompanyDetailInfo selectedCompany={selectedTask}/>
    }
  </div>
  <div className={styles.content}>
    {
      !selectedTask &&
      <div>seleccionate una</div>
    }
    {
      selectedTask?.__typename === "Company" &&
      <CompanyDetailContent selectedCompany={selectedTask}/>
    }
  </div>
</>;

interface IAdminTaskDetailProps {
  selectedTask?: IApprovable;
}