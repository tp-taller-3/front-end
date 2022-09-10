import React, { FunctionComponent } from "react";
import { validateIntegerInRange } from "validations-fiuba-course-admin";
import { IBaseNumberField, NumberField } from "../index";

export const PositiveIntegerField: FunctionComponent<IBaseNumberField> = props => (
  <NumberField
    {...props}
    validator={validateIntegerInRange({ min: { value: 0, include: false } })}
  />
);
