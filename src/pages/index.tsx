import { GameState } from 'src/API';
import { getGameState } from 'src/app/operations/gameState';
import { QuestionForm } from 'src/app/player/QuestionForm';

interface LoginProps {
  initialGameState: GameState;
}

export default function Login({ initialGameState }: LoginProps) {
  return <QuestionForm initialGameState={initialGameState} />;
}

export async function getServerSideProps(): Promise<{ props: LoginProps }> {
  const response = await getGameState();

  return {
    props: {
      initialGameState: response.data.getGameState,
    },
  };
}
