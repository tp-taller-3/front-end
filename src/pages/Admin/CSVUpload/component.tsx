import React, { FunctionComponent, useState } from "react";
import { Window } from "$components/Window";
import { Formik } from "formik";
import { Form } from "$components/Form";
import { FormikForm } from "$components/FormikForm";
import { PositiveIntegerField, SelectField } from "$components/Fields";
import { SubmitButton } from "$components/SubmitButton";
import { Configuration } from "../../../config";
import axios from "axios";
import { useTranslations } from "../../../models/hooks";

const BASE_URL = Configuration.application_base_url.slice(
  0,
  Configuration.application_base_url.lastIndexOf("/")
);
const UPLOAD_URL = `${BASE_URL}/csv-upload`;

export const CSVUpload: FunctionComponent = () => {
  const translations = useTranslations<ITranslations>("csvUpload");

  const [answersCSV, setAnswersCSV] = useState<File | null>(null);
  const [teachersCSV, setTeachersCSV] = useState<File | null>(null);

  const onSubmit = async ({ semester, year }: { semester: string; year: string }) => {
    const formData = new FormData();
    formData.append("semester", semester);
    formData.append("year", year);
    if (answersCSV) formData.append("answersCSV", answersCSV);
    if (teachersCSV) formData.append("teachersCSV", teachersCSV);

    try {
      const response = await axios.post(UPLOAD_URL, formData);
      // tslint:disable-next-line:no-console
      console.log(response);
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(error);
    }
  };

  if (!translations) return <Window />;

  return (
    <Window>
      <Form title={translations.title}>
        <Formik initialValues={{ semester: "", year: "" }} onSubmit={onSubmit}>
          {({ values: { year, semester }, isSubmitting, errors }) => {
            // tslint:disable-next-line:no-console
            console.log({ answersCSV, teachersCSV, year, semester });
            return (
              <FormikForm id="csvUpload">
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
                <div>
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
                <div>
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
}
