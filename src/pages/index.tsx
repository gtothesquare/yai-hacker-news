import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { request, gql } from 'graphql-request';
import { InferGetServerSidePropsType } from 'next';
import { TopStories } from 'components/TopStories';
import { Layout } from 'components/Common';

const TopStoriesQuery = gql`
  {
    topStories {
      id
      payload {
        title
        by
        url
        kids
        totalKidsCount
        text
        score
      }
    }
  }
`;

export const getServerSideProps = async () => {
  const data = await request(
    'http://localhost:3000/api/graphql',
    TopStoriesQuery
  );
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
