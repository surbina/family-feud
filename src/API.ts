/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGameStateInput = {
  id?: string | null,
  currentState: GameStatus,
  currentQuestionId?: string | null,
  targetTimerEnd?: string | null,
};

export enum GameStatus {
  INITIAL = "INITIAL",
  NEW_QUESTION = "NEW_QUESTION",
  COUNT_DOWN_INITIATED = "COUNT_DOWN_INITIATED",
  COUNT_DOWN_STOPPED = "COUNT_DOWN_STOPPED",
  ANSWERS_REVEALED = "ANSWERS_REVEALED",
}


export type ModelGameStateConditionInput = {
  currentState?: ModelGameStatusInput | null,
  currentQuestionId?: ModelIDInput | null,
  targetTimerEnd?: ModelStringInput | null,
  and?: Array< ModelGameStateConditionInput | null > | null,
  or?: Array< ModelGameStateConditionInput | null > | null,
  not?: ModelGameStateConditionInput | null,
};

export type ModelGameStatusInput = {
  eq?: GameStatus | null,
  ne?: GameStatus | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type GameState = {
  __typename: "GameState",
  id: string,
  currentState: GameStatus,
  currentQuestionId?: string | null,
  targetTimerEnd?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateGameStateInput = {
  id: string,
  currentState?: GameStatus | null,
  currentQuestionId?: string | null,
  targetTimerEnd?: string | null,
};

export type DeleteGameStateInput = {
  id: string,
};

export type CreateQuestionInput = {
  id?: string | null,
  publicQuestion: string,
  personalQuestion: string,
};

export type ModelQuestionConditionInput = {
  publicQuestion?: ModelStringInput | null,
  personalQuestion?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
};

export type Question = {
  __typename: "Question",
  id: string,
  publicQuestion: string,
  personalQuestion: string,
  options?: ModelOptionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOptionConnection = {
  __typename: "ModelOptionConnection",
  items:  Array<Option | null >,
  nextToken?: string | null,
};

export type Option = {
  __typename: "Option",
  id: string,
  order: number,
  text: string,
  question: Question,
  createdAt: string,
  updatedAt: string,
  questionOptionsId: string,
};

export type UpdateQuestionInput = {
  id: string,
  publicQuestion?: string | null,
  personalQuestion?: string | null,
};

export type DeleteQuestionInput = {
  id: string,
};

export type CreateOptionInput = {
  id?: string | null,
  order: number,
  text: string,
  questionOptionsId: string,
};

export type ModelOptionConditionInput = {
  order?: ModelIntInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelOptionConditionInput | null > | null,
  or?: Array< ModelOptionConditionInput | null > | null,
  not?: ModelOptionConditionInput | null,
  questionOptionsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateOptionInput = {
  id: string,
  order?: number | null,
  text?: string | null,
  questionOptionsId?: string | null,
};

export type DeleteOptionInput = {
  id: string,
};

export type CreateResponseInput = {
  selectedOptionId: string,
  playerId: string,
  questionId: string,
  playerResponsesId: string,
};

export type ModelResponseConditionInput = {
  and?: Array< ModelResponseConditionInput | null > | null,
  or?: Array< ModelResponseConditionInput | null > | null,
  not?: ModelResponseConditionInput | null,
  playerResponsesId?: ModelIDInput | null,
};

export type Response = {
  __typename: "Response",
  selectedOptionId: string,
  playerId: string,
  questionId: string,
  createdAt: string,
  updatedAt: string,
  playerResponsesId: string,
};

export type UpdateResponseInput = {
  selectedOptionId: string,
  playerId: string,
  questionId: string,
  playerResponsesId?: string | null,
};

export type DeleteResponseInput = {
  selectedOptionId: string,
  questionId: string,
  playerId: string,
};

export type CreatePlayerInput = {
  id?: string | null,
  name: string,
};

export type ModelPlayerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type Player = {
  __typename: "Player",
  id: string,
  name: string,
  responses?: ModelResponseConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelResponseConnection = {
  __typename: "ModelResponseConnection",
  items:  Array<Response | null >,
  nextToken?: string | null,
};

export type UpdatePlayerInput = {
  id: string,
  name?: string | null,
};

export type DeletePlayerInput = {
  id: string,
};

export type ModelGameStateFilterInput = {
  id?: ModelIDInput | null,
  currentState?: ModelGameStatusInput | null,
  currentQuestionId?: ModelIDInput | null,
  targetTimerEnd?: ModelStringInput | null,
  and?: Array< ModelGameStateFilterInput | null > | null,
  or?: Array< ModelGameStateFilterInput | null > | null,
  not?: ModelGameStateFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelGameStateConnection = {
  __typename: "ModelGameStateConnection",
  items:  Array<GameState | null >,
  nextToken?: string | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  publicQuestion?: ModelStringInput | null,
  personalQuestion?: ModelStringInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type ModelOptionFilterInput = {
  id?: ModelIDInput | null,
  order?: ModelIntInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelOptionFilterInput | null > | null,
  or?: Array< ModelOptionFilterInput | null > | null,
  not?: ModelOptionFilterInput | null,
  questionOptionsId?: ModelIDInput | null,
};

export type ModelResponsePrimaryCompositeKeyConditionInput = {
  eq?: ModelResponsePrimaryCompositeKeyInput | null,
  le?: ModelResponsePrimaryCompositeKeyInput | null,
  lt?: ModelResponsePrimaryCompositeKeyInput | null,
  ge?: ModelResponsePrimaryCompositeKeyInput | null,
  gt?: ModelResponsePrimaryCompositeKeyInput | null,
  between?: Array< ModelResponsePrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelResponsePrimaryCompositeKeyInput | null,
};

export type ModelResponsePrimaryCompositeKeyInput = {
  questionId?: string | null,
  playerId?: string | null,
};

export type ModelResponseFilterInput = {
  selectedOptionId?: ModelIDInput | null,
  playerId?: ModelIDInput | null,
  questionId?: ModelIDInput | null,
  and?: Array< ModelResponseFilterInput | null > | null,
  or?: Array< ModelResponseFilterInput | null > | null,
  not?: ModelResponseFilterInput | null,
  playerResponsesId?: ModelIDInput | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items:  Array<Player | null >,
  nextToken?: string | null,
};

export type CreateGameStateMutationVariables = {
  input: CreateGameStateInput,
  condition?: ModelGameStateConditionInput | null,
};

export type CreateGameStateMutation = {
  createGameState?:  {
    __typename: "GameState",
    id: string,
    currentState: GameStatus,
    currentQuestionId?: string | null,
    targetTimerEnd?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameStateMutationVariables = {
  input: UpdateGameStateInput,
  condition?: ModelGameStateConditionInput | null,
};

export type UpdateGameStateMutation = {
  updateGameState?:  {
    __typename: "GameState",
    id: string,
    currentState: GameStatus,
    currentQuestionId?: string | null,
    targetTimerEnd?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameStateMutationVariables = {
  input: DeleteGameStateInput,
  condition?: ModelGameStateConditionInput | null,
};

export type DeleteGameStateMutation = {
  deleteGameState?:  {
    __typename: "GameState",
    id: string,
    currentState: GameStatus,
    currentQuestionId?: string | null,
    targetTimerEnd?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    id: string,
    publicQuestion: string,
    personalQuestion: string,
    options?:  {
      __typename: "ModelOptionConnection",
      items:  Array< {
        __typename: "Option",
        id: string,
        order: number,
        text: string,
        createdAt: string,
        updatedAt: string,
        questionOptionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    id: string,
    publicQuestion: string,
    personalQuestion: string,
    options?:  {
      __typename: "ModelOptionConnection",
      items:  Array< {
        __typename: "Option",
        id: string,
        order: number,
        text: string,
        createdAt: string,
        updatedAt: string,
        questionOptionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    id: string,
    publicQuestion: string,
    personalQuestion: string,
    options?:  {
      __typename: "ModelOptionConnection",
      items:  Array< {
        __typename: "Option",
        id: string,
        order: number,
        text: string,
        createdAt: string,
        updatedAt: string,
        questionOptionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOptionMutationVariables = {
  input: CreateOptionInput,
  condition?: ModelOptionConditionInput | null,
};

export type CreateOptionMutation = {
  createOption?:  {
    __typename: "Option",
    id: string,
    order: number,
    text: string,
    question:  {
      __typename: "Question",
      id: string,
      publicQuestion: string,
      personalQuestion: string,
      options?:  {
        __typename: "ModelOptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    questionOptionsId: string,
  } | null,
};

export type UpdateOptionMutationVariables = {
  input: UpdateOptionInput,
  condition?: ModelOptionConditionInput | null,
};

export type UpdateOptionMutation = {
  updateOption?:  {
    __typename: "Option",
    id: string,
    order: number,
    text: string,
    question:  {
      __typename: "Question",
      id: string,
      publicQuestion: string,
      personalQuestion: string,
      options?:  {
        __typename: "ModelOptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    questionOptionsId: string,
  } | null,
};

export type DeleteOptionMutationVariables = {
  input: DeleteOptionInput,
  condition?: ModelOptionConditionInput | null,
};

export type DeleteOptionMutation = {
  deleteOption?:  {
    __typename: "Option",
    id: string,
    order: number,
    text: string,
    question:  {
      __typename: "Question",
      id: string,
      publicQuestion: string,
      personalQuestion: string,
      options?:  {
        __typename: "ModelOptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    questionOptionsId: string,
  } | null,
};

export type CreateResponseMutationVariables = {
  input: CreateResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type CreateResponseMutation = {
  createResponse?:  {
    __typename: "Response",
    selectedOptionId: string,
    playerId: string,
    questionId: string,
    createdAt: string,
    updatedAt: string,
    playerResponsesId: string,
  } | null,
};

export type UpdateResponseMutationVariables = {
  input: UpdateResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type UpdateResponseMutation = {
  updateResponse?:  {
    __typename: "Response",
    selectedOptionId: string,
    playerId: string,
    questionId: string,
    createdAt: string,
    updatedAt: string,
    playerResponsesId: string,
  } | null,
};

export type DeleteResponseMutationVariables = {
  input: DeleteResponseInput,
  condition?: ModelResponseConditionInput | null,
};

export type DeleteResponseMutation = {
  deleteResponse?:  {
    __typename: "Response",
    selectedOptionId: string,
    playerId: string,
    questionId: string,
    createdAt: string,
    updatedAt: string,
    playerResponsesId: string,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        selectedOptionId: string,
        playerId: string,
        questionId: string,
        createdAt: string,
        updatedAt: string,
        playerResponsesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        selectedOptionId: string,
        playerId: string,
        questionId: string,
        createdAt: string,
        updatedAt: string,
        playerResponsesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        selectedOptionId: string,
        playerId: string,
        questionId: string,
        createdAt: string,
        updatedAt: string,
        playerResponsesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGameStateQueryVariables = {
  id: string,
};

export type GetGameStateQuery = {
  getGameState?:  {
    __typename: "GameState",
    id: string,
    currentState: GameStatus,
    currentQuestionId?: string | null,
    targetTimerEnd?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGameStatesQueryVariables = {
  id?: string | null,
  filter?: ModelGameStateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGameStatesQuery = {
  listGameStates?:  {
    __typename: "ModelGameStateConnection",
    items:  Array< {
      __typename: "GameState",
      id: string,
      currentState: GameStatus,
      currentQuestionId?: string | null,
      targetTimerEnd?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    id: string,
    publicQuestion: string,
    personalQuestion: string,
    options?:  {
      __typename: "ModelOptionConnection",
      items:  Array< {
        __typename: "Option",
        id: string,
        order: number,
        text: string,
        createdAt: string,
        updatedAt: string,
        questionOptionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuestionsQueryVariables = {
  id?: string | null,
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      publicQuestion: string,
      personalQuestion: string,
      options?:  {
        __typename: "ModelOptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOptionQueryVariables = {
  id: string,
};

export type GetOptionQuery = {
  getOption?:  {
    __typename: "Option",
    id: string,
    order: number,
    text: string,
    question:  {
      __typename: "Question",
      id: string,
      publicQuestion: string,
      personalQuestion: string,
      options?:  {
        __typename: "ModelOptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    questionOptionsId: string,
  } | null,
};

export type ListOptionsQueryVariables = {
  id?: string | null,
  filter?: ModelOptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOptionsQuery = {
  listOptions?:  {
    __typename: "ModelOptionConnection",
    items:  Array< {
      __typename: "Option",
      id: string,
      order: number,
      text: string,
      question:  {
        __typename: "Question",
        id: string,
        publicQuestion: string,
        personalQuestion: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      questionOptionsId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetResponseQueryVariables = {
  selectedOptionId: string,
  questionId: string,
  playerId: string,
};

export type GetResponseQuery = {
  getResponse?:  {
    __typename: "Response",
    selectedOptionId: string,
    playerId: string,
    questionId: string,
    createdAt: string,
    updatedAt: string,
    playerResponsesId: string,
  } | null,
};

export type ListResponsesQueryVariables = {
  selectedOptionId?: string | null,
  questionIdPlayerId?: ModelResponsePrimaryCompositeKeyConditionInput | null,
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListResponsesQuery = {
  listResponses?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      selectedOptionId: string,
      playerId: string,
      questionId: string,
      createdAt: string,
      updatedAt: string,
      playerResponsesId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        selectedOptionId: string,
        playerId: string,
        questionId: string,
        createdAt: string,
        updatedAt: string,
        playerResponsesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlayersQueryVariables = {
  id?: string | null,
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items:  Array< {
      __typename: "Player",
      id: string,
      name: string,
      responses?:  {
        __typename: "ModelResponseConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuestionResponsesQueryVariables = {
  questionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuestionResponsesQuery = {
  questionResponses?:  {
    __typename: "ModelResponseConnection",
    items:  Array< {
      __typename: "Response",
      selectedOptionId: string,
      playerId: string,
      questionId: string,
      createdAt: string,
      updatedAt: string,
      playerResponsesId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGameStateSubscription = {
  onCreateGameState?:  {
    __typename: "GameState",
    id: string,
    currentState: GameStatus,
    currentQuestionId?: string | null,
    targetTimerEnd?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameStateSubscription = {
  onUpdateGameState?:  {
    __typename: "GameState",
    id: string,
    currentState: GameStatus,
    currentQuestionId?: string | null,
    targetTimerEnd?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameStateSubscription = {
  onDeleteGameState?:  {
    __typename: "GameState",
    id: string,
    currentState: GameStatus,
    currentQuestionId?: string | null,
    targetTimerEnd?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    id: string,
    publicQuestion: string,
    personalQuestion: string,
    options?:  {
      __typename: "ModelOptionConnection",
      items:  Array< {
        __typename: "Option",
        id: string,
        order: number,
        text: string,
        createdAt: string,
        updatedAt: string,
        questionOptionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    id: string,
    publicQuestion: string,
    personalQuestion: string,
    options?:  {
      __typename: "ModelOptionConnection",
      items:  Array< {
        __typename: "Option",
        id: string,
        order: number,
        text: string,
        createdAt: string,
        updatedAt: string,
        questionOptionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    id: string,
    publicQuestion: string,
    personalQuestion: string,
    options?:  {
      __typename: "ModelOptionConnection",
      items:  Array< {
        __typename: "Option",
        id: string,
        order: number,
        text: string,
        createdAt: string,
        updatedAt: string,
        questionOptionsId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOptionSubscription = {
  onCreateOption?:  {
    __typename: "Option",
    id: string,
    order: number,
    text: string,
    question:  {
      __typename: "Question",
      id: string,
      publicQuestion: string,
      personalQuestion: string,
      options?:  {
        __typename: "ModelOptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    questionOptionsId: string,
  } | null,
};

export type OnUpdateOptionSubscription = {
  onUpdateOption?:  {
    __typename: "Option",
    id: string,
    order: number,
    text: string,
    question:  {
      __typename: "Question",
      id: string,
      publicQuestion: string,
      personalQuestion: string,
      options?:  {
        __typename: "ModelOptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    questionOptionsId: string,
  } | null,
};

export type OnDeleteOptionSubscription = {
  onDeleteOption?:  {
    __typename: "Option",
    id: string,
    order: number,
    text: string,
    question:  {
      __typename: "Question",
      id: string,
      publicQuestion: string,
      personalQuestion: string,
      options?:  {
        __typename: "ModelOptionConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    questionOptionsId: string,
  } | null,
};

export type OnCreateResponseSubscription = {
  onCreateResponse?:  {
    __typename: "Response",
    selectedOptionId: string,
    playerId: string,
    questionId: string,
    createdAt: string,
    updatedAt: string,
    playerResponsesId: string,
  } | null,
};

export type OnUpdateResponseSubscription = {
  onUpdateResponse?:  {
    __typename: "Response",
    selectedOptionId: string,
    playerId: string,
    questionId: string,
    createdAt: string,
    updatedAt: string,
    playerResponsesId: string,
  } | null,
};

export type OnDeleteResponseSubscription = {
  onDeleteResponse?:  {
    __typename: "Response",
    selectedOptionId: string,
    playerId: string,
    questionId: string,
    createdAt: string,
    updatedAt: string,
    playerResponsesId: string,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        selectedOptionId: string,
        playerId: string,
        questionId: string,
        createdAt: string,
        updatedAt: string,
        playerResponsesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        selectedOptionId: string,
        playerId: string,
        questionId: string,
        createdAt: string,
        updatedAt: string,
        playerResponsesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    responses?:  {
      __typename: "ModelResponseConnection",
      items:  Array< {
        __typename: "Response",
        selectedOptionId: string,
        playerId: string,
        questionId: string,
        createdAt: string,
        updatedAt: string,
        playerResponsesId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
