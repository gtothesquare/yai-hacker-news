import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Item } from 'types';
import { MainContainer } from 'components/common';
import { ItemStory } from './ItemStory';

interface TopStoriesProps {
  data: [Item];
}

function TopStories({ data }: TopStoriesProps) {
  return (
    <MainContainer>
      {data.map((storyItem: Item) => {
        const { place, id } = storyItem;
        return (
          <Flex key={id} w="100%">
            <Text textAlign="right" color="gray.600" marginRight={1}>
              {place}.
            </Text>
            <ItemStory storyItem={storyItem} />
          </Flex>
        );
      })}
    </MainContainer>
  );
}

export { TopStories };
