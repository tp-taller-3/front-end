import { useQuery } from "$hooks";
import { GET_COURSES } from "$queries";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { useHistory } from "react-router-dom";
import { ICourses } from "../../../interfaces/Courses";

export const useCourses = (departmentUuid: string) => {
  const history = useHistory();
  return useQuery<{}, { getCourses: ICourses[] }>(GET_COURSES, {
    variables: { departmentUuid },
    errorHandlers: {
      JobApplicationNotFoundError: () => history.push(RoutesBuilder.public.notFound()),
      defaultHandler: () => history.push(RoutesBuilder.public.internalServerError())
    }
  }).data?.getCourses;
};
