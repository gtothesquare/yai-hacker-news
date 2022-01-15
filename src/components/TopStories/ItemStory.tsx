import React from 'react';
import { Container, ItemLink, SecondLine } from '../Item';
import { Link } from '@chakra-ui/react';
import { format } from 'timeago.js';
import { Item } from './types';

function ItemStory({ storyItem }: { storyItem: Item }) {
  const { id, title, url, score, by, totalKidsCount, time } = storyItem;
  return (
    <Container>
      <ItemLink title={title} url={url} />
      <SecondLine>
        {score} points by {by}
        <Link marginLeft={1} href={`/item/${id}`}>
          {format(time * 1000)}
        </Link>
        <Link marginLeft={1} href={`/item/${id}`}>
          {totalKidsCount} comments
        </Link>
      </SecondLine>
    </Container>
  );
}

export { ItemStory };
