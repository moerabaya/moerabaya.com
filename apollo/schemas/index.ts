// The GraphQL schema
const typeDefs = `#graphql
  type Post {
    id: ID
    title: String
    description: String
    content: String
  }

  input PostInput {
    title: String!
    description: String
    content: String
  }

  type Query {
    getPosts: [Post]
  }

  type Mutation {
    createPosts(input: PostInput!): Post
  }
`;

export default typeDefs;
