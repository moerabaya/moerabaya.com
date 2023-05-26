import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";

interface AvatarProps extends Omit<ImageProps, "onClick"> {
  size: ImageProps["width"];
  href?: string;
  onClick?: MouseEventHandler<HTMLImageElement | HTMLAnchorElement> | undefined;
}
const Avatar = (props: AvatarProps) => {
  const image = (
    <Image
      src={props.src}
      alt={props.alt}
      placeholder={props.placeholder}
      blurDataURL={props.blurDataURL}
      width={props.size}
      height={props.size}
      style={{ margin: 0, borderRadius: "3px" }}
    />
  );

  return !props.href ? (
    image
  ) : (
    <Link href={props.href!} onClick={props.onClick}>
      {image}
    </Link>
  );
};

export default Avatar;
