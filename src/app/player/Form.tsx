import { useState, FormEvent } from 'react';
import { GetQuestionQuery } from 'src/API';
import {
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useAnswerQuestionMutation } from 'src/app/operations/questions';

interface FormProps {
  question: GetQuestionQuery['getQuestion'];
}

export function Form({ question }: FormProps) {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const { makeRequest: answerQuestion } = useAnswerQuestionMutation();
  const userId = localStorage.getItem('userId');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuestionAnswered(true);

    answerQuestion({
      playerId: userId,
      questionId: question.id,
      selectedOptionId: selectedAnswer,
    });
  };

  return (
    <Flex flexDirection="column">
      <Heading as="h2" color="blackAlpha.700" marginTop={8} marginBottom={8}>
        {question.publicQuestion}
      </Heading>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}>
        <RadioGroup
          onChange={setSelectedAnswer}
          value={selectedAnswer}
          marginBottom={4}>
          <Stack direction="column">
            {question.options.items.map(({ id, text }) => (
              <Radio
                key={id}
                value={id}
                isDisabled={questionAnswered}
                size="lg">
                {text}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
        <Button
          type="submit"
          marginTop="4"
          colorScheme="green"
          border="2px"
          borderColor="black"
          disabled={!selectedAnswer || questionAnswered}>
          Enviar respuesta
        </Button>
      </form>
    </Flex>
  );
}
