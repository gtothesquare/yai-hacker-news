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
    children: async (
      { id }: { id: number },
      __: any,
      { dataSources }: Record<any, any>
    ) => {
      const details = await dataSources.hnItemDetailsAPI.getItemDetails(id);
      const children = details?.children;
      if (!Array.isArray(children)) {
        return JSON.stringify('[]');
      }
      return JSON.stringify(children);
    },
  },
};
