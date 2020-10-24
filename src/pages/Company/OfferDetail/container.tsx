import React, { FunctionComponent } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useCompanyOfferByUuid, useTranslations } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { OfferDetail } from "$components/OfferDetail";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { Window } from "$components/Window";
import { Button } from "$components/Button";

export const OfferDetailContainer: FunctionComponent = () => {
  const history = useHistory();
  const { uuid } = useParams();
  const response = useCompanyOfferByUuid(uuid);
  const translations = useTranslations<ITranslations>("offerDetail");
  const offer = response.data?.getOfferByUuid;

  return (
    <Window>
      {response && translations && offer ? (
        <OfferDetail
          editButton={
            <Button
              kind={"primary"}
              onClick={() => history.push(RoutesBuilder.company.editOffer(offer.uuid))}
            >
              {translations.edit}
            </Button>
          }
          goToCompany={RoutesBuilder.company.myProfile()}
          offer={offer}
          withStatusLabel
        />
      ) : (
        <LoadingSpinner />
      )}
    </Window>
  );
};

interface ITranslations {
  edit: string;
}
