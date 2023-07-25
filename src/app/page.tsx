import React from 'react';
import { fetchData } from '@/lib/api/fetchData';
import { Stories } from '@/components/stories/Stories';
import Link from '@/components/ui/Link';

interface Props {
  searchParams: { page?: string };
}

export default async function Home({ searchParams }: Props) {
  const { page } = searchParams;
  const currentPage = !page ? 1 : parseInt(page);
  const nextPage = currentPage + 1;
  const topStories = await fetchData<Array<number>>('topstories');
  return (
    <div>
      <Stories storyIds={topStories} page={currentPage} limit={40} />
      <div className="pt-4 w-full text-center">
        <Link href={`/?page=${nextPage}`}>More</Link>
      </div>
    </div>
  );
}
