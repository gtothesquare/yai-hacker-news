export const fetchAlgoliaData = async <T>(path: string): Promise<T> => {
  const res = await fetch(`https://hn.algolia.com/api/v1/${path}`);

  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
};
