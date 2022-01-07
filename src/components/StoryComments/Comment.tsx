import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { Container, SecondLine } from '../Item';
import { format } from 'timeago.js';
import DOMPurify from 'dompurify';

export interface CommentProps {
  id: number;
  by: string;
  text: string;
  time: number;
  deleted?: boolean;
}

function Comment({ by, text, time, deleted }: CommentProps) {
  if (deleted) {
    return null;
  }

  return (
    <Flex w="100%" marginTop={2}>
      <Container>
        <SecondLine>
          <Text as="span">{by}</Text>
          <Text marginLeft={1} as="span">
            {format(time * 1000)}
          </Text>
        </SecondLine>
        <Box
          sx={{
            p: {
              marginBlockStart: '1em',
              marginBlockEnd: '1em',
            },
          }}
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </Container>
    </Flex>
  );
}

export { Comment };
