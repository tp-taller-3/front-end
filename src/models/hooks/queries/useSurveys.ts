import { usePaginatedQuery } from "$hooks";
import { GET_SURVEYS } from "$queries";
import { ISurvey } from "$interfaces/Survey";

export const useSurveys = () =>
  usePaginatedQuery<{}, ISurvey>({
    documentNode: GET_SURVEYS,
    queryName: "getSurveys",
    variables: {},
    timestampKey: "createdAt"
  });
