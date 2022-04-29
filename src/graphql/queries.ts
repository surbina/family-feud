/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGameState = /* GraphQL */ `
  query GetGameState($id: ID!) {
    getGameState(id: $id) {
      id
      currentState
      currentQuestionId
      targetTimerEnd
      createdAt
      updatedAt
    }
  }
`;
export const listGameStates = /* GraphQL */ `
  query ListGameStates(
    $id: ID
    $filter: ModelGameStateFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listGameStates(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        currentState
        currentQuestionId
        targetTimerEnd
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      publicQuestion
      personalQuestion
      options {
        items {
          id
          order
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $id: ID
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listQuestions(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        publicQuestion
        personalQuestion
        options {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOption = /* GraphQL */ `
  query GetOption($id: ID!) {
    getOption(id: $id) {
      id
      order
      text
      question {
        id
        publicQuestion
        personalQuestion
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
export const listOptions = /* GraphQL */ `
  query ListOptions(
    $id: ID
    $filter: ModelOptionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOptions(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        order
        text
        question {
          id
          publicQuestion
          personalQuestion
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        questionOptionsId
      }
      nextToken
    }
  }
`;
export const getResponse = /* GraphQL */ `
  query GetResponse($selectedOptionId: ID!, $questionId: ID!, $playerId: ID!) {
    getResponse(
      selectedOptionId: $selectedOptionId
      questionId: $questionId
      playerId: $playerId
    ) {
      selectedOptionId
      playerId
      questionId
      createdAt
      updatedAt
      playerResponsesId
    }
  }
`;
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $selectedOptionId: ID
    $questionIdPlayerId: ModelResponsePrimaryCompositeKeyConditionInput
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listResponses(
      selectedOptionId: $selectedOptionId
      questionIdPlayerId: $questionIdPlayerId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $id: ID
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        responses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const questionResponses = /* GraphQL */ `
  query QuestionResponses(
    $questionId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionResponses(
      questionId: $questionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
