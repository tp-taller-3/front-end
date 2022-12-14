import React, { FunctionComponent } from "react";

import { Form } from "$components/Form";
import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { FiubaCredentialsFormSection } from "$components/FiubaCredentialsFormSection";
import { PersonalInformationFormSection } from "$components/PersonalInformationFormSection";
import { FormFooter } from "$components/FormFooter";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const SignUp: FunctionComponent<IComponentProps> = ({
  initialValues,
  onSubmit,
  translations
}) => (
  <Form title={translations?.title}>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting, errors }) => (
        <FormikForm>
          <FiubaCredentialsFormSection className={styles.formSection} />
          <PersonalInformationFormSection withoutPadron className={styles.formSection} />
          <FormFooter
            isSubmitting={isSubmitting}
            submitButtonText={translations?.submit}
            errors={errors}
          />
        </FormikForm>
      )}
    </Formik>
  </Form>
);
