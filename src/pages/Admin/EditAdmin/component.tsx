import React, { FunctionComponent } from "react";

import { Form } from "$components/Form";
import { FormikForm } from "$components/FormikForm";
import { Formik } from "$components/Formik";
import { PersonalInformationFormSection } from "$components/PersonalInformationFormSection";
import { FormFooter } from "$components/FormFooter";

import { IComponentProps } from "./interfaces";
import styles from "./styles.module.scss";

export const EditAdmin: FunctionComponent<IComponentProps> = ({
  modelToValues,
  admin,
  onSubmit,
  translations
}) => (
  <Form title={translations?.title}>
    <Formik initialValues={modelToValues()} onSubmit={onSubmit}>
      {formikProps => (
        <FormikForm
          initialValuesModel={admin}
          modelToValues={modelToValues}
          formikProps={formikProps}
        >
          <PersonalInformationFormSection withoutPadron className={styles.formSection} />
          <FormFooter
            isSubmitting={formikProps.isSubmitting}
            submitButtonText={translations?.submit}
            errors={formikProps.errors}
          />
        </FormikForm>
      )}
    </Formik>
  </Form>
);
