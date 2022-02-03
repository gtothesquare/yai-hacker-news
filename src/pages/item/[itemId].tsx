import React from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import Head from 'next/head';
import { Params } from 'next/dist/server/router';
import { getAbsoluteUrl } from 'lib/utils/getAbsoluteUrl';
import { gql, request } from 'graphql-request';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Layout } from 'components/Common';
import { Item } from 'components/TopStories/types';
import { Container, ItemLink, SecondLine, ItemText } from 'components/Item';
import { format } from 'timeago.js';
import fetch from 'node-fetch';
import { StoryComments, CommentItem } from 'components/StoryComments';
import { MainContainer } from 'components/Common';

const ItemQuery = gql`
  query Item($itemId: ID!) {
    item(id: $itemId) {
      title
      type
      score
      by
      url
      totalKidsCount
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
  const commentsRes = await fetch(`${origin}/api/all-comments/${itemId}`);
  const storyComments = await commentsRes.json();

  res.setHeader('Cache-Control', 'max-age=300, stale-while-revalidate=360');
  return {
    props: {
      item: data?.item,
      storyComments,
    },
  };
};

function Item({
  item,
  storyComments,
}: {
  item: Item;
  storyComments: [CommentItem];
}) {
  const { id, title, url, score, by, time, totalKidsCount, text } = item;
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
                  {totalKidsCount} comments
                </Text>
              </SecondLine>
            </Container>
          </Flex>
          <ItemText>{text}</ItemText>
          <StoryComments commentsTree={storyComments} />
        </MainContainer>
      </Layout>
    </Box>
  );
}

export default Item;
