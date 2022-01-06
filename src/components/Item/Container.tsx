import React from 'react';
import { Flex } from '@chakra-ui/react';

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <Flex w="100%" flexDirection="column">{children}</Flex>;
}

export { Container };
