import React from 'react';
import Link from '../ui/Link';

export function Header() {
  return (
    <header className="mb-2 py-1 w-full bg-stone-700">
      <div className="mx-auto w-full max-w-5xl px-4 py-2">
        <h1 className="text-3xl font-thin">
          <Link href={'/'}>YHK - yet another hacker news clone</Link>
        </h1>
      </div>
    </header>
  );
}
