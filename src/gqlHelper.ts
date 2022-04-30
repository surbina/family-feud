import { useEffect, useState, useCallback } from 'react';
import { API } from 'aws-amplify';
import { GraphQLResult, GraphQLOptions } from '@aws-amplify/api-graphql';
import Observable from 'zen-observable-ts';
// import { GraphQLSubscription, GraphQLResult } from '@aws-amplify/api';

export async function callGraphQL<T>(
  options: GraphQLOptions
): Promise<GraphQLResult<T>> {
  return (await API.graphql(options)) as GraphQLResult<T>;
}

export function subscribeToGraphQL<T>(options: GraphQLOptions) {
  return API.graphql(options) as unknown as Observable<T>;
}

export enum REQUEST_STATUS {
  INITIAL = 'INITIAL',
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export function getQueryHook<T, O>(
  operation: (options?: O) => Promise<GraphQLResult<T>>
) {
  return (options?: O, hookOptions: { pause?: boolean } = {}) => {
    const [state, setState] = useState<REQUEST_STATUS>(REQUEST_STATUS.INITIAL);
    const [data, setData] = useState<T | undefined>(undefined);

    const makeRequest = useCallback(async () => {
      setState(REQUEST_STATUS.FETCHING);
      setData(undefined);

      try {
        const result = await operation(options);
        setState(REQUEST_STATUS.SUCCESS);
        setData(result.data);
      } catch (e) {
        console.log('Error: ', e);
        setState(REQUEST_STATUS.ERROR);
      }
    }, [options]);

    const refetch = useCallback(() => makeRequest(), [makeRequest]);

    useEffect(() => {
      if (!hookOptions.pause) {
        makeRequest();
      }
    }, [makeRequest, hookOptions.pause]);

    return {
      state,
      data,
      refetch,
    };
  };
}

export function getMutationHook<T, O>(
  operation: (options?: O) => Promise<GraphQLResult<T>>
) {
  return () => {
    const [state, setState] = useState<REQUEST_STATUS>(REQUEST_STATUS.INITIAL);
    const [data, setData] = useState<T | undefined>(undefined);

    const makeRequest = async (options?: O) => {
      try {
        setState(REQUEST_STATUS.FETCHING);
        const result = await operation(options);
        setData(result.data);
        setState(REQUEST_STATUS.SUCCESS);

        return result.data;
      } catch (e) {
        console.log('Error: ', e);
        setState(REQUEST_STATUS.ERROR);
      }
    };

    return {
      state,
      data,
      makeRequest,
    };
  };
}
