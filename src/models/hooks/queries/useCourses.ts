import { useQuery } from "$hooks";
import { GET_COURSES } from "$queries";
import { ICourses } from "../../../interfaces/Courses";

export const useCourses = (semesterUuid: string) => {
  return useQuery<{}, { getCourses: ICourses[] }>(GET_COURSES, {
    variables: { semesterUuid }
  }).data?.getCourses;
};
