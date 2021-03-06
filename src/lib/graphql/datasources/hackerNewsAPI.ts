import { RESTDataSource } from 'apollo-datasource-rest';
import { PagingArgsTypes } from '../resolvers';
import { getValue, setValue } from 'lib/cache';
import { HACKER_NEWS_API } from 'config';

export class HackerNewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = HACKER_NEWS_API;
  }

  /**
   *
   * @param limit
   * @param offset
   */
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

  /**
   *
   * @param id
   */
  async getCachedItem(id: number): Promise<Record<string, unknown> | null> {
    const itemCacheKey = `${id}`;
    return getValue(itemCacheKey);
  }

  /**
   *
   * @param id
   * @param itemData
   */
  async setCachedItem(id: number, itemData: Record<string, unknown>) {
    const itemCacheKey = `${id}`;
    return setValue(itemCacheKey, itemData, 'EX', 60 * 5); // 5 minutes
  }

  /**
   *
   * @param id
   */
  async getItem(id: number) {
    const start = Date.now();
    const itemDataCached = await this.getCachedItem(id);
    if (itemDataCached) {
      return {
        ...itemDataCached,
        totalChildrenCount: itemDataCached?.descendants || 0,
        latency: Date.now() - start,
      };
    }

    const itemData = await this.get(`item/${id}.json`);
    await this.setCachedItem(id, itemData);

    return {
      ...itemData,
      totalChildrenCount: itemData?.descendants || 0,
      latency: Date.now() - start,
    };
  }

  /**
   *
   * @param ids
   */
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
