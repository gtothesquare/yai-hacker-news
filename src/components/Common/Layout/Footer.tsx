import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      marginTop={5}
      paddingTop={5}
      paddingBottom={5}
      width="100%"
      borderTopStyle="solid"
      borderTopColor="orange.900"
      borderTopWidth="5px"
    >
      <Center>
        <Text>by @gtothesquare</Text>
      </Center>
    </Box>
  );
}

export { Footer };
