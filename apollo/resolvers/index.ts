import connection from "lib/database";
import Post from "lib/database/models/Post";
import { reject } from "lodash";

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    getPosts: async () => {
      try {
        await connection();
        return Post.find({});
      } catch (err) {
        console.error(err);
      }
      return [];
    },
  },
  Mutation: {
    createPosts: async (_: any, { input }: any, { dataSources }: any) => {
      await connection();
      const createPost = new Post({
        title: input.title,
        description: input.description,
        content: input.content,
      });

      createPost.id = createPost._id;
      return new Promise((resolve, reject) => {
        createPost.save((err: any) => {
          if (err) return reject(err);
          else resolve(createPost);
        });
      });
    },
  },
};

export default resolvers;
