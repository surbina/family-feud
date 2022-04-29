import {
  createQuestion as createQuestionMutation,
  createOption,
  createResponse,
} from 'src/graphql/mutations';
import { getQuestion, listQuestions } from 'src/graphql/queries';

import {
  CreateQuestionMutation,
  CreateOptionMutation,
  CreateResponseMutation,
  GetQuestionQuery,
  ListQuestionsQuery,
} from 'src/API';

import { callGraphQL, getMutationHook, getQueryHook } from 'src/gqlHelper';

interface Question {
  publicQuestion: string;
  personalQuestion: string;
  options: Array<string>;
}

export async function createQuestion({
  publicQuestion,
  personalQuestion,
  options,
}: Question) {
  // Create the question to get the id
  const result = await callGraphQL<CreateQuestionMutation>({
    query: createQuestionMutation,
    variables: {
      input: {
        publicQuestion,
        personalQuestion,
      },
    },
  });

  const questionId = result.data?.createQuestion.id;

  if (!questionId) {
    throw new Error('No question id!');
  }

  const optionsResponses = options.map((text, order) =>
    callGraphQL<CreateOptionMutation>({
      query: createOption,
      variables: {
        input: {
          text,
          order,
          questionOptionsId: questionId,
        },
      },
    })
  );

  const results = await Promise.all(optionsResponses);

  return result;
}

export function createMultipleQuestions(questions: Array<Question>) {
  const results = questions.map(createQuestion);

  return Promise.all(results);
}

export function answerQuestion({
  playerId,
  questionId,
  selectedOptionId,
}: {
  playerId: string;
  questionId: string;
  selectedOptionId: string;
}) {
  return callGraphQL<CreateResponseMutation>({
    query: createResponse,
    variables: {
      input: {
        selectedOptionId,
        playerId,
        questionId,
        playerResponsesId: playerId,
      },
    },
  });
}

export const useAnswerQuestionMutation = getMutationHook(answerQuestion);

export function fetchQuestion(id: string) {
  return callGraphQL<GetQuestionQuery>({
    query: getQuestion,
    variables: {
      id,
    },
  });
}

export const useQuestion = getQueryHook(fetchQuestion);

export function fetchQuestions() {
  return callGraphQL<ListQuestionsQuery>({
    query: listQuestions,
  });
}

export const useQuestions = getQueryHook(fetchQuestions);
