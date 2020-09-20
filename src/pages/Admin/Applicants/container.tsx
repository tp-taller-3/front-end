import React, { FunctionComponent } from "react";
import { ListPageContainer } from "../components/ListPageContainer";
import { ListHeader } from "./ListHeader";
import { ListContentItem } from "./ListContentItem";
import { IApplicant } from "$interfaces/Applicant";
import { useApplicants } from "$hooks";
import styles from "./styles.module.scss";

export const Applicants: FunctionComponent = () => {
  const result = useApplicants();
  const applicants = result?.data?.getApplicants;

  return (
    <>
    {
      applicants &&
      <ListPageContainer
        titleTranslationPath={"adminApplicantListMainTitle"}
        listHeader={<ListHeader />}
        listContentItem={(applicant: IApplicant) => <ListContentItem applicant={applicant}/>}
        listHeaderClassName={styles.tableDisplay}
        rowClassName={styles.tableDisplay}
        items={applicants}
      />
    }
  </>
  );
};
