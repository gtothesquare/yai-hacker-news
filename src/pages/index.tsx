import Head from 'next/head';
import { Box, Center, Link } from '@chakra-ui/react';
import { request, gql } from 'graphql-request';
import { InferGetServerSidePropsType, NextApiRequest } from 'next';
import { TopStories } from 'components/TopStories';
import { Layout } from 'components/Common';
import { getAbsoluteUrl } from '../lib/utils/getAbsoluteUrl';
import { Params } from 'next/dist/server/router';

const TopStoriesQuery = gql`
  query TopStories($limit: Int, $offset: Int) {
    topStories(limit: $limit, offset: $offset) {
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
  query,
}: {
  req: NextApiRequest;
  query: Params;
}) => {
  const { origin } = getAbsoluteUrl({ req });
  const page = query?.page || 1;
  const limit = 40;
  const offset = limit * (page - 1);
  const data = await request(`${origin}/api/graphql`, TopStoriesQuery, {
    limit,
    offset,
  });
  return {
    props: {
      topStories: data?.topStories,
      page,
    },
  };
};

function Home({
  topStories,
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const currentPage = parseInt(page);
  return (
    <Box as="main">
      <Head>
        <title>Yai Hacker News | Home</title>
      </Head>
      <Layout>
        <TopStories data={topStories} />
        <Center>
          <Link href={`/?page=${currentPage + 1}`}>More</Link>
        </Center>
      </Layout>
    </Box>
  );
}

export default Home;
