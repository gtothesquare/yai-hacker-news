import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';
import { HACKER_NEWS_ITEM_DETAILS_API } from 'config';

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
