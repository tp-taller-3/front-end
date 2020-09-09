import React, { FunctionComponent } from "react";
import { FilterLabel } from "$components/FilterLabel";
import styles from "./styles.module.scss";

export const AppliedFilters: FunctionComponent<IAppliedFiltersProps> = ({ className }) => (
  <div className={className}>
    <FilterLabel className={styles.filter}>asd</FilterLabel>
    <FilterLabel className={styles.filter}>fes sgrdr re e</FilterLabel>
    <FilterLabel className={styles.filter}>fsdfss tres refsdfds</FilterLabel>
    <FilterLabel className={styles.filter}>
      fsdfss tres refsdfdsfsdfss tres refsdfdsfsdfss tres refsdfdsfsdfss tr
    </FilterLabel>
  </div>
);

interface IAppliedFiltersProps {
  className?: string;
}