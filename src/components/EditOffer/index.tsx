import React, { FunctionComponent, ReactNode } from "react";

import { Form as FormikForm, FormikErrors } from "formik";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";
import { InfoMessage } from "$components/InfoMessage";
import { MainInformationFormSection } from "./MainInformationFormSection";
import { DescriptionFormSection } from "./DescriptionFormSection";
import { RecipientsFormSection } from "./RecipientsFormSection";

import { validateSalaryRange } from "validations-fiuba-laboral-v2";

import { ICreateOfferValues } from "$interfaces/Offer";
import styles from "./styles.module.scss";
import { isNil } from "lodash";

export const EditOffer: FunctionComponent<ICreateOfferProps> = ({
  title,
  acceptanceCriteria,
  infoMessageTranslationGroup,
  onSubmit,
  initialValues,
  formFooter,
  autoFocus
}) => (
  <Form title={title} acceptanceCriteria={acceptanceCriteria}>
    {infoMessageTranslationGroup && (
      <InfoMessage translationGroupName={infoMessageTranslationGroup} />
    )}
    <Formik<ICreateOfferValues>
      validateOnMount={false}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={values => {
        if (isNil(values.maximumSalary)) return;
        if (isNaN(values.minimumSalary) || isNaN(values.maximumSalary)) return;
        try {
          validateSalaryRange(values.minimumSalary, values.maximumSalary);
        } catch ({ message }) {
          return { _form: message };
        }
      }}
    >
      {({ values, errors, isSubmitting, submitForm }) => (
        <>
          <FormikForm className={styles.formContainer}>
            <MainInformationFormSection className={styles.formSection} autoFocus={autoFocus} />
            <DescriptionFormSection
              className={styles.formSection}
              sections={values.sections}
              name="sections"
            />
            <RecipientsFormSection className={styles.formSection} />
          </FormikForm>
          {formFooter({ isSubmitting, submitForm, errors })}
        </>
      )}
    </Formik>
  </Form>
);

export interface IEditOfferFormProps extends ICreateOfferValues {
  _form: string;
}

export interface IEditOfferTranslations {
  create: string;
  edit: string;
  submit: string;
}

interface IFormFooterParams {
  isSubmitting: boolean;
  submitForm: () => void;
  errors: FormikErrors<IEditOfferFormProps>;
}

interface ICreateOfferProps {
  autoFocus?: boolean;
  acceptanceCriteria?: string;
  title?: string;
  infoMessageTranslationGroup?: string;
  initialValues: IEditOfferFormProps;
  onSubmit: (values: ICreateOfferValues) => void;
  formFooter: (params: IFormFooterParams) => ReactNode;
}
