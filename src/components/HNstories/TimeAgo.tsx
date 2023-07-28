'use client';

import React, { useEffect, useState } from 'react';
import { format } from 'timeago.js';

interface Props {
  value: number;
}

export function TimeAgo({ value }: Props) {
  const [isServer, setServer] = useState(true);

  useEffect(() => setServer(false), []);

  return <span> {isServer ? '' : format(value * 1000)}</span>;
}
