import React from 'react';
import { fetchData } from '@/lib/api/fetchData';
import Link from '@/components/ui/Link';
import { format } from 'timeago.js';
import { Item } from '@/types';
import { fetchComments } from '@/lib/api/fetchComments';
import { StoryComment } from '@/components/comments/StoryComment';

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
  const comments = await fetchComments(item.kids ?? []);
  return (
    <div>
      <div className="flex space-x-2">
        {item.url ? <Link href={item.url}>{item.title}</Link> : item.title}
      </div>
      <div className="flex space-x-1 text-sm text-gray-500">
        <div>{item.score} points</div>
        <div>{item.by}</div>
        <div>{format(item.time * 1000)}</div>
        <div>{item.descendants} comments</div>
      </div>
      {comments.map((comment) => (
        <StoryComment key={comment.id} commentData={comment} />
      ))}
    </div>
  );
}

export default ItemPage;
