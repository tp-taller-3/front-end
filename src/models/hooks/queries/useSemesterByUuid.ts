import { useQuery } from "$hooks";
import { useHistory } from "react-router-dom";
import { GET_SEMESTERS_BY_UUDI } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { ISemester } from "../../../interfaces/Semester";

export const useSemesterByUuid = (uuid: string) => {
  const history = useHistory();
  return useQuery<IVariables, IResponse>(GET_SEMESTERS_BY_UUDI, {
    variables: { uuid },
    errorHandlers: {
      AdminNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  })?.data?.getSemesterByUuid;
};

interface IVariables {
  uuid: string;
}

interface IResponse {
  getSemesterByUuid: ISemester;
}
