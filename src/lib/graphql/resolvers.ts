export const resolvers = {
  Query: {
    topStories: (_: any, __: any, { dataSources }: Record<any, any>) => {
      return dataSources.hackerNewsAPI.getTopStories();
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
