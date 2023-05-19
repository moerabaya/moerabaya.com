declare module "motion" {
  type TagType = {
    p: "p";
    h1: "h1";
    h2: "h2";
    h3: "h3";
    h4: "h4";
    h5: "h5";
    h6: "h6";
  };

  interface AnimatedCharachtersProps
    extends ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">> {
    children?: ReactElement;
    text: string;
    type: tagMap;
    showDuration: number;
    hideDuration: number;
  }

  interface AnimatedTextProps
    extends ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">> {
    children?: ReactElement;
    text: string;
    type: tagMap;
    finished?: (state: boolean) => void;
  }
}
