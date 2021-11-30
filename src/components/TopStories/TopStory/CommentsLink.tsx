import React from 'react';
import { Link, Text } from '@chakra-ui/react';

export interface CommentsLinkProps {
  url: string;
  count: number;
}

function CommentsLink({ url, count }: CommentsLinkProps) {
  return (
    <Link url={url}>
      <Text>{count} comments</Text>
    </Link>
  );
}

export { CommentsLink };
