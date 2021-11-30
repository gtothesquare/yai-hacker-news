import React from 'react';
import { SimpleGrid, Center, Spacer } from '@chakra-ui/react';
import { Header } from './Header';

export interface LayoutProps {
  children: React.ReactElement;
}

function Layout({ children }: LayoutProps) {
  return (
    <SimpleGrid>
      <Header />
      <Center>{children}</Center>
    </SimpleGrid>
  );
}

export { Layout };
