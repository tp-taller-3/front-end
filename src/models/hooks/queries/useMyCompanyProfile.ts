import { useBasicQuery } from "$hooks";
import { GET_MY_COMPANY_PROFILE } from "$queries";
import { ICompany } from "$interfaces/Company";
import { RoutesBuilder } from "../../RoutesBuilder";
import { useHistory } from "react-router-dom";

export const useMyCompanyProfile = () => {
  const history = useHistory();
  return useBasicQuery<{}, { getCurrentUser: { company: ICompany } }>({
    query: GET_MY_COMPANY_PROFILE,
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.getCurrentUser.company;
};
