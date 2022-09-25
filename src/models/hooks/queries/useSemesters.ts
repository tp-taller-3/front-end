import { useQuery } from "$hooks";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { GET_SEMESTERS } from "../../../graphql/queries";
import { ISemester } from "../../../interfaces/Semester";

export const useSemesters = () => {
  const history = useHistory();
  return useQuery<{}, { getSemesters: ISemester[] }>(GET_SEMESTERS, {
    errorHandlers: {
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  }).data?.getSemesters;
};
