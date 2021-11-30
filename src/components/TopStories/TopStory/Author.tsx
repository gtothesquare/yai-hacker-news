import React from 'react';
import { Text } from '@chakra-ui/react';

function Author({ children }: { children: React.ReactElement }) {
  return <Text marginRight={1}>by {children}</Text>;
}

export { Author };
