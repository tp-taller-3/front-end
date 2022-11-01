import { useQuery } from "$hooks";
import { GET_SEMESTERS } from "../../../graphql/queries";
import { ISemester } from "../../../interfaces/Semester";

export const useSemesters = () => {
  return useQuery<{}, { getSemesters: ISemester[] }>(GET_SEMESTERS, {}).data?.getSemesters;
};
