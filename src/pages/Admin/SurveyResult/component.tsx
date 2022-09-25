import React, { FunctionComponent } from "react";
import { Form } from "$components/Form";
import { Formik } from "$components/Formik";
import { FormikForm } from "$components/FormikForm";
import { SearchSelector } from "../../../components/SearchSelector";
import { Window } from "../../../components/Window";
import { noop } from "lodash";
import { useSemesters } from "../../../models/hooks/queries/useSemesters";
import { FormSection } from "../../../components/FormSection";
import styles from "../Settings/SecretarySettingsFormSection/styles.module.scss";
import { SelectDepartment } from "./SelectDepartment";
import { SelectCourses } from "./SelectCourse";

export const SurveysResult: FunctionComponent = () => {
  const semesters = useSemesters();

  const initialValues = {
    semester: "",
    department: "",
    course: "",
    _form: ""
  };

  return (
    <Window>
      <Form title={"Resultados"}>
        <FormSection
          title={"Selección de encuestas"}
          subtitle={"Selección del periodo y curso para la visualización de los resultados"}
          className={styles.formSection}
        >
          <Formik initialValues={initialValues} onSubmit={noop}>
            {({ values }) => (
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
                {values.semester && <SelectDepartment semester={values.semester} />}
                {values.department && <SelectCourses department={values.department} />}
              </FormikForm>
            )}
          </Formik>
        </FormSection>
      </Form>
    </Window>
  );
};
