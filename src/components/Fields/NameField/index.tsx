import React, { FunctionComponent } from "react";
import { TextField } from "$components/Fields";
import { validateName } from "validations-fiuba-course-admin";
import { ITextFieldProps } from "../TextField";

export const NameField: FunctionComponent<ITextFieldProps> = ({ mandatory, ...props }) => (
  <TextField {...props} mandatory={mandatory} validator={validateName} />
);
