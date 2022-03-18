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
    children: String
    text: String
    totalKidsCount: Int
    parent: Int
  }

  type ItemChild {
    id: ID!
    created_at: String!
    created_at_i: Int!
    type: String!
    title: String!
    url: String!
    text: String
    points: Int!
    author: String!
    parent_id: Int
    story_id: Int
    children: [ItemChild]
  }
`;
