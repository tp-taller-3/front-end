import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";
import { ClickableCard } from "$components/ClickableCard";
import { Subtitle } from "$components/Subtitle";
import { TimeHumanizer } from "$components/TimeHumanizer";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { IJobApplication } from "$interfaces/JobApplication";
import styles from "./styles.module.scss";

export const JobApplication: FunctionComponent<IJobApplicationProps> = (
  {
    className,
    jobApplication: {
      createdAt,
      offer,
      applicant
    }
  }) => {
  const history = useHistory();
  return (
    <ClickableCard
      className={classNames(styles.card, className)}
      onClick={() => history.push(RoutesBuilder.company.applicantDetail(applicant.uuid))}
    >
      <div className={styles.leftContainer}>
        <Subtitle className={styles.applicantName}>
          {`${applicant.user.name} ${applicant.user.surname}`}
        </Subtitle>
        <hr className={styles.separator}/>
        <Subtitle className={styles.offerTitle}>
          <Link
            to={RoutesBuilder.company.offer(offer.uuid)}
            onClick={event => event.stopPropagation()}
          >
            {offer.title}
          </Link>
        </Subtitle>
      </div>
      <TimeHumanizer
        className={styles.createdAt}
        since={createdAt}
      />
    </ClickableCard>
  );
};

interface IJobApplicationProps {
  className: string;
  jobApplication: IJobApplication;
}
