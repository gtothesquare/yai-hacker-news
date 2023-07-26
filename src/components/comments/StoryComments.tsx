'use client';

import React from 'react';
import useSWR from 'swr';
import { Skeleton } from '@/components/ui/Skeleton';
import { StoryComment } from '@/components/comments/StoryComment';
import { ItemAlgolia } from '@/types';
import { fetchAlgoliaData } from '@/lib/api/fetchAlgoliaData';

interface Props {
  itemId: string;
}

const fetcher = (path: string) => fetchAlgoliaData<ItemAlgolia>(path);

function StoryComments({ itemId }: Props) {
  console.log(itemId);
  const { data, isLoading } = useSWR(`/items/${itemId}`, fetcher);

  if (isLoading) {
    return (
      <div className="flex flex-col space-y-4 mt-6">
        <div className="py-2 flex flex-col space-y-2">
          <Skeleton className="bg-slate-700 h-4 w-[200px]" />
          <Skeleton className="bg-slate-700 h-20 w-full" />
        </div>
        <div className="py-2 flex flex-col space-y-2">
          <Skeleton className="bg-slate-700 h-4 w-[200px]" />
          <Skeleton className="bg-slate-700 h-20 w-full" />
        </div>
        <div className="py-2 flex flex-col space-y-2">
          <Skeleton className="bg-slate-700 h-4 w-[200px]" />
          <Skeleton className="bg-slate-700 h-20 w-full" />
        </div>
        <div className="py-2 flex flex-col space-y-2">
          <Skeleton className="bg-slate-700 h-4 w-[200px]" />
          <Skeleton className="bg-slate-700 h-20 w-full" />
        </div>
        <div className="py-2 flex flex-col space-y-2">
          <Skeleton className="bg-slate-700 h-4 w-[200px]" />
          <Skeleton className="bg-slate-700 h-20 w-full" />
        </div>
      </div>
    );
  }

  const comments = data?.children;

  if (comments && comments.length > 0) {
    return (
      <div>
        {comments.map((comment: ItemAlgolia) => (
          <StoryComment key={comment.id} commentData={comment} />
        ))}
      </div>
    );
  }
}

export { StoryComments };
