export const listAllQuestionsWithOption = /* GraphQL */ `
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
