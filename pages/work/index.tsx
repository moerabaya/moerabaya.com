import Head from "next/head";
import Link from "next/link";
import React from "react";
import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Article from "components/molecules/Article";
import useFormatter from "hooks/useFormatter";
import AnimatedView from "components/atoms/AnimatedView";
import { Text, Grid, Row } from "components/atoms";
import useGlobalization from "hooks/useGlobalization";
import { Project } from "types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import "swiper/css";

interface WorkProps {
  projects: Project[];
}
const WorkCarousel = ({ projects }: WorkProps) => {
  const prevScrollY = React.useRef(0);
  const swiperRef = React.useRef<any>();
  const [mousewheel, setMousewheel] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 1) {
        // setGoingUp(false);
        setTimeout(() => {
          if (swiperRef?.current) {
            swiperRef.current.mousewheel.enable();
            swiperRef.current.allowTouchMove = true;
            console.log("scroll top", currentScrollY);
          }
        }, 0);
        console.log("hello world!");
      }
      // if (prevScrollY.current > currentScrollY && !goingUp) {
      //   setGoingUp(true);
      // }

      prevScrollY.current = currentScrollY;
      // console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Grid
      as={Swiper}
      slidesPerView={1}
      spaceBetween={30}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      direction={"vertical"}
      fluid={"all"}
      style={{ height: "100vh" }}
      grabCursor={true}
      // allowTouchMove={false}
      mousewheel={
        mousewheel
          ? {
              forceToAxis: true,
              releaseOnEdges: true,
            }
          : false
      }
      onReachEnd={(swiper) => {
        swiper.mousewheel.disable();
        swiper.allowTouchMove = false;
        setMousewheel(false);
      }}
      // onWheel={(swiper) => {
      //   console.log("trying to scroll!");
      // }}
      onScroll={(swiper: any) => {
        // window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }}
      modules={[Mousewheel]}
    >
      {projects?.map((project: Project, index: number) => (
        <SwiperSlide style={{ height: "100vh" }} key={project.slug}>
          <h1>Slide {index}</h1>
        </SwiperSlide>
      ))}
    </Grid>
  );
};

const Work = ({ projects }: WorkProps) => {
  const formatter = useFormatter();
  const { getLocalizedString } = useGlobalization();
  return (
    <div className="page-content">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>
          {getLocalizedString("work", "title")} - {getLocalizedString("name")}
        </title>

        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="title"
          content={`${getLocalizedString(
            "work",
            "title"
          )} - ${getLocalizedString("name")}`}
        />
        <meta
          name="description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content="https://moerabaya.com/blog" />
        <meta property="og:title" content="Blog | Mohammed Rabay'a" />
        <meta
          property="og:description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />
        <meta
          property="og:image"
          content={require("assets/images/metaimage.png")}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content="https://moerabaya.com/blog" />
        <meta
          property="twitter:title"
          content={`${getLocalizedString(
            "work",
            "title"
          )} - ${getLocalizedString("name")}`}
        />
        <meta
          property="twitter:description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />
        <meta
          property="twitter:image"
          content={require("assets/images/metaimage.png")}
        />
      </Head>
      {/* <h2>Coming soon</h2> */}
      <WorkCarousel projects={projects} />
      {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
    </div>
  );
};

export default Work;

export async function getStaticProps() {
  const projectsDirectory = path.join(
    process.cwd() /* process current directory */,
    "projects"
  );
  const filenames = await fs.readdir(projectsDirectory);

  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const content = await fs.readFile(filePath, "utf8");
      const matter = grayMatter(content);
      return {
        filename,
        matter,
        content,
      };
    })
  );
  const projects = files.map((file) => {
    return {
      ...file.matter.data,
      slug: `work/${file.filename.replace(".mdx", "")}`,
      content: file.content,
    };
  });

  return {
    props: {
      projects,
    },
  };
}
