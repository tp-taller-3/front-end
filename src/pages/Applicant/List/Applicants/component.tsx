import React, { FunctionComponent } from "react";
import { IApplicantsProps } from "./interface";
import { ListItem } from "$components/ListItem";
import styles from "./styles.module.scss";
import Button from "$components/Button";
import { ListTitle } from "$components/ListTitle";
import { Subtitle } from "$components/Subtitle";
import { LoadingSpinner } from "$components/LoadingSpinner";

const Applicants: FunctionComponent<IApplicantsProps> = (
  {
    applicants,
    onClickEdit,
    onClickView,
    translations: {
      editButtonText,
      viewButtonText
    } = {},
    loading
  }) => {
  if (loading) {
    return (
      <>
        <ListTitle titleTranslationPath={"applicantList"} />
        <LoadingSpinner />
      </>
    );
  }

  return (
    <>
      <ListTitle titleTranslationPath={"applicantList"} />
      {
        applicants.map(applicant =>
          <div className={styles.row} key={applicant.uuid}>
            <ListItem>
              <div className={styles.childrenContainer}>
                <Subtitle className={styles.name}>
                  {`${applicant.user.name} ${applicant.user.surname}`}
                </Subtitle>
                <div className={styles.buttons}>
                  <Button
                    onClick={() => onClickEdit(applicant.uuid)}
                    className="secondary"
                  >
                    {editButtonText}
                  </Button>
                  <Button
                    onClick={() => onClickView(applicant.uuid)}
                    className="primary"
                  >
                    {viewButtonText}
                  </Button>
                </div>
              </div>
            </ListItem>
          </div>
        )
      }
    </>
  );
};

export { Applicants };
