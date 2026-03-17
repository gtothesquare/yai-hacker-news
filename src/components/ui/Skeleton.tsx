import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const Skeleton = ({ className }: Props) => {
  return <div className={cn('animate-pulse rounded-md bg-gray-700', className)} />;
};
