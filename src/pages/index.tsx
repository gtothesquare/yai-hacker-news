import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { request, gql } from 'graphql-request';
import { InferGetServerSidePropsType, NextApiRequest } from 'next';
import { TopStories } from 'components/TopStories';
import { Layout } from 'components/Common';
import { getAbsoluteUrl } from '../lib/utils/getAbsoluteUrl';
import { Params } from 'next/dist/server/router';

const TopStoriesQuery = gql`
  {
    topStories {
      id
      place
      title
      by
      url
      totalKidsCount
      text
      time
      score
    }
  }
`;

export const getServerSideProps = async ({
  req,
  params,
}: {
  req: NextApiRequest;
  params: Params;
}) => {
  console.log(params);
  const { origin } = getAbsoluteUrl({ req });
  const data = await request(`${origin}/api/graphql`, TopStoriesQuery);
  return {
    props: {
      topStories: data?.topStories,
    },
  };
};

function Home({
  topStories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Box as="main">
      <Head>
        <title>Yai Hacker News | Home</title>
      </Head>
      <Layout>
        <TopStories data={topStories} />
      </Layout>
    </Box>
  );
}

export default Home;
