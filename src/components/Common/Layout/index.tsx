import React from 'react';
import { Flex, Center } from '@chakra-ui/react';
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
      <Center width="100%">
        {children}
      </Center>
      <Footer />
    </Flex>
  );
}

export { Layout };
