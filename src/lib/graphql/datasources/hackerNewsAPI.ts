import { RESTDataSource } from 'apollo-datasource-rest';

export class HackerNewsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://hacker-news.firebaseio.com/v0/';
  }

  async getTopStories() {
    const storyIds = await this.get('topstories.json');
    return storyIds.map((id: number) => ({ id }));

    //return storyIds;
  }

  async getStory(id: number) {
    const res = await this.get(`item/${id}.json`);
    const { kids, ...storyData } = res;
    return {
      ...storyData,
      comments: kids,
    };
  }
}
