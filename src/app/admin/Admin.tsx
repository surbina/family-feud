import { Box } from '@chakra-ui/react';
import {
  Button,
  Heading,
  VStack,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import {
  useGameStateSubscription,
  useResetGameStateMutation,
  useStartTimerMutation,
  useStopTimerMutation,
  useRevealAnswersMutation,
} from 'src/app/operations/gameState';
import { GameState, GameStatus } from 'src/API';
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';
import { QuestionsTable } from './QuestionsTable';

dayjs.locale('es-mx');

interface AdminProps {
  initialGameState: GameState;
}

export function Admin({ initialGameState }: AdminProps) {
  const gameState = useGameStateSubscription(initialGameState);
  const { makeRequest: resetGameState } = useResetGameStateMutation();
  const { makeRequest: startTimer } = useStartTimerMutation();
  const { makeRequest: stopTimer } = useStopTimerMutation();
  const { makeRequest: revealAnswers } = useRevealAnswersMutation();

  const handleStartTimer = async () => {
    await startTimer(dayjs().add(20, 'millisecond').toISOString());

    setTimeout(() => {
      stopTimer();
    }, 20000);
  };

  return (
    <Box padding="8" overflowY="auto" width="100%">
      <Heading as="h1" marginTop={2}>
        Current State:{' '}
        <Text as="span" color="black">
          {gameState?.currentState || 'UNDEFINED'}
        </Text>
      </Heading>

      <Grid templateColumns="auto 1fr" gap={6} marginTop={8}>
        <GridItem>
          <VStack>
            <Button
              onClick={resetGameState}
              colorScheme="orange"
              color="black"
              border="4px"
              borderColor="black"
              width={200}
              disabled={gameState.currentState !== GameStatus.ANSWERS_REVEALED}>
              1. Reset state
            </Button>
            <Button
              onClick={handleStartTimer}
              colorScheme="orange"
              color="black"
              border="4px"
              borderColor="black"
              width={200}
              disabled={gameState.currentState !== GameStatus.NEW_QUESTION}>
              3. Start timer
            </Button>
            <Button
              onClick={revealAnswers}
              colorScheme="orange"
              color="black"
              border="4px"
              borderColor="black"
              width={200}
              disabled={
                gameState.currentState !== GameStatus.COUNT_DOWN_STOPPED
              }>
              4. Reveal Answers
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <QuestionsTable gameState={gameState} />
        </GridItem>
      </Grid>
    </Box>
  );
}
