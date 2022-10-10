import React, { FunctionComponent } from "react";
import { useCourses } from "../../../../models/hooks/queries/useCourses";
import { SearchSelector } from "../../../../components/SearchSelector";
import { ISemester } from "../interfaces";

export const SelectCourses: FunctionComponent<ISemester> = ({ semester }) => {
  const courses = useCourses(semester);

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
