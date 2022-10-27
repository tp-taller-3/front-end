import React, { FunctionComponent } from "react";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { SearchSelector } from "../../../components/SearchSelector";
import { Window } from "../../../components/Window";
import { useSemesters } from "../../../models/hooks/queries/useSemesters";
import { FormSection } from "../../../components/FormSection";
import { SelectCourses } from "./SelectCourse";

import styles from "./styles.module.scss";
import { noop } from "lodash";
import { PaginationTable } from "./PaginationTable";

export const SurveysResult: FunctionComponent = () => {
  const semesters = useSemesters();

  const initialValues = {
    semester: "",
    course: "",
    _form: ""
  };

  return (
    <Window>
      <Formik initialValues={initialValues} onSubmit={noop}>
        {formikProps => (
          <Form title={"Resultados"}>
            <FormSection
              title={"Selección de encuestas"}
              subtitle={"Selección del periodo y curso para la visualización de los resultados"}
              className={styles.formSection}
            >
              <FormikForm>
                {semesters && (
                  <SearchSelector
                    name={`semester`}
                    options={semesters}
                    label={"Cuatrimestre"}
                    getOptionLabel={semester => `${semester.semesterNumber}C ${semester.year}`}
                    getOptionValue={option => option.uuid}
                  />
                )}
                {formikProps.values.semester && (
                  <SelectCourses semester={formikProps.values.semester} />
                )}
              </FormikForm>
            </FormSection>
            {formikProps.values.course && (
              <FormSection title={"Resultados encuesta"} subtitle={`Encuesta del curso`}>
                <PaginationTable></PaginationTable>
              </FormSection>
            )}
          </Form>
        )}
      </Formik>
    </Window>
  );
};
