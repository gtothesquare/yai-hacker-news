import React from 'react';
import { Link, VStack } from '@chakra-ui/react';
import { Story } from './types';
import {
  SecondLine,
  StoryLink,
  Container,
  CommentsLink,
  Author,
  Score,
} from './TopStory';

interface TopStoriesProps {
  data: [Story];
}

function TopStories({ data }: TopStoriesProps) {
  return (
    <VStack alignItems="left">
      {data.map(
        (
          {
            id,
            payload: { title, url, type, score, by, time, totalKidsCount },
          }: Story,
          index: number
        ) => {
          return (
            <Container key={id}>
              <StoryLink storyNumber={index + 1} title={title} url={url} />
              <SecondLine>
                <Score score={score} />
                <Author>{by}</Author>
                <CommentsLink count={totalKidsCount} />
              </SecondLine>
            </Container>
          );
        }
      )}
    </VStack>
  );
}

export { TopStories };
