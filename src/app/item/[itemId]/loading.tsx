import { Skeleton } from '@/components/ui/Skeleton';
import React from 'react';

export default function LoadingItem() {
  return (
    <div className="flex flex-col space-y-4 mt-6">
      <div className="py-2 flex flex-col space-y-2">
        <Skeleton className="bg-slate-700 h-4 w-[200px]" />
        <Skeleton className="bg-slate-700 h-20 w-full" />
      </div>
      <div className="py-2 flex flex-col space-y-2">
        <Skeleton className="bg-slate-700 h-4 w-[200px]" />
        <Skeleton className="bg-slate-700 h-20 w-full" />
      </div>
      <div className="py-2 flex flex-col space-y-2">
        <Skeleton className="bg-slate-700 h-4 w-[200px]" />
        <Skeleton className="bg-slate-700 h-20 w-full" />
      </div>
      <div className="py-2 flex flex-col space-y-2">
        <Skeleton className="bg-slate-700 h-4 w-[200px]" />
        <Skeleton className="bg-slate-700 h-20 w-full" />
      </div>
      <div className="py-2 flex flex-col space-y-2">
        <Skeleton className="bg-slate-700 h-4 w-[200px]" />
        <Skeleton className="bg-slate-700 h-20 w-full" />
      </div>
    </div>
  );
}
