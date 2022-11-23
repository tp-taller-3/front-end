import React, { FunctionComponent, useState } from "react";
import { Window } from "$components/Window";
import { Formik } from "formik";
import { Form } from "$components/Form";
import { FormikForm } from "$components/FormikForm";
import { PositiveIntegerField, SelectField } from "$components/Fields";
import { SubmitButton } from "$components/SubmitButton";
import { Configuration } from "../../../config";
import axios from "axios";
import { useSnackbar, useTranslations } from "../../../models/hooks";
import { ActionButton } from "../../../components/Snackbar/ActionButton";
import { RoutesBuilder } from "../../../models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { interpolateValues } from "../../../models/interpolateValues";

import styles from "./styles.module.scss";

const BASE_URL = Configuration.application_base_url.slice(
  0,
  Configuration.application_base_url.lastIndexOf("/")
);
const UPLOAD_URL = `${BASE_URL}/csv-upload`;

export const CSVUpload: FunctionComponent = () => {
  const history = useHistory();
  const translations = useTranslations<ITranslations>("csvUpload");

  const [answersCSV, setAnswersCSV] = useState<File | null>(null);
  const [teachersCSV, setTeachersCSV] = useState<File | null>(null);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  if (!translations) return <Window />;

  const translateFilename = (filename: "answersCSV" | "teachersCSV") => translations[filename];

  const onSubmit = async ({ semester, year }: { semester: string; year: string }) => {
    const formData = new FormData();
    formData.append("semester", semester);
    formData.append("year", year);
    if (answersCSV) formData.append("answersCSV", answersCSV);
    if (teachersCSV) formData.append("teachersCSV", teachersCSV);

    try {
      const response = await axios.post(UPLOAD_URL, formData);
      if (response.statusText === "Created") {
        enqueueSnackbar(translations.success, {
          action: (
            <ActionButton
              kind="success"
              onClick={() => {
                history.push(RoutesBuilder.public.surveysResult());
                closeSnackbar();
              }}
            >
              {translations.checkResults}
            </ActionButton>
          ),
          variant: "success",
          persist: true
        });
        return;
      }
    } catch (error) {
      if (error.code === "ERR_BAD_REQUEST") {
        const responseError = error.response.data.error;

        if (responseError?.code) {
          enqueueSnackbar(
            interpolateValues(translations[responseError?.code as "_knownErrorCode"], {
              ...responseError,
              missingFiles:
                (responseError.missingFiles || []).map(translateFilename).join(", ") ||
                translations.noFiles,
              extraFiles:
                (responseError.extraFiles || []).map(translateFilename).join(", ") ||
                translations.noFiles,
              missingColumns:
                (responseError.missingColumns || []).join(", ") || translations.noColumns,
              extraColumns: (responseError.extraColumns || []).join(", ") || translations.noColumns,
              field: translations[responseError.field as "semester" | "year"],
              file: translateFilename(responseError.file),
              error: JSON.stringify(responseError.error)
            }),
            {
              variant: "error",
              persist: true
            }
          );
          return;
        }
      }
    }

    enqueueSnackbar(translations.unknownError, { variant: "error" });
  };

  return (
    <Window>
      <Form title={translations.title}>
        <Formik initialValues={{ semester: "", year: "" }} onSubmit={onSubmit}>
          {({ values: { year, semester }, isSubmitting, errors }) => {
            return (
              <FormikForm id="csvUpload">
                <div className={styles.semesterYearContainer}>
                  <SelectField
                    disabled={isSubmitting}
                    fieldName="semester"
                    title={translations.semester}
                    options={["1", "2"].map(value => ({
                      value,
                      label: (translations as any)[value]
                    }))}
                  />
                  <PositiveIntegerField label="Año" name="year" />
                </div>
                <div className={styles.fileField}>
                  <label htmlFor="answersCSV">{translations.answersCSV}</label>
                  <input
                    id="answersCSV"
                    name="answersCSV"
                    type="file"
                    accept=".csv"
                    disabled={isSubmitting}
                    onChange={e => e.target.files && setAnswersCSV(e.target.files[0])}
                  />
                </div>
                <div className={styles.fileField}>
                  <label htmlFor="teachersCSV">{translations.teachersCSV}</label>
                  <input
                    id="teachersCSV"
                    name="teachersCSV"
                    type="file"
                    accept=".csv"
                    disabled={isSubmitting}
                    onChange={e => e.target.files && setTeachersCSV(e.target.files[0])}
                  />
                </div>
                <SubmitButton
                  className={styles.submitButton}
                  kind="primary"
                  disabled={!(answersCSV && teachersCSV && year && semester) || isSubmitting}
                  errors={errors}
                  type="submit"
                >
                  {translations?.title}
                </SubmitButton>
              </FormikForm>
            );
          }}
        </Formik>
      </Form>
    </Window>
  );
};

interface ITranslations {
  title: string;
  semester: string;
  1: string;
  2: string;
  year: string;
  answersCSV: string;
  teachersCSV: string;
  success: string;
  unknownError: string;
  checkResults: string;
  noFiles: string;
  noColumns: string;
  _knownErrorCode: string;
}
