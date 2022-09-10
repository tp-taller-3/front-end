import React, { FunctionComponent } from "react";
import { TextField } from "$components/Fields";
import { validateIntegerInRange, validateStringSpaces } from "validations-fiuba-course-admin";
import { ITextFieldProps } from "../TextField";

const validate = (value: string) => {
  validateStringSpaces(value);
  const dni = Number(value.replace(",", "."));
  validateIntegerInRange({ min: { value: 0, include: false } })(dni);
};

export const DniField: FunctionComponent<ITextFieldProps> = props => (
  <TextField {...props} autoComplete="username" validator={validate} />
);
