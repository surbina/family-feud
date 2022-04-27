/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateOption = /* GraphQL */ `
  subscription OnCreateOption {
    onCreateOption {
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
export const onUpdateOption = /* GraphQL */ `
  subscription OnUpdateOption {
    onUpdateOption {
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
export const onDeleteOption = /* GraphQL */ `
  subscription OnDeleteOption {
    onDeleteOption {
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
