import { Host } from 'src/app/host/Host';
import { GameState } from 'src/API';
import { getGameState } from 'src/app/operations/gameState';

interface HostPageProps {
  initialGameState: GameState;
}

export default function HostPage({ initialGameState }: HostPageProps) {
  return <Host initialGameState={initialGameState} />;
}

export async function getServerSideProps() {
  const response = await getGameState();

  return {
    props: {
      initialGameState: response.data.getGameState,
    },
  };
}
