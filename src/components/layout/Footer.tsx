import React from 'react';
import { Link } from '@/components/ui/Link';
import { SearchField } from '@/app/search/components/SearchField';

export function Footer() {
  return (
    <footer className="flex justify-center mt-5 py-5 w-full border-t-4 border-stone-700">
      <div className="flex flex-col space-y-2">
        <SearchField />
        <div className="text-xs">
          <Link href="https://gerieshandal.com">by @gtothesquare</Link>
        </div>
      </div>
    </footer>
  );
}
