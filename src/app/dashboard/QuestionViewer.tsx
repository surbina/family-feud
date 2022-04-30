import { GetQuestionQuery } from 'src/API';
import {
  Heading,
  Flex,
  ListItem,
  OrderedList,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';

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
  const questions = [...question.options.items].sort(
    ({ order: a }, { order: b }) => a - b
  );

  return (
    <Flex flexDirection="column" marginTop={8}>
      {timeRemaining > 0 && (
        <Text
          fontSize="4xl"
          alignSelf="center"
          color={
            timeRemaining <= 5
              ? 'red.700'
              : timeRemaining <= 10
              ? 'orange'
              : 'black'
          }>
          Tiempo restante: {timeRemaining}
        </Text>
      )}
      <Heading as="h2" color="blackAlpha.700" fontSize={64} textAlign="center">
        {question.publicQuestion}
      </Heading>
      <Grid
        gridTemplateColumns="auto auto"
        justifyContent="center"
        rowGap={6}
        columnGap={10}>
        {questions.map(({ id, text }, index) => (
          <Text key={id} fontSize={38}>
            {`${index + 1}. ${text}`}
            {revealResults && `: ${questionResults[id] || 0}`}
          </Text>
        ))}
      </Grid>
    </Flex>
  );
}
