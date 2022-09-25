import React, { FunctionComponent } from "react";
import { useDepartments } from "../../../../models/hooks/queries/useDepartments";
import { SearchSelector } from "../../../../components/SearchSelector";
import { ISemester } from "../interfaces";

export const SelectDepartment: FunctionComponent<ISemester> = ({ semester }) => {
  const departments = useDepartments(semester);

  return (
    <>
      {departments && (
        <SearchSelector
          name={`department`}
          options={departments}
          label={"Departamento"}
          getOptionLabel={option => option.name}
          getOptionValue={option => option.uuid}
        />
      )}
    </>
  );
};
