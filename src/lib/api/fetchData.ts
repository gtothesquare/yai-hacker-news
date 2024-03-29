import 'server-only';
import { HACKER_NEWS_API } from '@/config';

export const fetchData = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${HACKER_NEWS_API}/${path}.json`, { next: { revalidate: 2 } });

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
};
