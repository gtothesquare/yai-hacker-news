import React from 'react';
import { Box, Link } from '@chakra-ui/react';

export interface StoryLinkProps {
  title: string;
  url: string;
  storyNumber: number;
}

function StoryLink({ title, url, storyNumber }: StoryLinkProps) {
  return (
    <Box>
      {storyNumber} - <Link href={url}>{title}</Link>
    </Box>
  );
}

export { StoryLink };
