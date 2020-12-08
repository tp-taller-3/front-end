import { useBasicQuery } from "$hooks";
import { GET_CAREERS } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ICareer } from "$interfaces/Career";

export const useCareers = () => {
  const history = useHistory();
  return useBasicQuery<{}, { getCareers: ICareer[] }>({
    query: GET_CAREERS,
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.getCareers;
};
