// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

type Data = {
  name: string;
};

async function getItem(id: number) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  const itemData = await response.json();
  return {
    ...itemData,
    totalKidsCount: itemData?.descendants || 0,
  };
}

async function getAllComments(ids: [number]): Promise<Array<any>> {
  const kidsData = ids.map(async (id: number) => {
    const data = await getItem(id);
    if (Array.isArray(data.kids) && data.kids.length > 0) {
      const { kids, ...rootData } = data;
      const nextKids = await getAllComments(kids);
      const nextKidsData = await Promise.all(nextKids);

      return {
        id,
        ...rootData,
        kids: nextKidsData,
      };
    }
    return {
      ...data,
      id,
    };
  });
  return Promise.all(kidsData);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { itemId } = req.query;
  const id = itemId as unknown;
  const rootItem = await getItem(id as number);

  const allComments = await getAllComments(rootItem.kids);

  // @ts-ignore
  res.status(200).json(allComments);
}
