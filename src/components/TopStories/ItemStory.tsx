import React from 'react';
import { Container, ItemLink, SecondLine } from '../Item';
import { Link } from '@chakra-ui/react';
import { format } from 'timeago.js';
import { Item } from './types';

function ItemStory({ storyItem }: { storyItem: Item }) {
  const { id, title, url, score, by, totalKidsCount, time } = storyItem;
  const commentsUrl = `/item/${id}`;
  const itemUrl = url ? url : commentsUrl;
  return (
    <Container>
      <ItemLink title={title} url={itemUrl} />
      <SecondLine>
        {score} points by {by}
        <Link marginLeft={1} href={commentsUrl}>
          {format(time * 1000)}
        </Link>
        <Link marginLeft={1} href={commentsUrl}>
          {totalKidsCount} comments
        </Link>
      </SecondLine>
    </Container>
  );
}

export { ItemStory };
