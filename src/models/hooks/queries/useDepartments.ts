import { useQuery } from "$hooks";
import { GET_DEPARTMENTS } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { IDepartment } from "../../../interfaces/Department";

export const useDepartments = (semesterUuid: string) => {
  const history = useHistory();
  return useQuery<{}, { getDepartments: IDepartment[] }>(GET_DEPARTMENTS, {
    variables: { semesterUuid },
    errorHandlers: {
      JobApplicationNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  }).data?.getDepartments;
};
