'use client';

import React, { useEffect } from 'react';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <Alert variant="error">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Top stories request failed</AlertTitle>
        <AlertDescription>
          You are possibly offline or there is an problem with the HN api
        </AlertDescription>
      </Alert>
    </div>
  );
}
