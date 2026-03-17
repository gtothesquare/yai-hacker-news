import React from 'react';
import NextLink from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
}

function Link({ children, href }: Props) {
  return (
    <NextLink className="hover:underline" href={href}>
      {children}
    </NextLink>
  );
}

export { Link };
