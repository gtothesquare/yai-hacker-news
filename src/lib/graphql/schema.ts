import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    "Top stories in hacker news"
    topStories(limit: Int = 30, offset: Int = 0): [Item!]!
    "Specific item by id"
    item(id: ID!): Item!
  }

  type Item {
    id: ID!
    place: Int!
    type: String!
    title: String!
    score: Int!
    by: String!
    url: String
    time: Int!
    """we use /api/all-comments instead of graphql to get this in the frontend.
    Main reason is that graphql doesn't support unknown depth of children"""
    kids: [Comment]
    text: String
    totalKidsCount: Int
    parent: Int
  }

  type Comment {
    id: ID!
    kids: [Comment]
    parent: Int!
    time: Int!
    text: String
    type: String
  }
`;
