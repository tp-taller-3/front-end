import React, { FunctionComponent } from "react";
import { useCourses } from "../../../../models/hooks/queries/useCourses";
import { SearchSelector } from "../../../../components/SearchSelector";
import { IDepartment } from "../interfaces";

export const SelectCourses: FunctionComponent<IDepartment> = ({ department }) => {
  const courses = useCourses(department);

  return (
    <>
      {courses && (
        <SearchSelector
          name={`course`}
          options={courses}
          label={"Curso"}
          getOptionLabel={option => option.name}
          getOptionValue={option => option.uuid}
        />
      )}
    </>
  );
};
