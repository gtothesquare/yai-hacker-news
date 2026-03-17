import { Skeleton } from '@/components/ui/Skeleton';

interface Props {
  lines?: number;
}

export const ItemsSkeleton = ({ lines = 40 }: Props) => {
  const linesArr = Array(lines).fill(0);

  return (
    <div className="w-full h-full space-y-2">
      {linesArr.map((_, index) => (
        <div key={index} className="space-y-1">
          <Skeleton className="h-4 max-w-xl" />
          <Skeleton className="h-2 max-w-xl" />
        </div>
      ))}
    </div>
  );
};
