// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    getPosts: () => [
      {
        id: "12321321",
        name: "Random Post Name",
      },
    ],
  },
};

export default resolvers;
