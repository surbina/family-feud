import { GameState } from 'src/API';
import { getGameState } from 'src/app/operations/gameState';
import { QuestionForm } from 'src/app/player/QuestionForm';

interface PlayerProps {
  initialGameState: GameState;
}

export default function Player({ initialGameState }: PlayerProps) {
  return <QuestionForm initialGameState={initialGameState} />;
}

export async function getServerSideProps(): Promise<{ props: PlayerProps }> {
  const response = await getGameState();

  return {
    props: {
      initialGameState: response.data.getGameState,
    },
  };
}
