import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";

import { Headline } from "$components/Headline";
import { Subtitle } from "$components/Subtitle";
import { Description } from "$components/Description";
import { DetailContactMe } from "$components/Detail/DetailContactMe";
import { ClickableCard } from "$components/ClickableCard";
import { CompanyLogo } from "$components/CompanyLogo";
import { ICompany } from "$interfaces/Company";

export const CompanyDetail: FunctionComponent<ICompanyDetailProps> = (
  {
    editButton,
    statusLabel,
    company: {
      companyName,
      email = "",
      slogan = "",
      logo = "",
      website = "",
      description = "",
      photos = []
    }
  }
) => {
  return (
    <ClickableCard detail={true}>
      <div className={styles.header}>
        <CompanyLogo
          size="extraLarge"
          companyName={companyName}
          logo={logo}
        />
        <div className={styles.mainInfo}>
          <Headline>{companyName}</Headline>
          <Subtitle className={styles.companySlogan}>{slogan}</Subtitle>
          <DetailContactMe email={email} website={website}/>
        </div>
        <div className={styles.editButton}>{editButton}</div>
        {statusLabel}
      </div>
      <Description>{description}</Description>
      <section className={styles.photos}>
        {
          photos.map((source, index) =>
            (<img key={index} src={source} alt={`${companyName}`}/>)
          )}
      </section>
    </ClickableCard>
  );
};

interface ICompanyDetailProps {
  company: ICompany;
  editButton?: React.ReactElement;
  statusLabel?: React.ReactElement;
  className?: string;
}
