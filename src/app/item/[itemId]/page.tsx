import React from 'react';
import { fetchData } from '@/lib/api/fetchData';
import { Link } from '@/components/ui/Link';
import { format } from 'timeago.js';
import { Item, ItemAlgolia } from '@/types';
import { StoryComment } from '@/components/comments/StoryComment';
import { fetchAlgoliaData } from '@/lib/api/fetchAlgoliaData';

interface Props {
  params: {
    itemId: string;
  };
}

export async function generateMetadata({ params: { itemId } }: Props) {
  const item = await fetchData<Item>(`/item/${itemId}`);
  return {
    title: `Yai Hacker News | ${item.title}`,
  };
}

async function ItemPage({ params: { itemId } }: Props) {
  const item = await fetchData<Item>(`/item/${itemId}`);
  const { children } = await fetchAlgoliaData<ItemAlgolia>(`/items/${itemId}`);
  return (
    <div>
      <div className="flex space-x-2">
        {item.url ? <Link href={item.url}>{item.title}</Link> : item.title}
      </div>
      <div className="flex space-x-1 text-sm text-gray-500">
        <p>
          {item.score} points {item.score} points {item.by} {format(item.time * 1000)}{' '}
          {item.descendants} comments
        </p>
      </div>
      {children.map((comment) => (
        <StoryComment key={comment.id} commentData={comment} />
      ))}
    </div>
  );
}

export default ItemPage;
