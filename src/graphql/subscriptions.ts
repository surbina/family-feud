/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGameState = /* GraphQL */ `
  subscription OnCreateGameState {
    onCreateGameState {
      id
      currentState
      currentQuestionId
      targetTimerEnd
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGameState = /* GraphQL */ `
  subscription OnUpdateGameState {
    onUpdateGameState {
      id
      currentState
      currentQuestionId
      targetTimerEnd
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGameState = /* GraphQL */ `
  subscription OnDeleteGameState {
    onDeleteGameState {
      id
      currentState
      currentQuestionId
      targetTimerEnd
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateOption = /* GraphQL */ `
  subscription OnCreateOption {
    onCreateOption {
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
export const onUpdateOption = /* GraphQL */ `
  subscription OnUpdateOption {
    onUpdateOption {
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
export const onDeleteOption = /* GraphQL */ `
  subscription OnDeleteOption {
    onDeleteOption {
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
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse {
    onCreateResponse {
      selectedOptionId
      playerId
      questionId
      createdAt
      updatedAt
      playerResponsesId
    }
  }
`;
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse {
    onUpdateResponse {
      selectedOptionId
      playerId
      questionId
      createdAt
      updatedAt
      playerResponsesId
    }
  }
`;
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse {
    onDeleteResponse {
      selectedOptionId
      playerId
      questionId
      createdAt
      updatedAt
      playerResponsesId
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
