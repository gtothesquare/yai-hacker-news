import React from 'react';
import { Box, VStack, Heading, Link, Center } from '@chakra-ui/react';

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
        <VStack
          alignItems="flexStart"
          width="100%"
          maxWidth={'960px'}
          padding={2}
        >
          <Heading as="h1" size="lg" fontWeight="100" maxWidth={960}>
            <Link href="/">YHK - yet another hacker news clone</Link>
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
}

export { Header };
