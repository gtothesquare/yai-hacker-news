import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import { Item } from './types';
import { SecondLine, ItemLink, Container } from 'components/Item';
import { MainContainer } from 'components/Common';
import { format } from 'timeago.js';

interface TopStoriesProps {
  data: [Item];
}

function TopStories({ data }: TopStoriesProps) {
  return (
    <MainContainer>
      {data.map(
        ({ id, place, title, url, score, by, totalKidsCount, time }: Item) => {
          return (
            <Flex key={id} w="100%">
              <Text textAlign="right" color="gray.600" marginRight={1}>
                {place}.
              </Text>
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
          );
        }
      )}
    </MainContainer>
  );
}

export { TopStories };
