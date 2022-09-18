import { SAVE_SURVEY } from "$mutations";
import { useMutation } from "$hooks";
import { ISurvey } from "$interfaces/Survey";

export const useSaveSurvey = () => {
  const { mutation, ...result } = useMutation<ISaveSurvey, { saveSurvey: ISurvey }>(SAVE_SURVEY);
  return { saveSurvey: mutation, ...result };
};

export interface ISaveSurvey {
  uuid?: string;
  name: string;
}
