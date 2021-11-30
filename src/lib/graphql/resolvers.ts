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
    story: (
      _: any,
      { id }: { id: number },
      { dataSources }: Record<any, any>
    ) => {
      return dataSources.hackerNewsAPI.getStory(id);
    },
  },
  Story: {
    payload: (
      { id }: { id: number },
      _: any,
      { dataSources }: Record<any, any>
    ) => {
      return dataSources.hackerNewsAPI.getStory(id);
    },
  },
};
