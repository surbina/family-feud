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
  Text,
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
    <TableContainer
      backgroundColor="white"
      color="GrayText"
      whiteSpace="initial"
      overflowY="auto">
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Acción</Th>
            <Th>Pregunta</Th>
          </Tr>
        </Thead>
        <Tbody>
          {questions.listQuestions.items.map((q, index) => (
            <Tr
              key={q.id}
              backgroundColor={
                localStorage.getItem(q.id) === 'true' ? 'pink' : 'white'
              }>
              <Td>
                <Button
                  onClick={() => {
                    selectQuestion(q.id);
                    localStorage.setItem(q.id, 'true');
                  }}
                  colorScheme="blue"
                  disabled={
                    ![GameStatus.INITIAL, GameStatus.ANSWERS_REVEALED].includes(
                      currentState
                    ) || localStorage.getItem(q.id) === 'true'
                  }>
                  Seleccionar
                </Button>
              </Td>
              <Td>
                <Text fontSize={16}>
                  {index + 1}. {q.publicQuestion}
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
