import React from 'react';
import { VStack } from '@chakra-ui/react';
import { CommentProps, Comment } from './Comment';

// TODO merge types with api types
export type CommentItem = {
  by: string;
  parent: number;
  id: number;
  type: 'comment' | 'story' | 'job' | 'poll' | 'pollopt';
  kids: [CommentItem];
  time: number;
  text: string;
};

export interface StoryCommentsProps {
  commentsTree: [CommentItem];
}

function StoryComments({ commentsTree }: StoryCommentsProps) {
  return (
    <VStack paddingTop={5}>
      {commentsTree.map(({ id, time, text, by }) => {
        return <Comment time={time} by={by} id={id} text={text} key={id} />;
      })}
    </VStack>
  );
}

export { StoryComments };
