import { GetQuestionQuery } from 'src/API';
import { Heading, Flex, ListItem, OrderedList, Text } from '@chakra-ui/react';

interface QuestionViewerProps {
  question: GetQuestionQuery['getQuestion'];
  questionResults: Record<string, number>;
  revealResults: boolean;
  timeRemaining?: number;
}

export function QuestionViewer({
  question,
  timeRemaining,
  revealResults,
  questionResults,
}: QuestionViewerProps) {
  return (
    <Flex flexDirection="column" marginTop={8}>
      <Text
        fontSize="5xl"
        alignSelf="center"
        color={
          timeRemaining <= 5
            ? 'red.700'
            : timeRemaining <= 10
            ? 'orange'
            : 'black'
        }>
        Tiempo restante: {timeRemaining !== undefined ? timeRemaining : '-'}
      </Text>
      <Heading as="h2" color="blackAlpha.700" fontSize={72}>
        {question.publicQuestion}
      </Heading>
      <OrderedList spacing={3} fontSize={46} alignSelf="center" marginTop={8}>
        {question.options.items.map(({ id, text }) => (
          <ListItem key={id}>
            {text}
            {revealResults && `: ${questionResults[id]}`}
          </ListItem>
        ))}
      </OrderedList>
    </Flex>
  );
}
