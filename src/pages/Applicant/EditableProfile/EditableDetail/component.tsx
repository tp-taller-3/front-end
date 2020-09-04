import React, { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import { Form, Formik } from "formik";
import isArray from "lodash/isArray";
import { TextInput } from "$components/TextInput";
import { FormSet } from "$components/FormSet";
import { IApplicantDetailEditableTranslations, IApplicantEditableFormValues } from "./interface";
import { CareerSelector } from "$components/CareerSelector";
import { Subtitle } from "$components/Subtitle";
import { CapabilitiesSelector } from "$components/CapabilitiesSelector";
import { FormikValidator } from "$models/FormikValidator";
import { validateURL } from "validations-fiuba-laboral-v2";
import { FormSection } from "$components/FormSection";
import { SubmitButton } from "$components/SubmitButton";
import { UserEditFields } from "$components/UserEditFields";

export const EditableDetail: FunctionComponent<IApplicantDetailEditableProps> = (
  {
    initialValues,
    onSubmit,
    translations,
    validateForm
  }) => {
  const formName = "editApplicantDetailForm";
  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={initialValues}
          validateOnMount
          onSubmit={onSubmit}
          validate={validateForm}
        >
          {({ values, isSubmitting, errors }) => (
            <div className={styles.body}>
              <Form className={styles.formContainer} id={formName}>
                <UserEditFields className={styles.row} name="user.name" surname="user.surname"/>
                <div className={styles.row}>
                  <FormSection>
                    <div className={styles.description}>
                      <TextInput
                        name={"description"}
                        label={translations.description}
                        multiline
                      />
                    </div>
                  </FormSection>
                </div>
                <div className={styles.capabilities}>
                  <Subtitle>{translations.capabilities}</Subtitle>
                  <CapabilitiesSelector label={translations.capability}/>
                </div>
                <div className={styles.row}>
                  <FormSet
                    title={translations.links}
                    name={"links"}
                    values={values.links}
                    defaultValue={{ url: "", name: "" }}
                    fields={(_, index) => (
                      <div className={styles.link}>
                        <TextInput
                          name={`links.${index}.name`}
                          label={translations.linkTitle}
                          validate={FormikValidator({ mandatory: true })}
                        />
                        <TextInput
                          withoutMargin
                          name={`links.${index}.url`}
                          label={translations.link}
                          type="url"
                          validate={FormikValidator({ validator: validateURL, mandatory: true })}
                        />
                      </div>
                    )}
                  />
                </div>
                <div className={styles.row}>
                  <FormSet
                    title={translations.careers}
                    name={"careers"}
                    values={values.careers}
                    defaultValue={{ careerCode: "", isGraduate: true }}
                    fields={(value, index) => (
                      <CareerSelector key={index} index={index} value={value}/>
                    )}
                  />
                </div>
                <div className={styles.row}>
                  <FormSet
                    title={translations.sections}
                    name={"sections"}
                    values={values.sections}
                    defaultValue={{
                      title: "",
                      text: "",
                      displayOrder: Math.max(
                        ...values.sections.map(({ displayOrder }) => displayOrder)
                      ) + 1
                    }}
                    fields={(_, index) => (
                      <div className={styles.section}>
                        <TextInput
                          name={`sections.${index}.title`}
                          label={translations.sectionTitle}
                          validate={FormikValidator({ mandatory: true })}
                        />
                        <TextInput
                          name={`sections.${index}.text`}
                          label={translations.sectionContent}
                          validate={FormikValidator({ mandatory: true })}
                          multiline
                        />
                      </div>
                    )}
                  />
                </div>
              </Form>
              <div className={styles.footer}>
                <div className={styles.formErrorsContainer}>
                { isArray(errors?._form) && errors?._form?.map((error: string) =>
                  <span key={error} className={styles.formError}>{error}</span>
                )}
                </div>
                <div className={styles.submit}>
                  <SubmitButton
                    form={formName}
                    kind="primary"
                    type="submit"
                    disabled={isSubmitting}
                    errors={errors}
                  >
                    {translations.submit}
                  </SubmitButton>
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

interface IApplicantDetailEditableProps {
  initialValues: IApplicantEditableFormValues;
  onSubmit: (applicant: IApplicantEditableFormValues) => void;
  translations: IApplicantDetailEditableTranslations;
  validateForm: (value: IApplicantEditableFormValues) => object;
}
