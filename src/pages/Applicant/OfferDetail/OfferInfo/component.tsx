import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { OfferSalary } from "../OfferSalary";
import { OfferCareers } from "../OfferCareers";
import { OfferWorkload } from "../OfferWorkload";

import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";

const OfferInfo: FunctionComponent<IOfferInfoProps> = ({ offer, className }) => (
  <div className={classNames(styles.mainContainer, className)}>
    <OfferCareers className={styles.careers} offer={offer}/>
    <OfferWorkload className={styles.hours} offer={offer}/>
    <OfferSalary className={styles.salary} offer={offer} />
  </div>
);

interface IOfferInfoProps {
  offer: IOffer;
  className?: string;
}

export { OfferInfo };