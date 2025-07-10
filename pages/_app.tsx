import "@/styles/app.scss";

import type { AppContext, AppInitialProps, AppProps } from "next/app";
import App from "next/app";
import Script from "next/script";
import Layout from "@/templates/Layout";
import consts from "consts";
import { getProjects } from "pages";
import ThemeProvider from "templates/ThemeProvider";
import Cookies from "universal-cookie";

function MyApp({ Component, pageProps }: AppProps<AppInitialProps>) {
  return (
    <ThemeProvider>
      <Script
        async
        onError={(e: Error) => {
          console.error("Script failed to load", e);
        }}
        src="https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);

  const cookies = new Cookies(context.ctx.req?.headers.cookie);
  const passwords = cookies.get(consts.SiteReadCookie) ?? {};

  const projects = await getProjects();

  projects.map((project) => {
    const password = project.password;
    if (passwords[project.id] === password) {
      if (!appProps.pageProps.hasReadPermission)
        appProps.pageProps.hasReadPermission = {};
      appProps.pageProps.hasReadPermission[project.id] = true;
    }
    return project;
  });

  return { ...appProps };
};

export default MyApp;
