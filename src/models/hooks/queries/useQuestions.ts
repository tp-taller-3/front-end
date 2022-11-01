import { useQuery } from "$hooks";
import { GET_QUESTIONS } from "$queries";
import { IQuestion } from "../../../interfaces/Question";

export const useQuestions = (courseUuid: string) => {
  return useQuery<{}, { getQuestions: IQuestion[] }>(GET_QUESTIONS, {
    variables: { courseUuid }
  }).data?.getQuestions;
};
