import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import {
  useGameStateSubscription,
  useResetGameStateMutation,
  useSelectQuestionMutation,
} from 'src/app/operations/gameState';
import { TEST_QUESTION_ID } from 'src/constants';

export function Admin() {
  const { makeRequest: resetGameState } = useResetGameStateMutation();
  const { makeRequest: selectQuestion } = useSelectQuestionMutation();
  const gameState = useGameStateSubscription();

  const handleReset = () => {
    resetGameState();
  };

  const handleSelectQuestion = () => {
    selectQuestion(TEST_QUESTION_ID);
  };

  return (
    <Box padding="8">
      <h2>Current status: {gameState?.currentState || 'UNDEFINED'}</h2>
      <Box>
        <Button
          onClick={handleReset}
          colorScheme="orange"
          color="black"
          border="4px"
          borderColor="black">
          Reset state
        </Button>
        <Button
          onClick={handleSelectQuestion}
          colorScheme="orange"
          color="black"
          border="4px"
          borderColor="black">
          Select question
        </Button>
      </Box>
    </Box>
  );
}
