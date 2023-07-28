import React from 'react';
import { Link } from '@/components/ui/Link';
import { fetchData } from '@/lib/api/fetchData';
import { Item } from '@/types';
import { format } from 'timeago.js';

interface Props {
  storyId: number;
  place: number;
}

/*
* {
  by: 'jkurnia',
  descendants: 2,
  id: 36837512,
  kids: [ 36838886, 36838823 ],
  score: 10,
  text: 'Hi everyone,<p>Great Books Homeschool has just released this free tool for generating high school transcripts using the standard American unweighted GPA system.  It&#x27;s available to the public at no cost, and no account creation is required.<p>These are both resources that would have saved me time as a new homeschooling parent, and I hope they are helpful to others.<p>StoryComments and feedback are welcome!',
  time: 1690133187,
  title: 'Show HN: High school transcript generator for homeschoolers',
  type: 'story',
  url: 'https://www.greatbookshomeschool.com/free-high-school-transcript-generator'
}
* */

async function Story({ storyId, place }: Props) {
  const story = await fetchData<Item>(`item/${storyId}`);
  const url = story.url ? story.url : `/item/${story.id}`;
  const commentPath = `/item/${story.id}`;
  return (
    <div className="flex space-x-2 font-light">
      <div className="text-gray-500">{place}.</div>
      <div>
        <div className="flex space-x-2">
          <Link href={url}>{story.title}</Link>
        </div>
        <div className="flex space-x-1 text-sm text-gray-500">
          <p>
            {story.score} points {story.by}{' '}
            <Link href={commentPath}>{format(story.time * 1000)}</Link>{' '}
            <Link href={commentPath}>{story.descendants} comments</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export { Story };
