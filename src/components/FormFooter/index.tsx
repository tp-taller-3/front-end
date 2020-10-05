import React from "react";
import { isArray } from "lodash";
import classNames from "classnames";
import { FormikErrors } from "formik";

import { SubmitButton } from "$components/SubmitButton";
import styles from "./styles.module.scss";

export const FormFooter = <Values extends { _form?: string | string[] }>(
  {
    onSubmit,
    isSubmitting,
    submitButtonText,
    className,
    errors
  }: IFormFooterProps<Values>
) => (
  <div className={classNames(styles.footer, className)}>
    {
      isArray(errors?._form) ?
        errors?._form?.map((error: string) =>
          <span key={error} className={styles.formError}>{error}</span>
        )
        :
      <span className={styles.formError}>{errors._form}</span>
    }
    <SubmitButton
      kind="primary"
      disabled={isSubmitting}
      errors={errors}
      onClick={onSubmit}
      {...(!onSubmit && { type: "submit" })}
    >
      {submitButtonText}
    </SubmitButton>
  </div>
);

interface IFormFooterProps<Values> {
  onSubmit?: () => void;
  isSubmitting: boolean;
  submitButtonText: string;
  className?: string;
  errors: FormikErrors<Values>;
}
