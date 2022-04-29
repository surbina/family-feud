import { useQuestions } from 'src/app/operations/questions';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Spinner,
} from '@chakra-ui/react';
import { REQUEST_STATUS } from 'src/gqlHelper';
import { useSelectQuestionMutation } from 'src/app/operations/gameState';
import { GameState, GameStatus } from 'src/API';

interface QuestionsTableProps {
  gameState: GameState;
}

export function QuestionsTable({
  gameState: { currentState },
}: QuestionsTableProps) {
  const { data: questions, state } = useQuestions();
  const { makeRequest: selectQuestion } = useSelectQuestionMutation();

  if ([REQUEST_STATUS.FETCHING, REQUEST_STATUS.INITIAL].includes(state)) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  if (state === REQUEST_STATUS.ERROR) {
    return <div>Error loading questions!!!</div>;
  }

  return (
    <TableContainer backgroundColor="white" color="GrayText" width="2xl">
      <Table>
        <Thead>
          <Tr>
            <Th>Question</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {questions.listQuestions.items.map((q) => (
            <Tr key={q.id}>
              <Td>{q.publicQuestion}</Td>
              <Td>
                <Button
                  onClick={() => selectQuestion(q.id)}
                  colorScheme="blue"
                  disabled={
                    ![GameStatus.INITIAL, GameStatus.ANSWERS_REVEALED].includes(
                      currentState
                    )
                  }>
                  2. Select question
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
