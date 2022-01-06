import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Box
      as="header"
      backgroundColor="orange.900"
      marginBottom={2}
      paddingTop={1}
      paddingBottom={1}
      width="100%"
    >
      <Center>
        <Heading as="h1" size="lg" fontWeight="100" maxWidth={960}>
          YHK - yet another hacker news clone
        </Heading>
      </Center>
    </Box>
  );
}

export { Header };
