import React, { FunctionComponent } from "react";
import moment from "moment";
import { ICompany } from "$interfaces/Company";
import { SharedStatusLabel } from "$components/SharedStatusLabel";
import { DATE_FORMAT } from "../../components/ListPageContainer/constants";
import styles from "./styles.module.scss";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  company: {
    companyName,
    businessName,
    cuit,
    updatedAt,
    approvalStatus
  }
}) => (
  <>
    <p className={styles.text}>
      {companyName}
    </p>
    <p className={styles.text}>
      {businessName}
    </p>
    <p className={styles.text}>
      {cuit}
    </p>
    <div className={styles.text}>
      {moment(updatedAt).format(DATE_FORMAT)}
    </div>
    <div className={styles.statusContainer}>
      <SharedStatusLabel
        status={approvalStatus}
        withTooltip
        type="large"
      />
    </div>
  </>
);

interface IListContentItemProps {
  company: ICompany;
}
