import React from 'react';
import Link from '@/components/ui/Link';

export function Footer() {
  return (
    <footer className="mt-5 py-5 w-full border-t-4 border-stone-700">
      <div className={'text-center'}>
        <Link href="https://gerieshandal.com">by @gtothesquare</Link>
      </div>
    </footer>
  );
}
