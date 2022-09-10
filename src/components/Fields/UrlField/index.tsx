import React, { FunctionComponent } from "react";
import { TextField } from "$components/Fields";
import { validateURL } from "validations-fiuba-course-admin";
import { ITextFieldProps } from "../TextField";

export const UrlField: FunctionComponent<ITextFieldProps> = props => (
  <TextField {...props} validator={validateURL} mandatory />
);
