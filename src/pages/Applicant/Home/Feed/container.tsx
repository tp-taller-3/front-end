import React, { FunctionComponent } from "react";
import { Feed } from "./component";
import { GET_OFFERS } from "$queries";
import { IOffer } from "$interfaces/Offer";
import { useQuery } from "@apollo/react-hooks";
import { LoadingSpinner } from "$components/LoadingSpinner";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";

const FeedContainer: FunctionComponent = () => {
  const history = useHistory();

  const {
    data: { getOffers: offers } = { getOffers: {} as IOffer[] },
    error: offerError,
    loading: loadingOffer
  } = useQuery(GET_OFFERS);

  if (offerError) history.push(RoutesBuilder.notFound);
  if (loadingOffer) return <LoadingSpinner/>;

  return (
    <Feed
      offers={offers}
      onCardClick={(uuid: string) => history.push(RoutesBuilder.applicant.offerDetail(uuid))}
    />
  );
};

export { FeedContainer };