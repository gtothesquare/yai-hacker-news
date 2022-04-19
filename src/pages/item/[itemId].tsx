import React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import Head from 'next/head';
import { Params } from 'next/dist/server/router';
import { getAbsoluteUrl } from 'lib/utils/getAbsoluteUrl';
import { gql, request } from 'graphql-request';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Layout } from 'components/common';
import { Container, ItemLink, SecondLine, ItemText } from 'components/common/Item';
import { format } from 'timeago.js';
import { StoryComments } from 'components/modules/StoryComments';
import { MainContainer } from 'components/common';
import { Item, ItemDetail } from 'types';

// we use the graphql api to get
const ItemQuery = gql`
  query Item($itemId: ID!) {
    item(id: $itemId) {
      title
      type
      score
      by
      url
      children
      totalChildrenCount
      text
    }
  }
`;

export const getServerSideProps = async ({
  req,
  res,
  params,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
  params: Params;
}) => {
  const { itemId } = params;
  const { origin } = getAbsoluteUrl({ req });
  const data = await request(`${origin}/api/graphql`, ItemQuery, { itemId });
  const { children, ...itemRest } = data?.item;

  res.setHeader('Cache-Control', 'max-age=300, stale-while-revalidate=360');
  return {
    props: {
      item: itemRest,
      commentsData: JSON.parse(children),
    },
  };
};

function Item({
  item,
  commentsData,
}: {
  item: Item;
  commentsData: Array<ItemDetail>;
}) {
  const {
    id,
    title,
    url,
    score,
    by,
    time,
    totalChildrenCount,
    text,
  } = item;
  return (
    <Box as="main" height="100%">
      <Head>
        <title>Yai Hacker News | ${item?.title}</title>
      </Head>
      <Layout>
        <MainContainer>
          <Flex key={id} w="100%" height="100%">
            <Container>
              <ItemLink title={title} url={url} />
              <SecondLine>
                {score} points by {by}
                <Text as="span" marginLeft={1}>
                  {format(time * 1000)}
                </Text>
                <Text as="span" marginLeft={1}>
                  {totalChildrenCount} comments
                </Text>
              </SecondLine>
            </Container>
          </Flex>
          <ItemText text={text} />
          <StoryComments commentsTree={commentsData} />
        </MainContainer>
      </Layout>
    </Box>
  );
}

export default Item;
