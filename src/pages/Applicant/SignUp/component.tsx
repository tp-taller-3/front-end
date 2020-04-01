import React, { FunctionComponent } from "react";
import { Form, Formik } from "formik";

import TextInput from "$components/TextInput";
import { CareerSelector } from "$components/CareerSelector";
import Button from "$components/Button";

import styles from "./styles.module.scss";
import { ICareer } from "$interfaces/Applicant";
import { FormikHelpers } from "formik/dist/types";
import { validateEmail, validateName, validatePassword } from "validations-fiuba-laboral-v2";
import { FormikValidator } from "$src/FormikValidator";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { ISignUpValues } from "./interface";
import { FormSet } from "$components/FormSet";


const SignUp: FunctionComponent<ISignUpProps> = (
  {
    translations,
    careers,
    onSubmit,
    validate,
    loading
  }
) => {
  const formName = "signUpForm";
  const careerInitialValue = { code: "", creditsCount: 0 };
  const initialValues: ISignUpValues = {
    email: "",
    password: "",
    name: "",
    surname: "",
    padron: 0,
    careers: [careerInitialValue],
    _form: ""
  };

  if (loading) return <LoadingSpinner/>;

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errorMessage = validate(values);
            if (errorMessage) return { _form: errorMessage };
          }}
          isInitialValid={false}
          onSubmit={onSubmit}
        >
          {({ values, isValid, isSubmitting, errors }) => (
            <div className={styles.body}>
              <Form translate="yes" className={styles.formContainer} id={formName}>
                <div className={styles.textInputContainer}>
                  <TextInput
                    name="email"
                    label={translations.email}
                    type="email"
                    className={styles.textInput}
                    validate={FormikValidator({ validator: validateEmail, mandatory: true })}
                  />
                  <TextInput
                    name="password"
                    label={translations.password}
                    type="password"
                    className={styles.textInput}
                    validate={FormikValidator({ validator: validatePassword, mandatory: true })}
                  />
                  <TextInput
                    name="name"
                    label={translations.name}
                    type="text"
                    className={styles.textInput}
                    validate={FormikValidator({ validator: validateName, mandatory: true })}
                  />
                  <TextInput
                    name="surname"
                    label={translations.surname}
                    type="text"
                    className={styles.textInput}
                    validate={FormikValidator({ validator: validateName, mandatory: true })}
                  />
                  <TextInput
                    name="padron"
                    label={translations.padron}
                    type="number"
                    inputProps={{ min: 0, step: 1 }}
                    className={styles.textInput}
                    validate={(value: number) => {
                      if (value <= 0) return "El padrón es mayor que 0";
                    }}
                  />
                </div>
                <FormSet
                  title={translations.careersTitle}
                  name={"careers"}
                  values={values.careers}
                  defaultValue={careerInitialValue}
                  form={(value, index) => (
                    <CareerSelector
                      key={index}
                      index={index}
                      options={careers}
                    />
                  )}
                />
              </Form>
              <div className={styles.footer}>
                <span className={styles.formError}>{errors._form}</span>
                <Button
                  form={formName}
                  className="primary"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                >
                  {translations.submit}
                </Button>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

interface ISignUpProps {
  translations: {
    title: string;
    email: string;
    password: string;
    name: string;
    surname: string;
    padron: string;
    careersTitle: string;
    submit: string;
  };
  loading: boolean;
  careers: ICareer[];
  validate: (values: ISignUpValues) => string | undefined;
  onSubmit: (values: ISignUpValues, formikHelpers: FormikHelpers<ISignUpValues>) =>
    void | Promise<any>;
}

export { SignUp };
