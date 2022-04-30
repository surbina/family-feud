import { callGraphQL, getQueryHook } from 'src/gqlHelper';
import { listResponses } from 'src/graphql/queries';
import { ListResponsesQuery } from 'src/API';

export function getAllResponses() {
  return callGraphQL<ListResponsesQuery>({
    query: listResponses,
    variables: {
      limit: 100,
    },
  });
}

export function getQuestionResponses(questionId: string) {
  return callGraphQL<ListResponsesQuery>({
    query: listResponses,
    variables: {
      limit: 300,
      filter: {
        questionId: {
          eq: questionId,
        },
      },
    },
  });
}

export const useQuestionResponses = getQueryHook(getQuestionResponses);
