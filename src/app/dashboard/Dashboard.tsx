import { GameState, GameStatus, ListResponsesQuery } from 'src/API';
import { Heading, Flex, Text, Spinner } from '@chakra-ui/react';
import { useGameStateSubscription } from 'src/app/operations/gameState';
import { useQuestion } from 'src/app/operations/questions';
import { useQuestionResponses } from 'src/app/operations/responses';
import { useTimer } from 'src/app/useTimer';

import { WaitingState } from './WaitingState';
import { QuestionViewer } from './QuestionViewer';
import { useEffect } from 'react';

interface DashboardProps {
  initialGameState: GameState;
}

function getQuestionResults(
  questionResponses?: ListResponsesQuery['listResponses']
): Record<string, number> {
  if (!questionResponses) {
    return {};
  }

  const results = questionResponses.items.reduce(
    (acc, { selectedOptionId }) => ({
      ...acc,
      [selectedOptionId]: (acc[selectedOptionId] || 0) + 1,
    }),
    {}
  );

  return results;
}

export function Dashboard({ initialGameState }: DashboardProps) {
  const gameState = useGameStateSubscription(initialGameState);
  const { startTimer, timeRemaining } = useTimer();

  const { data: question } = useQuestion(gameState.currentQuestionId, {
    pause: !gameState.currentQuestionId,
  });

  const { data: questionResponses } = useQuestionResponses(
    question?.getQuestion.id,
    {
      pause:
        !question?.getQuestion.id ||
        gameState.currentState !== GameStatus.COUNT_DOWN_STOPPED,
    }
  );

  useEffect(() => {
    if (gameState.currentState === GameStatus.COUNT_DOWN_INITIATED) {
      startTimer(31);
    }
  }, [gameState.currentState]); // eslint-disable-line react-hooks/exhaustive-deps

  const questionResults = getQuestionResults(questionResponses?.listResponses);

  return (
    <Flex
      flexDirection="column"
      width="100%"
      alignItems="center"
      padding="12"
      paddingTop={20}
      paddingBottom={20}>
      <Text color="blackAlpha.700" fontSize={18}>
        https://100cristianosdicen.com
      </Text>
      <Heading as="h1" marginTop={8}>
        100 Cristianos Dicen
      </Heading>
      {gameState.currentState === GameStatus.INITIAL && <WaitingState />}
      {gameState.currentState !== GameStatus.INITIAL && question && (
        <QuestionViewer
          question={question.getQuestion}
          revealResults={gameState.currentState === GameStatus.ANSWERS_REVEALED}
          timeRemaining={timeRemaining || 0}
          questionResults={questionResults}
        />
      )}
      {gameState.currentState !== GameStatus.INITIAL && !question && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black"
          size="xl"
          marginTop={48}
        />
      )}
    </Flex>
  );
}
