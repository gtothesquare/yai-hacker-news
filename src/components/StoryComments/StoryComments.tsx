import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { Comment } from './Comment';
import { ItemDetail } from 'types';

export interface StoryCommentsProps {
  commentsTree: Array<ItemDetail>;
}

function StoryComments({ commentsTree }: StoryCommentsProps) {
  return (
    <VStack paddingTop={5} alignItems="flex-start" w={'100%'}>
      {commentsTree?.map(({ id, created_at_i, text, author, children, parent_id }) => {
        return (
          <React.Fragment key={`${id}-container`}>
            <Comment
              key={id}
              id={id}
              time={created_at_i}
              by={author}
              text={text}
              parent={parent_id}
            />
            <Box key={`${id}-comments`} paddingLeft={5}>
              <StoryComments commentsTree={children} />
            </Box>
          </React.Fragment>
        );
      })}
    </VStack>
  );
}

export { StoryComments };
