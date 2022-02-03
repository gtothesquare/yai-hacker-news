import React from 'react';
import { Text, Box } from '@chakra-ui/react';

function ItemText({ children }: { children: React.ReactNode }) {
  if (!children) {
    return null;
  }
  return (
    <Box>
      <Text fontSize={'sm'}>{children}</Text>
    </Box>
  );
}

export { ItemText };
