import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    "Top stories in hacker news"
    topStories(limit: Int = 30, offset: Int = 0): [Story!]!
    "Specific item of type story"
    story(id: ID!): Story!
  }

  type Story {
    id: ID!
    payload: StoryData!
  }

  type StoryData {
    type: String!
    title: String!
    score: Int!
    by: String!
    url: String
    time: Int!
    kids: [Int]
    text: String
    totalKidsCount: Int
  }
`;
