import React from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export function SearchField({ currentQuery }: { currentQuery?: string }) {
  return (
    <form className="flex space-x-2 align-middle max-w-sm" action="/search" method="get">
      <MagnifyingGlassIcon height={24} width={24} className="text-gray-500" />
      <input
        className="text-gray-500 block bg-gray-800 focus:outline-none appearance-none w-full text-sm leading-6 placeholder-gray-600"
        placeholder="Search..."
        id="searchField"
        name="query"
        type="search"
        autoCorrect="off"
        spellCheck="false"
        autoCapitalize="none"
        autoComplete="false"
        defaultValue={currentQuery}
      />
    </form>
  );
}
