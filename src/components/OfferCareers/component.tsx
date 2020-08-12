import React, { Fragment, FunctionComponent } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { OfferInfoItem } from "../OfferInfoItem";

import { IOfferCareersComponentProps } from "./interface";

const OfferCareers: FunctionComponent<IOfferCareersComponentProps> = (
  {
    offer,
    careersTitle,
    className
  }) => {
  if (offer.careers === undefined || offer.careers.length === 0) return <Fragment/>;
  return (
    <OfferInfoItem className={classNames(styles.careers, className)} title={careersTitle}>
      {
        offer.careers.map(({ career: { code, description } }) =>
          <span key={code} className={styles.career}>{description}</span>
        )
      }
    </OfferInfoItem>
  );
};

export { OfferCareers };
