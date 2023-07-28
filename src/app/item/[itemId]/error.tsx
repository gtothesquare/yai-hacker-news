'use client';

import { useEffect } from 'react';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2></h2>
      <Alert variant="error">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error fetching comments</AlertTitle>
        <AlertDescription>
          {"Could not load all comments, Vercel functions can't handle big payloads"}
        </AlertDescription>
      </Alert>
    </div>
  );
}
