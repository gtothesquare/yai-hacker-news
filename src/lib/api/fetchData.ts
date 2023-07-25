import { cache } from 'react';
import 'server-only';
import { HACKER_NEWS_ALGOLIA_API, HACKER_NEWS_API } from '@/config';

export const fetchData = cache(async <T>(path: string): Promise<T> => {
  const res = await fetch(`${HACKER_NEWS_API}/${path}.json`);

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json() as T;
});

export const fetchDataAlgolia = cache(async <T>(path: string): Promise<T> => {
  const res = await fetch(`${HACKER_NEWS_ALGOLIA_API}/${path}`);

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json() as T;
});
