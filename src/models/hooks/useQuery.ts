import { useState } from "react";
import { useQuery as apolloUseQuery } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { QueryHookOptions } from "@apollo/react-hooks/lib/types";
import { ErrorHandlers, handleError } from "$models/handleError";
import { ApolloError } from "apollo-client";
import { ApolloQueryResult } from "apollo-client/core/types";
import { QueryResult } from "@apollo/react-common";

export type UseQueryResult<TVariables, TData> =
  QueryResult<TData, TVariables> &
  (ILoadingQuery | IErroredQuery | ISuccessfulQuery<TVariables, TData>);

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
  const [alreadyHandledError, setAlreadyHandledError] = useState(false);
  const { errorHandlers, ...apolloOptions } = options || { errorHandlers: {} };
  const {
    data, error, loading, refetch, fetchMore
  } = apolloUseQuery<TData, TVariables>(node, apolloOptions);
  if (error && !alreadyHandledError) {
    handleError(error, errorHandlers);
    setAlreadyHandledError(true);
  }

  return { data, error, loading, refetch, fetchMore } as UseQueryResult<TVariables, TData>;
};

interface IQueryOptions<TData, TVariables> extends QueryHookOptions<TData, TVariables> {
  errorHandlers?: ErrorHandlers;
}
