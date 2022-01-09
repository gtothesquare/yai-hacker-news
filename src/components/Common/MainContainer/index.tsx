import React from 'react';
import { VStack } from '@chakra-ui/react';

function MainContainer({
  children,
  ...restProps
}: {
  children: React.ReactNode;
  restProps?: React.CSSProperties;
}) {
  return (
    <VStack
      height="100%"
      alignItems="flex-start"
      width="100%"
      maxWidth={960}
      padding={2}
      justifyContent="flex-start"
      {...restProps}
    >
      {children}
    </VStack>
  );
}

export { MainContainer };
