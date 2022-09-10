import React, { FunctionComponent } from "react";
import { TextField } from "$components/Fields";
import { validateCuit } from "validations-fiuba-course-admin";
import { ITextFieldProps } from "../TextField";

export const CuitField: FunctionComponent<ITextFieldProps> = props => (
  <TextField {...props} validator={validateCuit} mandatory />
);
