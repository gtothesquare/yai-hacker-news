import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { Comment } from './Comment';

// TODO merge types with api types
export type CommentItem = {
  by: string;
  parent: number;
  id: number;
  type: 'comment' | 'story' | 'job' | 'poll' | 'pollopt';
  kids: [CommentItem];
  time: number;
  text: string;
  deleted?: boolean;
};

export interface StoryCommentsProps {
  commentsTree: [CommentItem];
}

function StoryComments({ commentsTree }: StoryCommentsProps) {
  return (
    <VStack paddingTop={5} alignItems="flex-start" w={'100%'}>
      {commentsTree?.map(({ id, time, text, by, deleted, kids, parent }) => {
        return (
          <React.Fragment key={`${id}-container`}>
            <Comment
              key={id}
              id={id}
              time={time}
              by={by}
              text={text}
              deleted={deleted}
              parent={parent}
            />
            <Box key={`${id}-comments`} paddingLeft={5}>
              <StoryComments commentsTree={kids} />
            </Box>
          </React.Fragment>
        );
      })}
    </VStack>
  );
}

export { StoryComments };
