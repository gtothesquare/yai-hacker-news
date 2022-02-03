import React from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';
import { Container, SecondLine, ItemText } from '../Item';
import { format } from 'timeago.js';

export interface CommentProps {
  id: number;
  by: string;
  text: string;
  time: number;
  deleted?: boolean;
  parent: number;
}

function Comment({ by, text, time, deleted, id, parent }: CommentProps) {
  if (deleted) {
    return null;
  }

  return (
    <Flex id={`${id}`} marginTop="5px">
      <Container>
        <SecondLine>
          <Text as="span">{by}</Text>
          <Text marginLeft={1} as="span">
            {format(time * 1000)}
          </Text>
          <Text marginLeft={1} as="span">
            |
          </Text>
          <Link marginLeft={1} textDecoration={'underline'} href={`#${parent}`}>
            parent
          </Link>
        </SecondLine>
        <ItemText text={text} />
      </Container>
    </Flex>
  );
}

export { Comment };
