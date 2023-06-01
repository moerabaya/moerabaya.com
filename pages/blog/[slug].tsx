import Blog, { getStaticProps } from "./index";

export const getStaticPaths = async () => {
  const { props } = await getStaticProps();

  const categories = new Map();
  props.posts?.map((post) => {
    categories.set((post as any).category, {
      params: {
        slug: (post as any).category.toLowerCase(),
      },
    });
  });
  const paths: any[] = [];
  categories.forEach(function (value, key) {
    paths.push(value);
  });

  return {
    paths,
    fallback: false,
  };
};

export { getStaticProps };
export default Blog;
