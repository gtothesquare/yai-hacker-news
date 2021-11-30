import React from 'react';
import { Text } from '@chakra-ui/react';

function Score({ score }: { score: number }) {
  return <Text marginRight={1}>{score} points</Text>;
}

export { Score };
