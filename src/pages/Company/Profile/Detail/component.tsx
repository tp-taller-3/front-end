import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { ICompanyDetailProps } from "./interface";

import { DetailHeadline } from "$components/Detail/DetailHeadline";
import { Subtitle } from "$components/Subtitle";
import { DetailDescription } from "$components/Detail/DetailDescription";
import { DetailContactMe } from "$components/Detail/DetailContactMe";
import { DetailMainContainer } from "$components/Detail/DetailMainContainer";
import { CompanyLogo } from "$components/CompanyLogo";
import { LoadingSpinner } from "$components/LoadingSpinner";

const Detail: FunctionComponent<ICompanyDetailProps> = (
  {
    company: {
      companyName,
      email = "",
      slogan = "",
      logo = "",
      website = "",
      description = "",
      photos = []
    },
    loading
  }
) => {
  if (loading) return <LoadingSpinner />;

  return (
    <DetailMainContainer>
      <div className={styles.header}>
        <CompanyLogo
          size={"large"}
          companyName={companyName}
          logo={logo}
        />
        <div className={styles.mainInfo}>
          <DetailHeadline headline={companyName}/>
          <Subtitle>{slogan}</Subtitle>
          <DetailContactMe email={email} website={website}/>
        </div>
      </div>
      <DetailDescription description={description}/>
      <section className={styles.photos}>
        {
          photos.map((source, index) =>
            (<img key={index} src={source} alt={`${companyName}`}/>)
          )}
      </section>
    </DetailMainContainer>
  );
};

export { Detail };
