import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";

interface AvatarProps extends ImageProps {
  size: number | string;
  href?: string;
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
      <a>{image}</a>
    </Link>
  );
};

export default Avatar;
