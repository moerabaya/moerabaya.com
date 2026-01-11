import { AnimatedView, Link } from "@/components";
import { Post } from "@/types";
import { useTranslations } from "next-intl";

import Button from "@/components/Button/Button.styled";

export default function BlogLayout({
  children,
  posts,
  category,
}: {
  children: React.ReactNode;
  posts: Post[];
  category?: string;
}) {
  const t = useTranslations();

  const getAllCategories = () => {
    const categories = new Map<string, Post[]>();
    for (const post of posts) {
      categories.set(post.category, [
        ...(categories?.get(post.category) ?? []),
        post,
      ]);
    }
    return categories;
  };

  const renderCategories = () => {
    const items: JSX.Element[] = [];
    items.push(
      <Button
        as={Link}
        key={"all"}
        href={`/blog`}
        className={`${
          !category &&
          "cursor-default !border-neutral-300 dark:!border-stone-800"
        }`}
        variant="outline"
        layout="link"
        prefetch
      >
        All
      </Button>
    );

    getAllCategories().forEach((_, key) => {
      items.push(
        <Button
          as={Link}
          key={key}
          href={`/blog?category=${key.toString().toLowerCase()}`}
          className={`${
            category === key.toString().toLowerCase() &&
            "!dark:border-neutral-700 cursor-default !border-neutral-300"
          }`}
          variant="outline"
          layout="link"
          prefetch
        >
          {key}
        </Button>
      );
    });

    return items;
  };
  return (
    <div className="pt-[75px]">
      <div className="container mx-auto max-w-4xl px-5 pt-5">
        <AnimatedView>
          <h4 className="bold px-5 uppercase">{t("blog.title")}</h4>
        </AnimatedView>
        <AnimatedView>
          <div className="space-x-3 px-4 pt-4">{renderCategories()}</div>
        </AnimatedView>
        <ul className="mx-0 px-0 py-5">{children}</ul>
      </div>
    </div>
  );
}
