import React from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { Header } from './Header';
import { Footer } from './Footer';

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Flex
      height="100%"
      flexDirection="column"
      minHeight="100vh"
      justifyContent="space-between"
    >
      <Header />
      <VStack width="100%" flex={1}>
        {children}
      </VStack>
      <Footer />
    </Flex>
  );
}

export { Layout };
