import { useEffect, useState } from 'react';
import {
  callGraphQL,
  getMutationHook,
  subscribeToGraphQL,
} from 'src/gqlHelper';
import {
  GameStatus,
  UpdateGameStateMutation,
  GameState,
  OnUpdateGameStateSubscription,
  GetGameStateQuery,
} from 'src/API';
import { getGameState as getGameStateQuery } from 'src/graphql/queries';
import { updateGameState } from 'src/graphql/mutations';
import { GAME_STATUS_ID } from 'src/constants';
import { onUpdateGameState } from 'src/graphql/subscriptions';
import { GraphQLResult } from '@aws-amplify/api-graphql';

export function resetGameState() {
  return callGraphQL<UpdateGameStateMutation>({
    query: updateGameState,
    variables: {
      input: {
        id: GAME_STATUS_ID,
        currentState: GameStatus.INITIAL,
        currentQuestionId: null,
        targetTimerEnd: null,
      },
    },
  });
}

export function selectQuestion(questionId: string) {
  return callGraphQL<UpdateGameStateMutation>({
    query: updateGameState,
    variables: {
      input: {
        id: GAME_STATUS_ID,
        currentState: GameStatus.NEW_QUESTION,
        currentQuestionId: questionId,
        targetTimerEnd: null,
      },
    },
  });
}

export function starTimer(targetTimerEnd: string) {
  return callGraphQL<UpdateGameStateMutation>({
    query: updateGameState,
    variables: {
      input: {
        id: GAME_STATUS_ID,
        currentState: GameStatus.COUNT_DOWN_INITIATED,
        targetTimerEnd,
      },
    },
  });
}

export function stopTimer() {
  return callGraphQL<UpdateGameStateMutation>({
    query: updateGameState,
    variables: {
      input: {
        id: GAME_STATUS_ID,
        currentState: GameStatus.COUNT_DOWN_STOPPED,
      },
    },
  });
}

export function revealedAnswers() {
  return callGraphQL<UpdateGameStateMutation>({
    query: updateGameState,
    variables: {
      input: {
        id: GAME_STATUS_ID,
        currentState: GameStatus.ANSWERS_REVEALED,
      },
    },
  });
}

export const useResetGameStateMutation = getMutationHook(resetGameState);
export const useSelectQuestionMutation = getMutationHook(selectQuestion);
export const useStartTimerMutation = getMutationHook(starTimer);
export const useStopTimerMutation = getMutationHook(stopTimer);
export const useRevealAnswersMutation = getMutationHook(revealedAnswers);

export function getGameStateSubscription() {
  return subscribeToGraphQL({
    query: onUpdateGameState,
  });
}

export const gameStateObserver = getGameStateSubscription();

export const useGameStateSubscription = (
  initialState: GameState
): GameState => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  useEffect(() => {
    const subscription = gameStateObserver.subscribe({
      next: (nextValue: {
        value: GraphQLResult<OnUpdateGameStateSubscription>;
      }) => {
        const val = nextValue.value.data.onUpdateGameState;
        setGameState(val);
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  return gameState;
};

export function getGameState() {
  return callGraphQL<GetGameStateQuery>({
    query: getGameStateQuery,
    variables: {
      id: GAME_STATUS_ID,
    },
  });
}
