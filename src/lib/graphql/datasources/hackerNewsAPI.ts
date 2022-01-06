import { RESTDataSource } from 'apollo-datasource-rest';
import { PagingArgsTypes } from '../resolvers';

export class HackerNewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://hacker-news.firebaseio.com/v0/';
  }

  async getTopStories({ limit, offset }: PagingArgsTypes) {
    const storyIds = await this.get('topstories.json');

    const allStoryIds = storyIds.map((id: number, index: number) => ({
      id,
      place: index + 1,
    }));
    const pageStoryIds = allStoryIds.slice(offset, limit + offset);
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

  async getItem(id: number) {
    const itemData = await this.get(`item/${id}.json`);
    return {
      ...itemData,
      totalKidsCount: itemData?.descendants || 0,
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
