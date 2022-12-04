import { usePaginatedQuery } from "$hooks";
import { GET_SEMESTERS_PAGINATED } from "$queries";
import { ISemester } from "../../../interfaces/Semester";

export const usePaginatedSemester = () =>
  usePaginatedQuery<{}, ISemester>({
    documentNode: GET_SEMESTERS_PAGINATED,
    queryName: "getSemestersPaginated",
    variables: {},
    fetchPolicy: "network-only",
    timestampKey: "createdAt"
  });
