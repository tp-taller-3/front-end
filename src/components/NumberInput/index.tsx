import React, { FunctionComponent } from "react";
import { FastField, Field, FieldProps } from "formik";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { TextField } from "@material-ui/core";
import { IBaseProps, IValidatorProps } from "./interfaces";

export const NumberInput: FunctionComponent<NumberInputProps> = (
  {
    name,
    label,
    className,
    validate,
    fast = true,
    withoutMargin = false
  }
) => {
  const fieldProps = {
    name,
    validate,
    children: ({ meta, form }: FieldProps<number>) => {
      const setFormValue = (stringValue: string) => {
        let value;
        if (stringValue !== "") {
          value = Number(stringValue.replace(",", "."));
        }
        form.setFieldValue(name, value);
      };

      return (
        <TextField
          label={label}
          className={classNames(
            styles.textInput,
            className,
            { [styles.withoutMargin]: withoutMargin }
          )}
          defaultValue={isNaN(meta.value) ? "" : meta.value.toString(10)}
          onBlur={() => form.setFieldTouched(name, true)}
          onFocus={event => setFormValue(event.target.value)}
          onChange={event => setFormValue(event.target.value)}
          disabled={form.isSubmitting}
          error={meta.touched && !!meta.error}
          helperText={meta.touched ? meta.error : undefined}
        />
      );
    }
  };
  return fast ? <FastField {...fieldProps}/> : <Field {...fieldProps}/>;
};

export type NumberInputProps = IBaseProps & IValidatorProps;
