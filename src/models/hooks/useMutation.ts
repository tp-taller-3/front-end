import {
  ApolloError,
  MutationFunctionOptions,
  MutationHookOptions,
  MutationResult,
  useMutation as apolloUseMutation
} from "@apollo/client";
import { DocumentNode } from "graphql";
import { ErrorHandlers, handleError } from "$models/handleError";
import { omitTypename } from "$models/omitTypename";

export const useMutation = <TVariables extends object = {}, TData extends object = {}>(
  mutation: DocumentNode,
  mutationHookOptions?: MutationHookOptions<TData, TVariables>
): MutationFunctionResult<TData, TVariables> => {
  const [mutationFunction] = apolloUseMutation(
    mutation,
    mutationHookOptions
  ) as MutationTuple<TData, TVariables>;

  return async (
    options?: IMutationOptions<TData, TVariables>
  ): Promise<UseMutationResult<TData>> => {
    try {
      const { variables, errorHandlers, ...otherOptions } = options || { variables: {} };
      return await mutationFunction({ variables: omitTypename(variables), ...otherOptions });
    } catch (error) {
      handleError(error, options?.errorHandlers || {});
      return { error, data: undefined };
    }
  };
};

export type UseMutationResult<T> = IErroredMutation | ISuccessfulMutation<T>;

type IErroredMutation = {
  data: undefined;
  error: ApolloError;
};

type ISuccessfulMutation<T> = {
  data: T;
  error: undefined;
};

export interface IMutationOptions<TData, TVariables>
  extends MutationFunctionOptions<TData, TVariables> {
  errorHandlers?: ErrorHandlers;
}

type MutationFunctionResult<TData, TVariables> = (
  options?: IMutationOptions<TData, TVariables>
) => Promise<UseMutationResult<TData>>;

type MutationFunction<TData, TVariables> =
  (options?: MutationFunctionOptions<TData, TVariables>) => Promise<UseMutationResult<TData>>;

type MutationTuple<TData, TVariables> = [
  MutationFunction<TData, TVariables>,
  MutationResult<TData>
];
