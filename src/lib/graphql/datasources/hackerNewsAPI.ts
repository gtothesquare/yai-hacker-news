import { RESTDataSource } from 'apollo-datasource-rest';
import { PagingArgsTypes } from '../resolvers';

export class HackerNewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://hacker-news.firebaseio.com/v0/';
  }

  async getTopStories({ limit, offset }: PagingArgsTypes) {
    const storyIds = await this.get('topstories.json');

    const allStoryIds =  storyIds.map((id: number) => ({ id }));
    const temp = allStoryIds.slice(offset, limit + offset);
    console.log(offset, limit,temp);
    return temp
  }

  async getStory(id: number) {
    const res = await this.get(`item/${id}.json`);
    const { descendants, ...storyData } = res;
    return {
      ...storyData,
      totalKidsCount: descendants,
    };
  }
}
