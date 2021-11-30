import React from 'react';
import { Flex } from '@chakra-ui/react';

interface TopStoryProps {
  children: React.ReactElement;
}

function Container({ children }: TopStoryProps) {
  return <Flex flexDirection="column">{children}</Flex>;
}

export { Container };
