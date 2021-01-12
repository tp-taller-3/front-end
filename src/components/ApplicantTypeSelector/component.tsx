import React, { FunctionComponent } from "react";
import { IComponentProps } from "./interfaces";
import { SelectField } from "$components/Fields";

export const ApplicantTypeSelector: FunctionComponent<IComponentProps> = ({
  label,
  className,
  translations,
  mandatory,
  name,
  options
}) => (
  <SelectField
    className={className}
    mandatory={mandatory}
    fieldName={name}
    options={options}
    title={label || translations.title}
  />
);
