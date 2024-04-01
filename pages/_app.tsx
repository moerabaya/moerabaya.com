import "../styles/app.scss";
import type { AppProps } from "next/app";
import Layout from "../templates/Layout";
import App from "next/app";

import Cookies from "universal-cookie";
import consts from "consts";
import ThemeProvider from "templates/ThemeProvider";
import { getProjects } from "pages";
// prevent TypeScript errors on the css prop on arbitrary elements
// import {} from 'styled-components/cssprop'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider {...pageProps}>
      <Layout>
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
  console.log(passwords);

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
