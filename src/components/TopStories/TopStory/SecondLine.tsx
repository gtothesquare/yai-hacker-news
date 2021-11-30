import React from 'react';
import { Flex } from '@chakra-ui/react';

function SecondLine({ children }: { children: React.ReactElement }) {
  return (
    <Flex fontSize="xs" color="teal">
      {children}
    </Flex>
  );
}

export { SecondLine };
