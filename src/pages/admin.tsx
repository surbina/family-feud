import { Admin } from 'src/app/admin/Admin';
import { GameState } from 'src/API';
import { getGameState } from 'src/app/operations/gameState';

interface AdminPageProps {
  initialGameState: GameState;
}

export default function AdminPage({ initialGameState }: AdminPageProps) {
  return <Admin initialGameState={initialGameState} />;
}

export async function getServerSideProps() {
  const response = await getGameState();

  return {
    props: {
      initialGameState: response.data.getGameState,
    },
  };
}
