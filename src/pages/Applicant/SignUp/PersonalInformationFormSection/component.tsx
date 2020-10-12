import React, { FunctionComponent } from "react";

import { EmailField, NameField } from "$components/Fields";
import { NumberInput } from "$components/NumberInput";
import { FormSection } from "$components/FormSection";

import { FormikValidator } from "$models/FormikValidator";
import { validateIntegerInRange } from "validations-fiuba-laboral-v2";

import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const PersonalInformationFormSection: FunctionComponent<IComponent> = (
  {
    className,
    translations
  }
) => (
  <FormSection
    className={className}
    mediumPaddingBottom
    title={translations.title}
  >
    <div className={styles.firstRow}>
      <NameField
        className={styles.name}
        name="user.name"
        label={translations.name}
        withoutMargin
      />
      <NameField
        className={styles.surname}
        name="user.surname"
        label={translations.surname}
        withoutMargin
      />
    </div>
    <div className={styles.secondRow}>
      <EmailField
        className={styles.email}
        name="user.email"
        label={translations.email}
        withoutMargin
      />
      <NumberInput
        className={styles.padron}
        name="padron"
        label={translations.padron}
        withoutMargin
        validate={FormikValidator({
          validator: validateIntegerInRange({ min: { value: 0, include: false } }),
          mandatory: true
        })}
      />
    </div>
  </FormSection>
);
