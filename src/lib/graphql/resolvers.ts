export interface PagingArgsTypes {
  limit: number;
  offset: number;
}
export const resolvers = {
  Query: {
    topStories: (
      _: any,
      { limit, offset }: PagingArgsTypes,
      { dataSources }: Record<any, any>
    ) => {
      return dataSources.hackerNewsAPI.getTopStories({ limit, offset });
    },
    item: (
      _: any,
      { id }: { id: number },
      { dataSources }: Record<any, any>
    ) => {
      return dataSources.hackerNewsAPI.getItem(id);
    },
  },
  Item: {
    kids: ({ kids }: any, __: any, { dataSources }: Record<any, any>) => {
      if (!Array.isArray(kids)) {
        return [];
      }
      return dataSources.hackerNewsAPI.getKids(kids);
    },
  },
  Comment: {
    kids: ({ kids }: any, __: any, { dataSources }: Record<any, any>) => {
      if (!Array.isArray(kids)) {
        return [];
      }
      return dataSources.hackerNewsAPI.getKids(kids);
    },
  },
};
