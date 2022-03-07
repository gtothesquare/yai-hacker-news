import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { HACKER_NEWS_ITEM_DETAILS_API } from 'config';

/**
 *
 *   "id": 30586378,
 *   "created_at": "2022-03-07T11:09:01.000Z",
 *   "created_at_i": 1646651341,
 *   "type": "comment",
 *   "author": "morelisp",
 *   "title": null,
 *   "url": null,
 *   "text": "<p>When people talk about &quot;the old web&quot; freshmeat (and its more visual equivalent, themes.org) is usually near the top of my mind. The ability to just see what everyone was up to without layers of product marketing (or, ugh, &quot;DevRel&quot;) on top, and what random (real, not capitalism-induced) itches people were scratching was a creative rush. The closest thing to a programmer&#x27;s equivalent of an art squat and junk shop.</p><p>Its absence is also one of the reasons I think the Linux desktop got so insular in the past decade. Freshmeat was a water cooler for people working on small components - here&#x27;s a text editor, here&#x27;s an ebook reader, here&#x27;s 50 music players - go build your own environment. Where do you go today to &quot;shop&quot; for free software? Usually, just your distro&#x27;s package repo.</p><p>The only comparable online experience I saw in the past decade was the high point of tumblr, albeit for a very different context.</p>",
 *   "points": null,
 *   "parent_id": 30586224,
 *   "story_id": 30586224,
 *   "children": [
 *
 *   ],
 *   "options": [
 *
 *   ]
 * }
 */

type ItemDetail = {
  id: number;
  created_at: string;
  created_at_i: number;
  type: 'comment' | 'story' | 'job' | 'poll' | 'pollopt';
  title: string;
  url: string;
  text?: string;
  points: number;
  author: string;
  parent_id?: number;
  story_id?: number;
  children: [ItemDetail];
};

async function getItemDetails(id: number) {
  const response = await fetch(`${HACKER_NEWS_ITEM_DETAILS_API}${id}`);
  console.log()
  const details = (await response.json()) as ItemDetail;
  return {
    ...details,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemDetail>
) {
  const { id } = req.query;
  const itemId = id as unknown;
  const itemDetails = await getItemDetails(itemId as number);

  res.status(200).json(itemDetails);
}
