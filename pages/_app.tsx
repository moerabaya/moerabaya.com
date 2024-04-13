import "../styles/app.scss";
import type { AppProps } from "next/app";
import Layout from "../templates/Layout";
import App from "next/app";

import Cookies from "universal-cookie";
import consts from "consts";
import ThemeProvider from "templates/ThemeProvider";
import { getProjects } from "pages";
import Script from "next/script";
// prevent TypeScript errors on the css prop on arbitrary elements
// import {} from 'styled-components/cssprop'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider {...pageProps}>
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
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context);

  const cookies = new Cookies(context.ctx.req.headers.cookie);
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
