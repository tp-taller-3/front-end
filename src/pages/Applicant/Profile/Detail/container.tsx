import React, { FunctionComponent } from "react";
import { getTranslations } from "$queries";
import { GET_APPLICANT } from "$queries";
import { Detail } from "./component";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import NotFound from "$pages/NotFound";

const DetailContainer: FunctionComponent = () => {
  const { data: translationsData } = useQuery(getTranslations, {
    variables: {
      paths: [
        "applicant.padron",
        "applicant.capabilities"
      ]
    }
  }
  );

  const [
    padronTranslation,
    capabilitiesTranslation
  ] = translationsData ? translationsData.getTranslations : ["", ""];

  const { id: uuid } = useParams();
  const { data: applicantData, error: applicantError } = useQuery(GET_APPLICANT, {
    variables: { uuid }
  }
  );

  if (applicantError) return (<NotFound />);

  const applicant = applicantData ? applicantData.getApplicant : {
    applicant: {
      name: "",
      surname: "",
      padron: 0,
      description: "",
      capabilities: [],
      careers: []
    }
  };

  return (
    <Detail
      applicant={applicant}
      translations={
        {
          padron: padronTranslation,
          capabilities: capabilitiesTranslation
        }
      }
    />
  );
};

export { DetailContainer };
