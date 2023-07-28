'use client';
import React from 'react';
import { ItemAlgolia } from '@/types';
import { format } from 'timeago.js';
import { Link } from '@/components/ui/Link';

interface Props {
  commentData: ItemAlgolia;
}

export function StoryComment({ commentData }: Props) {
  const { id, author, created_at_i, text, children, parent_id } = commentData;
  return (
    <div id={`${id}`}>
      <div className="flex flex-col text-xs md:text-sm">
        <div className="text-gray-500 flex space-x-1 pt-4 pb-0.5">
          <p>
            {author} {format(created_at_i * 1000)} |{' '}
            {parent_id ? <Link href={`#${parent_id}`}>parent</Link> : null}
          </p>
        </div>
        <div
          className="w-full break-word [&>p]:break-words [&>p]:my-2 [&>pre]:break-words [&>pre]:whitespace-pre-wrap [&>pre]:text-xs [&>pre]:my-2 [&_a]:underline [&_a]:text-sky-500"
          dangerouslySetInnerHTML={{
            __html: text ?? '',
          }}
        />
        <div className="flex flex-col space-x-4 pl-6">
          {children.map((comment) => (
            <StoryComment key={comment.id} commentData={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
