import React, { FunctionComponent } from "react";
import { SearchSelector } from "$components/SearchSelector";
import { PositiveNumberInput } from "$components/NumberInput/PositiveNumberInput";
import { CheckboxInput } from "$components/CheckboxInput";
import { ICareerSelectorProps } from "./interface";
import { FormikValidator } from "$models/FormikValidator";
import styles from "./styles.module.scss";

export const CareerSelector: FunctionComponent<ICareerSelectorProps> = (
  {
    index,
    options,
    translations,
    value
  }
) => (
  <div className={styles.fieldsContainer}>
    <div className={styles.firstRow}>
      <SearchSelector
        name={`careers.${index}.careerCode`}
        options={options}
        label={translations.career}
        className={styles.career}
        validate={FormikValidator({ mandatory: true })}
        getOptionLabel={option => option.description}
        getOptionValue={option => option.code}
        initialValue={value?.careerCode}
      />
      <div className={styles.isGraduate}>
        <p className={styles.isGraduateLabel}>{translations.isGraduate}</p>
        <CheckboxInput
          checked={value.isGraduate}
          name={`careers.${index}.isGraduate`}
        />
      </div>
    </div>
    {
      !value.isGraduate &&
      <div className={styles.secondRow}>
        <PositiveNumberInput
          className={styles.currentCareerYear}
          name={`careers.${index}.currentCareerYear`}
          label={translations.currentCareerYear}
          mandatory
        />
        <PositiveNumberInput
          className={styles.approvedSubjectCount}
          name={`careers.${index}.approvedSubjectCount`}
          label={translations.approvedSubjectCount}
          mandatory
        />
      </div>
    }
  </div>
);