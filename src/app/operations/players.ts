import { createPlayer as createPlayerMutation } from 'src/graphql/mutations';
import { CreatePlayerMutation } from 'src/API';

import { callGraphQL, getMutationHook } from 'src/gqlHelper';

export function createPlayer(name: string) {
  return callGraphQL<CreatePlayerMutation>({
    query: createPlayerMutation,
    variables: {
      input: {
        name,
      },
    },
  });
}

export const useCreatePlayerMutation = getMutationHook(createPlayer);
