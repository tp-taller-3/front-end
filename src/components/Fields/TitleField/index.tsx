import React, { FunctionComponent } from "react";
import { TextField } from "$components/Fields";
import { validateStringLength } from "validations-fiuba-course-admin";
import { ITextFieldProps } from "../TextField";

export const TitleField: FunctionComponent<ITextFieldProps> = ({ mandatory, ...props }) => (
  <TextField {...props} mandatory={mandatory} validator={validateStringLength} />
);
