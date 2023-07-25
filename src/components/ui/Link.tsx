import React from 'react';

interface Props {
  href: string;
  children: React.ReactNode;
}

function Link({ children, href }: Props) {
  return (
    <a className="hover:underline" href={href}>
      {children}
    </a>
  );
}

export default Link;
