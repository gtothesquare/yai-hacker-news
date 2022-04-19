import React from 'react';
import { Flex } from '@chakra-ui/react';

interface IContainerProps {
  children: React.ReactNode;
}

function Container({ children }: IContainerProps) {
  return (
    <Flex w="100%" flexDirection="column">
      {children}
    </Flex>
  );
}

export { Container };
