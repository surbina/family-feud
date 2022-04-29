import { callGraphQL, getQueryHook } from 'src/gqlHelper';
import { GAME_STATUS_ID } from 'src/constants';
import { getGameState as getGameStateQuery } from 'src/graphql/queries';
import { GetGameStateQuery } from 'src/API';

export function getGameState() {
  return callGraphQL<GetGameStateQuery>({
    query: getGameStateQuery,
    variables: {
      id: GAME_STATUS_ID,
    },
  });
}

export const useGameState = getQueryHook(getGameState);
