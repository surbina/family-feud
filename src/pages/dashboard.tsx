import { GameState } from 'src/API';
import { getGameState } from 'src/app/operations/gameState';
import { Dashboard } from 'src/app/dashboard/Dashboard';

interface DashboardPageProps {
  initialGameState: GameState;
}

export default function DashboardPage({
  initialGameState,
}: DashboardPageProps) {
  return <Dashboard initialGameState={initialGameState} />;
}

export async function getServerSideProps() {
  const response = await getGameState();

  return {
    props: {
      initialGameState: response.data.getGameState,
    },
  };
}
