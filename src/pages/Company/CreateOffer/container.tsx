import React, { FunctionComponent } from "react";
import { CreateOffer } from "./component";
import { useCreateOffer, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { Redirect, useHistory } from "react-router-dom";
import { ICreateOfferTranslations } from "./interface";
import { LoadingSpinner } from "$components/LoadingSpinner";

export const CreateOfferContainer: FunctionComponent = () => {
  const history = useHistory();
  const createOffer = useCreateOffer();
  const translations = useTranslations<ICreateOfferTranslations>("createOffer");

  if (translations.loading) return <LoadingSpinner/>;
  if (translations.error) return <Redirect to={RoutesBuilder.internalServerError}/>;

  return <CreateOffer
    onSubmit={async values => {
      const response = await createOffer({
        variables: values,
        handlers: {
          defaultHandler: () => history.push(RoutesBuilder.internalServerError)
        }
      });
      if (response.error) return;
      history.push(RoutesBuilder.applicant.offerDetail(response.data.createOffer.uuid));
    }}
    translations={translations.data}
  />;
};
