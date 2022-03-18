import { ApolloServer } from 'apollo-server-micro';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  typeDefs,
  resolvers,
  HackerNewsAPI,
  HnItemDetailsAPI,
} from 'lib/graphql';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      hackerNewsAPI: new HackerNewsAPI(),
      hnItemDetailsAPI: new HnItemDetailsAPI(),
    };
  },
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
