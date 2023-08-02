import React from 'react';
import { SearchField } from './components/SearchField';
import { fetchAlgoliaData } from '@/lib/api/fetchAlgoliaData';
import { SearchItem } from '@/types';
import { Story } from '@/components/HNstories/Story';

interface Props {
  searchParams: {
    query: string;
  };
}

interface SearchResult {
  hits: SearchItem[];
}

async function search({ query, tags = ['story'] }: { query: string; tags?: string[] }) {
  if (!query) {
    return [];
  }
  const tagsParams = tags.join(',');
  const result = await fetchAlgoliaData<SearchResult>(`/search?query=${query}&tags=${tagsParams}`);
  return result.hits ?? [];
}

async function SearchPage({ searchParams: { query } }: Props) {
  const searchItems = await search({ query });
  return (
    <div>
      <SearchField currentQuery={query} />
      <div className="flex flex-col space-y-2 mt-4">
        {searchItems.map((searchItem, index) => {
          return (
            <Story storyId={searchItem.objectID} place={index + 1} key={searchItem.objectID} />
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
