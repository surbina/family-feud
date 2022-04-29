import { callGraphQL } from 'src/gqlHelper';
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
