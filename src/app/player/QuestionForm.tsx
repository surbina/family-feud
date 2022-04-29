import { useEffect } from 'react';
import { GameState, GameStatus } from 'src/API';
import { useGameStateSubscription } from 'src/app/operations/gameState';
import { useQuestion } from 'src/app/operations/questions';
import { Flex, Heading } from '@chakra-ui/react';
import { WaitingState } from './WaitingState';
import { Form } from './Form';
import { useRouter } from 'next/router';

interface QuestionFormProps {
  initialGameState: GameState;
}

export function QuestionForm({ initialGameState }: QuestionFormProps) {
  const { push } = useRouter();
  const gameState = useGameStateSubscription(initialGameState);

  const { data: question } = useQuestion(gameState.currentQuestionId, {
    pause: !gameState.currentQuestionId,
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      push('/');
    }
  }, [push]);

  return (
    <Flex width="100%" padding="12" flexDirection="column">
      <Heading as="h1">100 Cristianos Dicen</Heading>
      {gameState.currentState === GameStatus.COUNT_DOWN_INITIATED &&
        question && <Form question={question.getQuestion} />}
      {gameState.currentState !== GameStatus.COUNT_DOWN_INITIATED && (
        <WaitingState />
      )}
    </Flex>
  );
}
