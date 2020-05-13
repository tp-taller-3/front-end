import React, { FunctionComponent } from "react";
import { Form, Formik, FormikErrors } from "formik";
import { FormikHelpers } from "formik/dist/types";

import styles from "./styles.module.scss";
import { ISignUpFormValues, ISignUpTranslations } from "./interface";

import Button from "../../../components/Button";
import { Window } from "../../../components/Window";
import TextInput from "../../../components/TextInput";
import { UserInput } from "../../../components/UserInput";

import { FormikValidator } from "../../../models/FormikValidator";

import { validateCuit, validateName, validateURL } from "validations-fiuba-laboral-v2";

const formName = "signUpForm";

const SignUp: FunctionComponent<ISignUpProps> = ({ onSubmit, translations }) => {
  const initialValues: ISignUpFormValues = {
    user: {
      email: "",
      password: "",
      name: "",
      surname: ""
    },
    companyName: "",
    cuit: "",
    slogan: "",
    description: "",
    logo: "",
    website: "",
    _form: "",
    passwordConfirm: ""
  };

  return (
    <Window>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{translations.title}</h1>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors: FormikErrors<ISignUpFormValues> = {};
            if (values.user.password !== values.passwordConfirm) {
              errors.passwordConfirm = "Las contraseñas no coinciden";
            }
            return errors;
          }}
          validateOnMount={true}
          onSubmit={onSubmit}
        >
          {({ values, isSubmitting, errors }) => (
            <>
              <Form id={formName}>
                <UserInput
                  email={{ name: "user.email", label: translations.email }}
                  password={{ name: "user.password", label: translations.password }}
                  passwordConfirm={{ name: "passwordConfirm", label: translations.passwordConfirm }}
                  name={{ name: "user.name", label: translations.name }}
                  surname={{ name: "user.surname", label: translations.surname }}
                />
                <TextInput
                  name="companyName"
                  label={translations.companyName}
                  validate={FormikValidator({ validator: validateName, mandatory: true })}
                />
                <TextInput
                  name="cuit"
                  label={translations.cuit}
                  validate={FormikValidator({ validator: validateCuit, mandatory: true })}
                />
                <TextInput
                  name="slogan"
                  label={translations.slogan}
                />
                <TextInput
                  name="description"
                  label={translations.description}
                />
                <TextInput
                  name="website"
                  label={translations.website}
                  validate={FormikValidator({ validator: validateURL, mandatory: true })}
                />
              </Form>
              <Button
                form={formName}
                className="primary"
                type="submit"
                disabled={isSubmitting}
              >
                {translations.submit}
              </Button>
            </>
          )}
        </Formik>
      </div>
    </Window>
  );
};

interface ISignUpProps {
  translations: ISignUpTranslations;
  onSubmit: (
    values: ISignUpFormValues,
    formikHelpers: FormikHelpers<ISignUpFormValues>
  ) => void | Promise<any>;
}

export { SignUp };