import { useEffect, useState } from 'react';
import { GameState, GameStatus } from 'src/API';
import { useGameStateSubscription } from 'src/app/operations/gameState';
import { useQuestion } from 'src/app/operations/questions';
import { Flex, Heading, Stack, Spinner } from '@chakra-ui/react';
import { WaitingState } from './WaitingState';
import { Form } from './Form';
import { useRouter } from 'next/router';
import { useCreatePlayerMutation } from 'src/app/operations/players';

interface QuestionFormProps {
  initialGameState: GameState;
}

export function QuestionForm({ initialGameState }: QuestionFormProps) {
  const { push } = useRouter();
  const [isReady, setIsReady] = useState(false);
  const { makeRequest: createPlayer } = useCreatePlayerMutation();
  const gameState = useGameStateSubscription(initialGameState);

  const { data: question } = useQuestion(gameState.currentQuestionId, {
    pause: !gameState.currentQuestionId,
  });

  useEffect(() => {
    const registerUser = async () => {
      const userId = localStorage.getItem('userId');

      if (!userId) {
        const playerData = await createPlayer('test-name');

        localStorage.setItem('userId', playerData.createPlayer.id);
        localStorage.setItem('userName', playerData.createPlayer.name);
        setIsReady(true);
      } else {
        setIsReady(true);
      }
    };

    registerUser();
  }, [push, createPlayer]);

  if (!isReady) {
    return (
      <Flex
        flexDirection="column"
        width="100%"
        alignItems="center"
        padding="12"
        paddingTop={20}
        paddingBottom={20}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black"
          size="xl"
          marginTop={48}
        />
      </Flex>
    );
  }

  return (
    <Flex width="100%" padding="12" flexDirection="column">
      <Heading as="h1" textAlign="center">
        100 Cristianos Dicen
      </Heading>
      {gameState.currentState === GameStatus.COUNT_DOWN_INITIATED &&
        question && <Form question={question.getQuestion} />}
      {gameState.currentState !== GameStatus.COUNT_DOWN_INITIATED && (
        <WaitingState />
      )}
    </Flex>
  );
}
