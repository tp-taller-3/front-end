import { useQuery } from "$hooks";
import { GET_SEMESTER_STATISTICS } from "$queries";

export const useSemesterStatistics = (uuid: string) => {
  return useQuery<{}, { getSemesterStatistics: ISemesterStatistics }>(GET_SEMESTER_STATISTICS, {
    variables: { uuid }
  }).data?.getSemesterStatistics;
};

export interface ISemesterStatistics {
  courseCount: number;
}
