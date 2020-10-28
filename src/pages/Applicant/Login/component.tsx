import React, { FunctionComponent } from "react";

import { RoutesBuilder } from "$models/RoutesBuilder";
import { IFiubaLoginVariables } from "$hooks";

import { LoginForm } from "$components/LoginForm";
import { OnSubmit } from "$components/LoginForm/interface";
import { LoginWindow } from "$components/LoginWindow";
import { DniField } from "$components/Fields";
import { Link } from "$components/Link";

import { ITranslations } from "./interfaces";
import styles from "./styles.module.scss";

export const Login: FunctionComponent<IComponentProps> = ({ translations, ...props }) => (
  <LoginWindow>
    <LoginForm<IFiubaLoginVariables>
      {...props}
      title={translations.title}
      initialValues={{ dni: "", password: "" }}
      className={styles.form}
      fields={<DniField name="dni" label={translations.dni} />}
      footer={
        <div className={styles.footer}>
          <Link className={styles.register} to={RoutesBuilder.applicant.signUp()}>
            {translations.register}
          </Link>
          <div>
            <span className={styles.forgotYourPassword}>{translations.forgotYourPassword}</span>
            <a target="_blank" rel="noopener noreferrer" href={"http://cambio.fi.uba.ar/"}>
              {translations.manageYourFiubaAccount}
            </a>
          </div>
        </div>
      }
    />
  </LoginWindow>
);

interface IComponentProps {
  onSubmit: OnSubmit<IFiubaLoginVariables>;
  translations: ITranslations;
}
