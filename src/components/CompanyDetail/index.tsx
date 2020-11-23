import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

import { Subtitle } from "$components/Subtitle";
import { Description } from "$components/Description";
import { DetailContactMe } from "$components/Detail/DetailContactMe";
import { Card } from "$components/Card";
import { StatusTitle } from "$components/StatusTitle";
import { CompanyLogo } from "$components/CompanyLogo";
import { ICompany } from "$interfaces/Company";

export const CompanyDetail: FunctionComponent<ICompanyDetailProps> = ({
  className,
  editButton,
  withStatusLabel,
  company
}) => (
  <Card largePadding className={className}>
    <div className={styles.header}>
      <CompanyLogo
        size="extraLarge"
        companyName={company?.companyName}
        logo={company?.logo}
        useDefaultIcon
      />
      <div className={styles.mainInfo}>
        <StatusTitle
          detailTitle={company?.companyName}
          approvalStatus={withStatusLabel ? company?.approvalStatus : undefined}
        />
        <Subtitle className={styles.companySlogan}>{company?.slogan}</Subtitle>
        <DetailContactMe email={company?.email} website={company?.website} />
      </div>
      <div className={styles.editButton}>{editButton}</div>
    </div>
    <Description>{company?.description}</Description>
    <section className={styles.photos}>
      {company?.photos?.map((source, index) => (
        <img key={index} src={source} alt={`${company.companyName}`} />
      ))}
    </section>
  </Card>
);

interface ICompanyDetailProps {
  company?: ICompany;
  editButton?: React.ReactElement;
  withStatusLabel?: boolean;
  className?: string;
}
