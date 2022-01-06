import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';

export interface StoryLinkProps {
  title: string;
  url: string;
  storyPlace?: number;
}

function ItemLink({ title, url, storyPlace }: StoryLinkProps) {
  return (
    <Flex>
      {storyPlace ? (
        <Text color="gray.600" marginRight={1}>
          {storyPlace} -
        </Text>
      ) : null}
      <Link w="100%" href={url}>{title}</Link>
    </Flex>
  );
}

export { ItemLink };
