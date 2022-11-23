import React, { FunctionComponent } from "react";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { SearchSelector } from "../../../components/SearchSelector";
import { Window } from "../../../components/Window";
import { useSemesters } from "../../../models/hooks/queries/useSemesters";
import { SelectCourses } from "./SelectCourse";

import styles from "./styles.module.scss";
import { noop } from "lodash";
import { ResultsComponent } from "./ResultsComponent";
import { Subtitle } from "../../../components/Subtitle";

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
            <div className={styles.formSection}>
              <Subtitle>Selección de curso</Subtitle>
              <p className={styles.subtitle}>
                Seleccionar cuatrimestre y curso para ver los resultados
              </p>
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
            </div>
            {formikProps.values.course && formikProps.values.semester && (
              <ResultsComponent course={formikProps.values.course}></ResultsComponent>
            )}
          </Form>
        )}
      </Formik>
    </Window>
  );
};
