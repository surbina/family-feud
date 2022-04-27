/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGameState = /* GraphQL */ `
  mutation CreateGameState(
    $input: CreateGameStateInput!
    $condition: ModelGameStateConditionInput
  ) {
    createGameState(input: $input, condition: $condition) {
      id
      currentState
      currentQuestionId
      timerStarted
      createdAt
      updatedAt
    }
  }
`;
export const updateGameState = /* GraphQL */ `
  mutation UpdateGameState(
    $input: UpdateGameStateInput!
    $condition: ModelGameStateConditionInput
  ) {
    updateGameState(input: $input, condition: $condition) {
      id
      currentState
      currentQuestionId
      timerStarted
      createdAt
      updatedAt
    }
  }
`;
export const deleteGameState = /* GraphQL */ `
  mutation DeleteGameState(
    $input: DeleteGameStateInput!
    $condition: ModelGameStateConditionInput
  ) {
    deleteGameState(input: $input, condition: $condition) {
      id
      currentState
      currentQuestionId
      timerStarted
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      text
      options {
        items {
          id
          text
          createdAt
          updatedAt
          questionOptionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      text
      options {
        items {
          id
          text
          createdAt
          updatedAt
          questionOptionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      text
      options {
        items {
          id
          text
          createdAt
          updatedAt
          questionOptionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOption = /* GraphQL */ `
  mutation CreateOption(
    $input: CreateOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    createOption(input: $input, condition: $condition) {
      id
      text
      question {
        id
        text
        options {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      questionOptionsId
    }
  }
`;
export const updateOption = /* GraphQL */ `
  mutation UpdateOption(
    $input: UpdateOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    updateOption(input: $input, condition: $condition) {
      id
      text
      question {
        id
        text
        options {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      questionOptionsId
    }
  }
`;
export const deleteOption = /* GraphQL */ `
  mutation DeleteOption(
    $input: DeleteOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    deleteOption(input: $input, condition: $condition) {
      id
      text
      question {
        id
        text
        options {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      questionOptionsId
    }
  }
`;
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
      selectedOptionId
      playerId
      questionId
      createdAt
      updatedAt
      playerResponsesId
    }
  }
`;
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
      selectedOptionId
      playerId
      questionId
      createdAt
      updatedAt
      playerResponsesId
    }
  }
`;
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
      selectedOptionId
      playerId
      questionId
      createdAt
      updatedAt
      playerResponsesId
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      responses {
        items {
          selectedOptionId
          playerId
          questionId
          createdAt
          updatedAt
          playerResponsesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      responses {
        items {
          selectedOptionId
          playerId
          questionId
          createdAt
          updatedAt
          playerResponsesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      responses {
        items {
          selectedOptionId
          playerId
          questionId
          createdAt
          updatedAt
          playerResponsesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
