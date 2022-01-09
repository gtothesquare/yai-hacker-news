// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

type Item = {
  descendants: number | undefined;
  by: string;
  parent: number;
  id: number;
  type: 'comment' | 'story' | 'job' | 'poll' | 'pollopt';
  kids: [number];
  time: number;
};

async function getItem(id: number) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  const itemData = (await response.json()) as Item;
  return {
    ...itemData,
    totalKidsCount: itemData?.descendants || 0,
  };
}

async function getAllComments(ids: [number]): Promise<Array<any>> {
  if (!Array.isArray(ids)) {
    return Promise.resolve([]);
  }
  const kidsData = ids.map(async (id: number) => {
    const data = await getItem(id);
    if (Array.isArray(data.kids) && data.kids.length > 0) {
      const { kids, ...rootData } = data;
      const nextKids = await getAllComments(kids);
      const nextKidsData = await Promise.all(nextKids);

      return {
        ...rootData,
        kids: nextKidsData,
      };
    }
    return data;
  });
  return Promise.all(kidsData);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Item>>
) {
  const { itemId } = req.query;
  const id = itemId as unknown;
  const rootItem = await getItem(id as number);

  const allComments = await getAllComments(rootItem.kids);

  res.status(200).json(allComments);
}
