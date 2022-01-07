import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import { Container, SecondLine } from '../Item';
import { format } from 'timeago.js';

export interface CommentProps {
  id: number;
  by: string;
  text: string;
  time: number;
}

function Comment({ id, by, text, time }: CommentProps) {
  return (
    <Flex key={id} w="100%">
      <Container>
        <SecondLine>
          {by}
          <Link marginLeft={1} href={`/item/${id}`}>
            {format(time * 1000)}
          </Link>
        </SecondLine>
        <Text
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </Container>
    </Flex>
  );
}

export { Comment };
