import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";

import { CareerSelector } from "$components/CareerSelector";
import { FormSet } from "$components/FormSet";
import { NumberInput } from "$components/NumberInput";
import { UserInput } from "$components/UserInput";

import styles from "./styles.module.scss";
import { FormikHelpers } from "formik/dist/types";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";
import { FormikValidator } from "$models/FormikValidator";
import { ISignUpFormValues, ISignUpTranslations } from "./interface";
import { FormFooter } from "$components/FormFooter";

const SignUp: FunctionComponent<ISignUpProps> = (
  {
    translations,
    onSubmit,
    validateForm
  }
) => {
  const careerInitialValue = { code: "", creditsCount: NaN };
  const initialValues: ISignUpFormValues = {
    user: {
      email: "",
      dni: 0,
      password: "",
      name: "",
      surname: ""
    },
    padron: NaN,
    careers: [careerInitialValue],
    _form: ""
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors: FormikErrors<ISignUpFormValues> = {};
            const formErrorMessage = validateForm(values);
            if (formErrorMessage) errors._form = formErrorMessage;
            return errors;
          }}
          validateOnMount={true}
          onSubmit={onSubmit}
        >
          {({ values, isSubmitting, errors }) => (
            <div className={styles.body}>
              <Form className={styles.formContainer}>
                <div className={styles.textInputContainer}>
                  <UserInput
                    email={{ name: "user.email", label: translations.email }}
                    password={{ name: "user.password", label: translations.password }}
                    dni={{ name: "user.dni", label: translations.dni, validate: false }}
                    name={{ name: "user.name", label: translations.name }}
                    surname={{ name: "user.surname", label: translations.surname }}
                  />
                  <NumberInput
                    name="padron"
                    label={translations.padron}
                    className={styles.textInput}
                    validate={FormikValidator({
                      validator: validateIntegerInRange({ min: { value: 0, include: false } }),
                      mandatory: true
                    })}
                  />
                </div>
                <FormSet
                  title={translations.careersTitle}
                  name={"careers"}
                  values={values.careers}
                  defaultValue={careerInitialValue}
                  fields={(value, index) => (
                    <CareerSelector key={index} index={index} value={value}/>
                  )}
                />
                <FormFooter
                  className={styles.footer}
                  isSubmitting={isSubmitting}
                  submitButtonText={translations.submit}
                  errors={errors}
                />
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

interface ISignUpProps {
  translations: ISignUpTranslations;
  validateForm: (values: ISignUpFormValues) => string | undefined;
  onSubmit: (values: ISignUpFormValues, formikHelpers: FormikHelpers<ISignUpFormValues>) =>
    void | Promise<any>;
}

export { SignUp };
