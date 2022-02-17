import { RESTDataSource } from 'apollo-datasource-rest';
import { PagingArgsTypes } from '../resolvers';
import { getValue, setValue } from 'lib/cache';
import { HACKER_NEWS_API } from 'config';

export class HackerNewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = HACKER_NEWS_API;
  }

  async getTopStories({ limit, offset }: PagingArgsTypes) {
    const storyIds = await this.get('topstories.json');

    const allStoryIds = storyIds.map((id: number, index: number) => ({
      id,
      // number in the list when rendering 1, 2 .. 34,35
      place: index + 1,
    }));
    // paging
    const pageStoryIds = allStoryIds.slice(offset, limit + offset);

    // get an array of promises
    const pageStoryData = pageStoryIds.map(
      async ({ id, place }: { id: number; place: number }) => {
        const data = await this.getItem(id);
        return {
          ...data,
          id,
          place,
        };
      }
    );
    return Promise.all(pageStoryData);
  }

  async getCachedItem(id: number): Promise<Record<string, unknown> | null> {
    const itemCacheKey = `${id}`;
    return getValue(itemCacheKey);
  }

  async setCachedItem(id: number, itemData: Record<string, unknown>) {
    const itemCacheKey = `${id}`;
    return setValue(itemCacheKey, itemData, 'EX', 60 * 5); // 5 minutes
  }

  async getItem(id: number) {
    const start = Date.now();
    const itemDataCached = await this.getCachedItem(id);
    if (itemDataCached) {
      return {
        ...itemDataCached,
        totalKidsCount: itemDataCached?.descendants || 0,
        latency: Date.now() - start,
      };
    }

    const itemData = await this.get(`item/${id}.json`);
    await this.setCachedItem(id, itemData);

    return {
      ...itemData,
      totalKidsCount: itemData?.descendants || 0,
      latency: Date.now() - start,
    };
  }
  async getKids(ids: [number]) {
    const kidsData = ids.map(async (id: number) => {
      const data = await this.getItem(id);
      return {
        ...data,
        id,
      };
    });
    return Promise.all(kidsData);
  }
}
