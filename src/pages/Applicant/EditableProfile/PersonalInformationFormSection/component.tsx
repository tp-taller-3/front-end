import React, { FunctionComponent } from "react";
import classNames from "classnames";

import { Card } from "$components/Card";
import { EmailField, NameField } from "$components/Fields";
import { TextInput } from "$components/TextInput";

import { IComponent } from "./interfaces";
import styles from "./styles.module.scss";

export const PersonalInformationFormSection: FunctionComponent<IComponent> = (
  {
    translations,
    className
  }
) => (
  <Card largePadding className={classNames(styles.card, className)}>
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
    <EmailField name="user.email" label={translations.email} />
    <TextInput name="description" label={translations.description} multiline />
  </Card>
);