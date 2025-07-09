import Blog, { getStaticProps } from "./index";

type CategoryParams = {
  params: {
    slug: string;
  };
};

export const getStaticPaths = async () => {
  const { props } = await getStaticProps();

  const categories = new Map<string, CategoryParams>();
  props.posts?.map((post) => {
    categories.set(post.category, {
      params: {
        slug: post.category.toLowerCase(),
      },
    });
  });
  const paths: CategoryParams[] = [];
  categories.forEach(function (value) {
    paths.push(value);
  });

  return {
    paths,
    fallback: false,
  };
};

export { getStaticProps };
export default Blog;
