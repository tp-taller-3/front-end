import React, { FunctionComponent } from "react";
import { IOffer } from "$interfaces/Offer";
import { CareerList } from "$components/CareerList";
import { SeparatedStatusLabel } from "$components/SeparatedStatusLabel";
import { TimeFormatter } from "$models/TimeFormatter";
import styles from "./styles.module.scss";
import { isNil } from "lodash";
import { NumberFormatter } from "$models/NumberFormatter";

export const ListContentItem: FunctionComponent<IListContentItemProps> = ({
  offer: {
    title,
    hoursPerDay,
    targetApplicantType,
    minimumSalary,
    maximumSalary,
    updatedAt,
    graduadosApprovalStatus,
    extensionApprovalStatus,
    studentsExpirationDateTime,
    graduatesExpirationDateTime,
    company: { companyName },
    careers
  }
}) => (
  <>
    <p className={styles.text}>{companyName}</p>
    <div className={styles.container}>
      <p className={styles.text}>{title}</p>
    </div>
    <div className={styles.careersContainer}>
      {careers ? <CareerList className={styles.careers} careers={careers} shorten={true} /> : <p />}
    </div>
    <p className={styles.text}>{hoursPerDay}</p>
    <div className={styles.salary}>
      {isNil(maximumSalary) ? (
        <span>{NumberFormatter.formatMoney(minimumSalary)}</span>
      ) : (
        [
          ["Min: ", minimumSalary],
          ["Max: ", maximumSalary]
        ].map(([label, salary]) => (
          <p key={label}>
            <i>{label}</i>
            <span>{NumberFormatter.formatMoney(salary)}</span>
          </p>
        ))
      )}
    </div>
    <div className={styles.container}>
      <SeparatedStatusLabel
        styles={styles}
        type="no-background"
        withStatusText={false}
        targetApplicantType={targetApplicantType}
        graduadosApprovalStatus={graduadosApprovalStatus}
        extensionApprovalStatus={extensionApprovalStatus}
        studentsExpirationDateTime={studentsExpirationDateTime}
        graduatesExpirationDateTime={graduatesExpirationDateTime}
      />
    </div>
    <div className={styles.text}>{TimeFormatter.dateTime(updatedAt)}</div>
  </>
);

interface IListContentItemProps {
  offer: IOffer;
}
