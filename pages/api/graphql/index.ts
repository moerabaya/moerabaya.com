import { ApolloServer } from "@apollo/server";
import resolvers from "apollo/resolvers";
import typeDefs from "apollo/schemas";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
});
