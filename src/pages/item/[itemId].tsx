import React from 'react';
import { NextApiRequest } from 'next';
import Head from 'next/head';
import { Params } from 'next/dist/server/router';
import { getAbsoluteUrl } from 'lib/utils/getAbsoluteUrl';
import { gql, request } from 'graphql-request';
import { Box, Flex, Link, VStack } from '@chakra-ui/react';
import { Layout } from 'components/Common';
import { Item } from 'components/TopStories/types';
import { Container, ItemLink, SecondLine } from '../../components/Item';
import { format } from 'timeago.js';

const ItemQuery = gql`
  query Item($itemId: ID!) {
    item(id: $itemId) {
      title
      type
      score
      by
      url
      kids {
        id
        parent
        kids {
          id
          parent
        }
      }
      totalKidsCount
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
  const { itemId } = params;
  const { origin } = getAbsoluteUrl({ req });
  const data = await request(`${origin}/api/graphql`, ItemQuery, { itemId });
  return {
    props: {
      item: data?.item,
    },
  };
};

function Item({ item }: { item: Item }) {
  const { id, title, url, score, by, time, totalKidsCount } = item;
  return (
    <Box as="main" height="100%">
      <Head>
        <title>Yai Hacker News | ${item?.title}</title>
      </Head>
      <Layout>
        <VStack
          height="100%"
          alignItems="left"
          width="100%"
          maxWidth={960}
          padding={2}
          justifyContent="start"
        >
          <Flex key={id} w="100%" height="100%">
            <Container>
              <ItemLink title={title} url={url} />
              <SecondLine>
                {score} points by {by}
                <Link marginLeft={1} href={`/item/${id}`}>
                  {format(time * 1000)}
                </Link>
                <Link marginLeft={1} href={`/item/${id}`}>
                  {totalKidsCount} comments
                </Link>
              </SecondLine>
            </Container>
          </Flex>
        </VStack>
        <VStack>

        </VStack>
      </Layout>
    </Box>
  );
}

export default Item;
