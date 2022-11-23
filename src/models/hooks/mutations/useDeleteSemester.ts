import { DELETE_SEMESTER } from "$mutations";
import { IMutationOptions, useMutation } from "$hooks";
import { ISemester } from "../../../interfaces/Semester";

export const useDeleteSemester = () => {
  const { mutation, ...result } = useMutation<IUseDeleteSemesterInput, IResponseProps>(
    DELETE_SEMESTER
  );

  const deleteSemester = ({
    variables,
    ...options
  }: IMutationOptions<IResponseProps, IUseDeleteSemesterInput>) =>
    mutation({ variables, ...options });

  return { deleteSemester, ...result };
};

interface IResponseProps {
  deactivateAdminAccount: ISemester;
}

export interface IUseDeleteSemesterInput {
  uuid: string;
}
