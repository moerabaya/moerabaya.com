// The GraphQL schema
const typeDefs = `#graphql
  type Post {
    id: ID
    description: String
    content: String
  }

  type Query {
    getPosts: [Post]
  }
`;

export default typeDefs;
