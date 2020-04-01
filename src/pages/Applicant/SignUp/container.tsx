import React, { FunctionComponent } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GET_CAREERS, getTranslations } from "$queries";
import { SignUp } from "./component";
import SignUpTranslations from "./translations";

import Loading from "$pages/Loading";
import { RoutesBuilder } from "../../../routesBuilder";
import { SAVE_APPLICANT, SIGN_UP } from "../../../graphql/mutations";
import { useHistory } from "react-router-dom";
import { pick } from "lodash";

const translationsMapper = (translations: string[] = Array(10).fill("")) => {
  const [
    title,
    email,
    password,
    name,
    surname,
    padron,
    careersTitle,
    submit
  ] = translations;

  return {
    title,
    email,
    password,
    name,
    surname,
    padron,
    careersTitle,
    submit
  };
};

const signUpParams = (values: any) => pick(values, ["email", "password"]);

const saveApplicantParams = (values: any) => pick(values, ["name", "surname", "padron", "careers"]);

const SignUpContainer: FunctionComponent = () => {
  const history = useHistory();
  const [signUp] = useMutation(SIGN_UP);
  const [saveApplicant] = useMutation(SAVE_APPLICANT);

  const { data: translationsData, loading } = useQuery(getTranslations, {
      variables: {
        paths: SignUpTranslations
      }
    }
  );

  const { data, loading: loadingCareers } = useQuery(GET_CAREERS);

  if (loading || loadingCareers) return <Loading/>;

  const translations = translationsMapper(translationsData.getTranslations);

  return (
    <SignUp
      translations={translations}
      validate={values => {
        const selectedCodes = values.careers.map(career => career.code);

        if (new Set(selectedCodes).size !== selectedCodes.length) return "No se pueden repetir carreras";
        if (selectedCodes.length === 0) return "Debes elegir como mínimo una carrera";
      }}
      careers={data.getCareers}
      onSubmit={async (values, { setSubmitting }) => {
        await signUp({
          variables: signUpParams(values)
        });
        const { data: { saveApplicant: applicant } } = await saveApplicant({
          variables: saveApplicantParams(values)
        });
        setSubmitting(false);
        history.push(RoutesBuilder.applicant.detail(applicant.uuid));
      }}
    />
  );
};

export { SignUpContainer };
