import Head from "next/head";
import { useRouter } from "next/router";
import MetaImage from "@/assets/images/metaimage.png";

import useGlobalization from "@/hooks/useGlobalization";

type MetaProps = {
  title: string;
  description?: string;
  image?: string;
};

const Meta = (props: MetaProps) => {
  const { pathname } = useRouter();
  const { locale, translate } = useGlobalization();

  return (
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>
        {props.title} - {translate("name")}
      </title>

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content={`${props.title} | ${translate("name")}`} />
      <meta name="description" content={props.description} />

      {/* <!-- Open Graph --> */}
      <meta property="og:url" content={"https://moerabaya.com" + pathname} />
      <meta
        property="og:title"
        content={`${props.title} | ${translate("name")}`}
      />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:locale"
        content={locale === "en" ? "en_US" : "ar_AR"}
      />
      <meta
        property="og:image"
        content={props.image ? require(props.image) : MetaImage.src}
      />

      {/* <!-- X --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={"https://moerabaya.com" + pathname} />
      <meta
        name="twitter:title"
        content={`${props.title} | ${translate("name")}`}
      />
      <meta name="twitter:description" content={props.description} />
      <meta
        name="twitter:image"
        content={props.image ? require(props.image) : MetaImage.src}
      />
    </Head>
  );
};

export default Meta;
