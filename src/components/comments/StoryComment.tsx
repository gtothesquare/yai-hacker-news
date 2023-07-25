import React from 'react';
import { ItemComment } from '@/types';
import { format } from 'timeago.js';
import Link from '@/components/ui/Link';

interface Props {
  commentData: ItemComment;
}

export function StoryComment({ commentData }: Props) {
  const { id, by, time, text, comments, parent } = commentData;
  return (
    <div id={`${id}`}>
      <div className="flex flex-col text-xs md:text-sm">
        <div className="text-gray-500 flex space-x-1 py-4">
          <div>{by}</div>
          <div>{format(time * 1000)}</div>
          <div>|</div>
          {parent ? (
            <div>
              <Link href={`#${parent}`}>parent</Link>
            </div>
          ) : null}
        </div>
        <div
          className="w-full break-word [&>p]:break-words [&>p]:my-2 [&>pre]:break-words [&>pre]:whitespace-pre-wrap [&>pre]:text-xs [&>pre]:my-2 [&_a]:underline [&_a]:text-sky-500"
          dangerouslySetInnerHTML={{
            __html: text ?? '',
          }}
        />
        <div className="flex flex-col space-x-4 pl-6">
          {comments.map((comment) => (
            <StoryComment key={comment.id} commentData={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}
