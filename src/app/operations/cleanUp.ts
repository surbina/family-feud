import { callGraphQL } from 'src/gqlHelper';
import {
  deleteResponse as deleteResponseMutation,
  deleteOption as deleteOptionMutation,
  deleteQuestion as deleteQuestionMutation,
} from 'src/graphql/mutations';
import {
  DeleteResponseMutation,
  DeleteOptionMutation,
  DeleteQuestionMutation,
} from 'src/API';

import { getAllResponses } from './responses';
import { getAllOptions, getAllQuestions } from './questions';

export function deleteResponse(
  selectedOptionId: string,
  questionId: string,
  playerId: string
) {
  return callGraphQL<DeleteResponseMutation>({
    query: deleteResponseMutation,
    variables: {
      input: {
        selectedOptionId,
        questionId,
        playerId,
      },
    },
  });
}

export function deleteOption(id: string) {
  return callGraphQL<DeleteOptionMutation>({
    query: deleteOptionMutation,
    variables: {
      input: {
        id,
      },
    },
  });
}

export function deleteQuestion(id: string) {
  return callGraphQL<DeleteQuestionMutation>({
    query: deleteQuestionMutation,
    variables: {
      input: {
        id,
      },
    },
  });
}

export async function deleteAllData() {
  const [responses, options, questions] = await Promise.all([
    getAllResponses(),
    getAllOptions(),
    getAllQuestions(),
  ]);

  console.log('Deleting responses');
  const deleteResponseRequests = responses.data.listResponses.items.map(
    ({ selectedOptionId, questionId, playerId }) =>
      deleteResponse(selectedOptionId, questionId, playerId)
  );
  await Promise.all(deleteResponseRequests);
  console.log('Responses deleted');

  console.log('Deleting options');
  const deleteOptionRequests = options.data.listOptions.items.map(({ id }) =>
    deleteOption(id)
  );
  await Promise.all(deleteOptionRequests);
  console.log('Options deleted');

  console.log('Deleting questions');
  const deleteQuestionRequests = questions.data.listQuestions.items.map(
    ({ id }) => deleteQuestion(id)
  );
  await Promise.all(deleteQuestionRequests);
  console.log('Questions deleted');

  console.log('State cleaned successfully');
}
