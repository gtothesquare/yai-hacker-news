import React from 'react';
import { Box } from '@chakra-ui/react';

function SecondLine({ children }: { children: React.ReactNode }) {
  return (
    <Box fontSize={['xs', 'sm']} color="teal">
      {children}
    </Box>
  );
}

export { SecondLine };
