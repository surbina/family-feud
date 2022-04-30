import { GameState, GameStatus } from 'src/API';
import { useGameStateSubscription } from 'src/app/operations/gameState';
import { Flex } from '@chakra-ui/react';
import { QuestionsTable } from './QuestionsTable';

interface HostProps {
  initialGameState: GameState;
}

export function Host({ initialGameState }: HostProps) {
  const gameState = useGameStateSubscription(initialGameState);

  return (
    <Flex flexDirection="column" width="100%">
      <QuestionsTable gameState={gameState} />
    </Flex>
  );
}
