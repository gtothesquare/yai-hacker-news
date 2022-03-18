import { RESTDataSource } from 'apollo-datasource-rest';
import { HACKER_NEWS_ITEM_DETAILS_API } from '../../../config';

export class HnItemDetailsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = HACKER_NEWS_ITEM_DETAILS_API;
  }

  async getItemDetails(id: number) {
    const start = Date.now();
    const itemDetailsData = await this.get(`${id}`);
    return {
      ...itemDetailsData,
      latency: Date.now() - start,
    };
  }
}
