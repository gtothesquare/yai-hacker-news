import React from 'react';
import { Box, Heading, Center } from '@chakra-ui/react';

function Header() {
  return (
    <Box backgroundColor="teal.900" marginBottom={2} padding={1} paddingLeft={4}>
      <Heading as="h1" size="lg" fontWeight="100">
        YHK - yet another hacker news clone
      </Heading>
    </Box>
  );
}

export { Header };
