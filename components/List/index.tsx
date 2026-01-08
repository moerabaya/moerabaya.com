import { PolymorphicProps } from "@/utils/css/polymorphic";
import { twMerge } from "tailwind-merge";

type ListProps<E extends React.ElementType> = PolymorphicProps<E> & {
  className?: string;
};

const ListHeader = <E extends React.ElementType = "h4">({
  as,
  children,
  ...rest
}: ListProps<E>) => {
  const Component = as || "h4";
  return <Component {...rest}>{children}</Component>;
};

const ListItem = <E extends React.ElementType = "li">({
  as,
  children,
  className,
  ...rest
}: ListProps<E>) => {
  const Component = as || "li";
  return (
    <Component className={twMerge("mb-3", className)} {...rest}>
      {children}
    </Component>
  );
};

const List = <E extends React.ElementType = "ul">({
  as,
  children,
  className,
  ...rest
}: ListProps<E>) => {
  const Component = as || "ul";
  return (
    <Component className={twMerge("m-0 p-0", className)} {...rest}>
      {children}
    </Component>
  );
};

export { List, ListHeader, ListItem };
