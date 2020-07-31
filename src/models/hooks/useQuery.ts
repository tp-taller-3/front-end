import { useEffect } from "react";
import { useQuery as apolloUseQuery } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { QueryHookOptions } from "@apollo/react-hooks/lib/types";
import { ErrorHandlers, handleError } from "$models/handleError";
import { ApolloError } from "apollo-client";
import { ApolloQueryResult } from "apollo-client/core/types";

export type UseQueryResult<TVariables, TData> =
  ILoadingQuery | IErroredQuery | ISuccessfulQuery<TVariables, TData>;

type ILoadingQuery = {
  data: undefined;
  refetch: undefined;
  error: undefined;
  loading: true;
};

type IErroredQuery = {
  data: undefined;
  refetch: undefined;
  error: ApolloError;
  loading: false;
};

type ISuccessfulQuery<TVariables, TData> = {
  data: TData;
  refetch: (variables: TVariables) => Promise<ApolloQueryResult<TData>>;
  error: undefined;
  loading: false;
};

export const useQuery = <TVariables = {}, TData = {}>(
  node: DocumentNode,
  options?: IQueryOptions<TData, TVariables>
) => {
  const { errorHandlers, ...apolloOptions } = options || { errorHandlers: {} };
  const { data, error, loading, refetch } = apolloUseQuery<TData, TVariables>(node, apolloOptions);
  useEffect(
    () => {
      if (error) handleError(error, errorHandlers);
    },
    [error, errorHandlers]
  );

  return { data, error, loading, refetch } as UseQueryResult<TVariables, TData>;
};

interface IQueryOptions<TData, TVariables> extends QueryHookOptions<TData, TVariables> {
  errorHandlers?: ErrorHandlers;
}
