import React from 'react';
import { Story } from '@/components/stories/Story';

interface Props {
  storyIds: number[];
  page?: number;
  limit?: number;
}

async function Stories({ storyIds, limit = 40, page = 1 }: Props) {
  const offset = (page - 1) * limit;
  const pageStoryIds = storyIds.slice(offset, limit + offset);

  return (
    <div className="flex flex-col space-y-2">
      {pageStoryIds.map((storyId, i) => {
        const place = offset + i + 1;
        return <Story key={storyId} place={place} storyId={storyId} />;
      })}
    </div>
  );
}

export { Stories };
